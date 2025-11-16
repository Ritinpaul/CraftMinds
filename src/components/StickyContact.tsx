import { MessageCircle } from "lucide-react";

const StickyContact = () => {
  const whatsappNumber = "+919136474511";
  const whatsappMessage = encodeURIComponent("Hi, I'd like to learn more about your services.");
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-contact fixed right-4 bottom-5 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-all hover:scale-110 hover:shadow-xl md:hidden"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-white" aria-hidden="true" />
    </a>
  );
};

export default StickyContact;

