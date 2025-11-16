// Vercel Serverless Function for handling lead form submissions
// Saves leads to /tmp/leads.csv (Vercel's writable directory)
// Note: /tmp is ephemeral in Vercel. For production, consider using a database or external storage.

import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, email, service } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name and email are required' 
      });
    }

    // Sanitize data for CSV
    const sanitizeForCSV = (str) => {
      if (!str) return '';
      return String(str).replace(/"/g, '""').trim();
    };

    // Create CSV line
    const timestamp = new Date().toISOString();
    const csvLine = `${timestamp},"${sanitizeForCSV(name)}","${sanitizeForCSV(email)}","${sanitizeForCSV(service || '')}"\n`;

    // Determine file path (in Vercel, we use /tmp for writable storage)
    const leadsFilePath = path.join('/tmp', 'leads.csv');

    // Append to CSV file
    // If file doesn't exist, write header first
    if (!fs.existsSync(leadsFilePath)) {
      const header = 'timestamp,name,email,service\n';
      fs.writeFileSync(leadsFilePath, header, 'utf8');
    }

    fs.appendFileSync(leadsFilePath, csvLine, 'utf8');

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error saving lead:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Internal server error' 
    });
  }
}

