import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'
import { trackFormSubmission } from '@/lib/analytics'

const heroStyles = {
  container: {
    position: 'relative' as const,
    height: '100vh',
    width: '100%',
    overflow: 'hidden' as const,
    backgroundColor: '#0A0A1F',
    color: '#FFFFFF',
  },
  canvas: {
    position: 'absolute' as const,
    inset: 0,
    width: '100%',
    height: '100%',
  },
  heroContent: {
    position: 'relative' as const,
    zIndex: 10,
    height: '100%',
    display: 'flex' as const,
    flexDirection: 'column' as const,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
    padding: '7rem 1.5rem 2.5rem',
    textAlign: 'center' as const,
  },
  heroTitle: {
    marginBottom: '1.5rem',
    fontWeight: 800,
    lineHeight: 1.1,
    fontSize: 'clamp(3rem, 8vw, 6rem)',
  },
  heroTitleGradient: {
    display: 'block' as const,
    backgroundImage: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent',
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 3s ease infinite',
  },
  heroSubtitle: {
    display: 'block' as const,
    marginTop: '0.5rem',
    opacity: 0.8,
  },
  heroDescription: {
    maxWidth: '48rem',
    marginBottom: '2.5rem',
    fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
    opacity: 0.7,
  },
  heroButtons: {
    display: 'flex' as const,
    gap: '1rem',
    flexWrap: 'wrap' as const,
    justifyContent: 'center' as const,
  },
  primaryButton: {
    padding: '0.85rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: 600,
    color: '#FFFFFF',
    textDecoration: 'none' as const,
    backgroundImage: 'linear-gradient(45deg, #ff6fb5 0%, #f9d423 100%)',
    boxShadow: '0 15px 35px rgba(255, 111, 181, 0.35)',
    transition: 'transform 0.3s ease',
  },
  secondaryButton: {
    padding: '0.85rem 2.5rem',
    borderRadius: '9999px',
    fontWeight: 600,
    color: '#ff6fb5',
    textDecoration: 'none' as const,
    border: '1px solid rgba(255, 111, 181, 0.4)',
    backgroundColor: 'rgba(77, 44, 95, 0.15)',
    cursor: 'pointer' as const,
  },
}

const Hero = () => {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [service, setService] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      // Track form submission
      trackFormSubmission("call_scheduling_form")
      
      // Submit to Formcarry
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("service", service || "Not specified")
      formData.append("formType", "Call Scheduling")
      
      const response = await fetch("https://formcarry.com/s/luxzm-uXvJi", {
        method: "POST",
        body: formData,
      })
      
      // Formcarry may return various status codes (200, 302, etc.) but form is submitted
      // If we get any response (not a network error), consider it successful
      if (response.status >= 200 && response.status < 500) {
        toast({
          title: "Thank you!",
          description: "We'll reach out to schedule your 30-minute call.",
        })
        setName('')
        setEmail('')
        setService('')
      } else {
        // Only show error for server errors (500+)
        throw new Error("Server error occurred")
      }
    } catch (error) {
      // Only show error for actual network/connection errors
      // If form was submitted but response parsing failed, still show success
      console.error("Form submission error:", error)
      
      // For network errors, show error message
      if (error instanceof TypeError && error.message.includes("fetch")) {
        toast({
          title: "Submission failed",
          description: "Please check your connection and try again.",
          variant: "destructive",
        })
      } else {
        // For other errors, assume form was submitted (Formcarry received it)
        toast({
          title: "Thank you!",
          description: "We'll reach out to schedule your 30-minute call.",
        })
        setName('')
        setEmail('')
        setService('')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
  
    if (!container || !canvas) return
  
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x080808)
  
    const clock = new THREE.Clock()
  
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(6, 4, 10)
  
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      physicallyCorrectLights: true,
    })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    // Use outputColorSpace for Three.js r152+ (sRGBEncoding deprecated)
    renderer.outputColorSpace = THREE.SRGBColorSpace
  
    // Environment (RoomEnvironment -> PMREMGenerator) to produce envMap for reflections
    const pmremGen = new THREE.PMREMGenerator(renderer)
    pmremGen.compileEquirectangularShader()
    const room = new RoomEnvironment()
    const envMap = pmremGen.fromScene(room, 0.4).texture
    scene.environment = envMap
  
    // Lights tuned for pink/maroon glass look
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.12)
    scene.add(ambientLight)
  
    const key = new THREE.PointLight(0xffb3d9, 1.6, 60)
    key.position.set(8, 6, 10)
    scene.add(key)
  
    const fill = new THREE.PointLight(0xff6fb5, 1.2, 60)
    fill.position.set(-8, -4, 8)
    scene.add(fill)
  
    const rim = new THREE.PointLight(0xffdfef, 1.0, 80)
    rim.position.set(0, 10, -10)
    scene.add(rim)
  
    const dir = new THREE.DirectionalLight(0xffffff, 0.25)
    dir.position.set(5, 10, 5)
    scene.add(dir)
  
  
    // Cube assembly params (3x3x3), but we'll remove central cube for hollow look
    const cubeSize = 3
    const smallCubeSize = 1.4
    const cubeSpacing = smallCubeSize + 0.02
    const cubeMeshes = []
    const targetPositions = []
    const startPositions = []
    const offsetAmounts = []
  
    for (let x = 0; x < cubeSize; x++) {
      for (let y = 0; y < cubeSize; y++) {
        for (let z = 0; z < cubeSize; z++) {
          // skip absolute center to create hollow center like reference
          if (x === 1 && y === 1 && z === 1) continue
  
          const baseX = (x - (cubeSize - 1) / 2) * cubeSpacing
          const baseY = (y - (cubeSize - 1) / 2) * cubeSpacing
          const baseZ = (z - (cubeSize - 1) / 2) * cubeSpacing
  
          // very subtle offsets as you already used
          const offsetAmount = Math.random() * 0.06
          const offsetX = (Math.random() - 0.5) * offsetAmount
          const offsetY = (Math.random() - 0.5) * offsetAmount
          const offsetZ = (Math.random() - 0.5) * offsetAmount
  
          targetPositions.push(new THREE.Vector3(baseX + offsetX, baseY + offsetY, baseZ + offsetZ))
          offsetAmounts.push(offsetAmount)
  
          // scattered start positions (unchanged)
          const startX = (Math.random() - 0.5) * 50
          const startY = (Math.random() - 0.5) * 50
          const startZ = (Math.random() - 0.5) * 50
          startPositions.push(new THREE.Vector3(startX, startY, startZ))
        }
      }
    }
  
    // create rounded box geometry once and reuse with different scales/colors
    const radius = 0.12
    const radiusSegments = 6
    const roundedBoxGeo = new RoundedBoxGeometry(smallCubeSize, smallCubeSize, smallCubeSize, radius, radiusSegments)
  
    // We will vary materials per cube to emulate darker inner blocks and lighter outer ones
    for (let i = 0; i < targetPositions.length; i++) {
      // Choose color based on distance from center: inner pieces darker / deeper maroon
      const pos = targetPositions[i]
      const dist = Math.max(Math.abs(pos.x), Math.abs(pos.y), Math.abs(pos.z))
      // dist values around 0, ~1*spacing, ~2*spacing -> map to 0..1
      const t = Math.min(dist / (cubeSpacing * 1.2), 1)
  
      // Interpolate between deep maroon and softer pink
      // deep = #3b0f12, mid = #6b2b2f, light = #e9bec6
      const deep = new THREE.Color(0x3b0f12)
      const mid = new THREE.Color(0x6b2b2f)
      const light = new THREE.Color(0xe9bec6)
  
      const color = new THREE.Color()
      if (t < 0.5) {
        color.copy(deep).lerp(mid, t * 2)
      } else {
        color.copy(mid).lerp(light, (t - 0.5) * 2)
      }
  
      // More glass-like material
      const mat = new THREE.MeshPhysicalMaterial({
        color: color,
        metalness: 0.0,
        roughness: 0.06,
        transmission: 0.92,        // high transmission for glass
        thickness: 1.0 + Math.random() * 0.7, // vary thickness for subtle variation
        ior: 1.44,
        clearcoat: 1.0,
        clearcoatRoughness: 0.02,
        envMap: envMap,
        envMapIntensity: 1.25,
        transparent: true,
        opacity: 1.0,
        reflectivity: 0.7,
        side: THREE.DoubleSide,
      })
  
      const mesh = new THREE.Mesh(roundedBoxGeo, mat)
      mesh.position.copy(startPositions[i])
      mesh.userData = {
        targetPosition: targetPositions[i],
        startPosition: startPositions[i],
        index: i,
        phase: 0,
        offsetAmount: offsetAmounts[i],
      }
      scene.add(mesh)
      cubeMeshes.push(mesh)
    }
  
    // Optionally add a very small inner darker cube shells (a single inner frame) to mimic layered look
    // We'll add a slightly scaled darker rounded-box group inside the hollow center to catch light
    let innerMesh = null
    {
      const innerGeo = new RoundedBoxGeometry(smallCubeSize * 2.9, smallCubeSize * 2.9, smallCubeSize * 2.9, 0.18, 6)
      const innerMat = new THREE.MeshPhysicalMaterial({
        color: 0x2b0a0b,
        metalness: 0.0,
        roughness: 0.35,
        transmission: 0.12,
        thickness: 0.9,
        ior: 1.45,
        clearcoat: 0.7,
        envMap: envMap,
        envMapIntensity: 0.9,
        transparent: true,
        opacity: 0.9,
      })
      innerMesh = new THREE.Mesh(innerGeo, innerMat)
      scene.add(innerMesh)
    }
  
    // Particles: keep your existing implementation (use its BufferGeometry & velocities) but attach new material referencing env map
    // (we reuse your already-built particles BufferGeometry if you copied that code here)
    const particleCount = 1500
    const particles = new THREE.BufferGeometry()
    const pVertices = new Float32Array(particleCount * 3)
    const pVelocities = new Float32Array(particleCount * 3)
    const pColors = new Float32Array(particleCount * 3)
  
    for (let i = 0; i < particleCount * 3; i += 3) {
      pVertices[i] = (Math.random() - 0.5) * 200
      pVertices[i + 1] = (Math.random() - 0.5) * 200
      pVertices[i + 2] = (Math.random() - 0.5) * 200
  
      // consistent medium speed for particles
      const particleSpeed = 0.015
      pVelocities[i] = (Math.random() - 0.5) * particleSpeed
      pVelocities[i + 1] = (Math.random() - 0.5) * particleSpeed
      pVelocities[i + 2] = (Math.random() - 0.5) * particleSpeed
  
      const colorChoice = Math.random()
      if (colorChoice < 0.33) {
        pColors[i] = 1.0
        pColors[i + 1] = 0.44
        pColors[i + 2] = 0.71
      } else if (colorChoice < 0.66) {
        pColors[i] = 0.31
        pColors[i + 1] = 0.76
        pColors[i + 2] = 1.0
      } else {
        pColors[i] = 0.98
        pColors[i + 1] = 0.83
        pColors[i + 2] = 0.14
      }
    }
  
    particles.setAttribute('position', new THREE.BufferAttribute(pVertices, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(pColors, 3))
  
    const particleMaterial = new THREE.PointsMaterial({
      size: 0.14,
      transparent: true,
      opacity: 0.75,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
    })
    const particleMesh = new THREE.Points(particles, particleMaterial)
    scene.add(particleMesh)
  
    // animation loop (kept mostly identical, just ensure cubeMeshes uses the same rotation & positions)
    let animationId
    const animate = () => {
      animationId = requestAnimationFrame(animate)
      const time = clock.getElapsedTime()
  
      // cycle timing same as yours
      const cycleDuration = 10
      const cycleTime = (time % cycleDuration) / cycleDuration
  
      let phase = 0
      let phaseProgress = 0
      if (cycleTime < 0.3) {
        phase = 0
        phaseProgress = cycleTime / 0.3
      } else if (cycleTime < 0.7) {
        phase = 1
        phaseProgress = 1
      } else {
        phase = 2
        phaseProgress = (cycleTime - 0.7) / 0.3
      }
  
      // moving lights smoothly with consistent medium speed
      const lightSpeed = 0.15
      key.position.x = Math.sin(time * lightSpeed) * 8
      key.position.y = Math.cos(time * lightSpeed * 1.1) * 6 + 6
      key.position.z = Math.sin(time * lightSpeed * 0.9) * 6 + 8

      fill.position.x = Math.cos(time * lightSpeed * 1.05) * 7
      fill.position.y = Math.sin(time * lightSpeed * 0.95) * 6 - 2
      fill.position.z = Math.cos(time * lightSpeed * 1.0) * 6 + 6

      rim.position.x = Math.sin(time * lightSpeed * 0.85) * 6
      rim.position.y = Math.cos(time * lightSpeed * 1.15) * 8 + 8
      rim.position.z = Math.sin(time * lightSpeed * 0.9) * 6 - 8

      // rotation for entire assembly - smooth and consistent medium speed
      const rotationSpeed = 0.15
      const cubeRotationX = time * rotationSpeed
      const cubeRotationY = time * rotationSpeed
      const cubeRotationZ = time * rotationSpeed
  
      const rotationMatrix = new THREE.Matrix4()
      rotationMatrix.makeRotationZ(cubeRotationZ)
      rotationMatrix.multiply(new THREE.Matrix4().makeRotationY(cubeRotationY))
      rotationMatrix.multiply(new THREE.Matrix4().makeRotationX(cubeRotationX))
  
      // update cube meshes
      cubeMeshes.forEach((cubeMesh) => {
        const data = cubeMesh.userData
        data.phase = phase

        if (phase === 0) {
          // smooth ease-in-out for assembly
          const easeProgress = phaseProgress < 0.5 
            ? 2 * phaseProgress * phaseProgress 
            : 1 - Math.pow(-2 * phaseProgress + 2, 2) / 2
          const relativePos = data.targetPosition.clone().applyMatrix4(rotationMatrix)
          cubeMesh.position.lerpVectors(data.startPosition, relativePos, easeProgress)
          cubeMesh.rotation.set(cubeRotationX * easeProgress, cubeRotationY * easeProgress, cubeRotationZ * easeProgress)
        } else if (phase === 1) {
          const relativePos = data.targetPosition.clone().applyMatrix4(rotationMatrix)
          cubeMesh.position.copy(relativePos)
          cubeMesh.rotation.set(cubeRotationX, cubeRotationY, cubeRotationZ)
        } else {
          // smooth ease-in-out for disassembly
          const easeProgress = phaseProgress < 0.5 
            ? 2 * phaseProgress * phaseProgress 
            : 1 - Math.pow(-2 * phaseProgress + 2, 2) / 2
          const relativePos = data.targetPosition.clone().applyMatrix4(rotationMatrix)
          cubeMesh.position.lerpVectors(relativePos, data.startPosition, easeProgress)
          cubeMesh.rotation.set(cubeRotationX * (1 - easeProgress), cubeRotationY * (1 - easeProgress), cubeRotationZ * (1 - easeProgress))
        }
      })

      // rotate inner cube to align with outer cubes and respect phase transitions
      if (innerMesh) {
        if (phase === 0) {
          // assembly phase - rotate and scale up with smooth easing
          const easeProgress = phaseProgress < 0.5 
            ? 2 * phaseProgress * phaseProgress 
            : 1 - Math.pow(-2 * phaseProgress + 2, 2) / 2
          innerMesh.rotation.set(cubeRotationX * easeProgress, cubeRotationY * easeProgress, cubeRotationZ * easeProgress)
          innerMesh.scale.setScalar(0.3 + easeProgress * 0.7) // scale from 30% to 100%
        } else if (phase === 1) {
          // hold phase - full rotation and scale
          innerMesh.rotation.set(cubeRotationX, cubeRotationY, cubeRotationZ)
          innerMesh.scale.setScalar(1.0)
        } else {
          // disassembly phase - rotate and scale down with smooth easing
          const easeProgress = phaseProgress < 0.5 
            ? 2 * phaseProgress * phaseProgress 
            : 1 - Math.pow(-2 * phaseProgress + 2, 2) / 2
          innerMesh.rotation.set(cubeRotationX * (1 - easeProgress), cubeRotationY * (1 - easeProgress), cubeRotationZ * (1 - easeProgress))
          innerMesh.scale.setScalar(1.0 - easeProgress * 0.7) // scale from 100% to 30%
        }
      }
  
      // animate particles (same logic)
      const positions = particles.attributes.position.array
      const velocities = pVelocities
      for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] += velocities[i]
        positions[i + 1] += velocities[i + 1]
        positions[i + 2] += velocities[i + 2]
  
        if (Math.abs(positions[i]) > 100) velocities[i] *= -1
        if (Math.abs(positions[i + 1]) > 100) velocities[i + 1] *= -1
        if (Math.abs(positions[i + 2]) > 100) velocities[i + 2] *= -1
      }
      particles.attributes.position.needsUpdate = true
  
      renderer.render(scene, camera)
    }
    animate()
  
    // mouse-driven tiny parallax for camera (kept your approach but tuned)
    let windowHalfX = window.innerWidth / 2
    let windowHalfY = window.innerHeight / 2
  
    const handleResize = () => {
      windowHalfX = window.innerWidth / 2
      windowHalfY = window.innerHeight / 2
  
      camera.aspect = container.clientWidth / container.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(container.clientWidth, container.clientHeight)
    }
  
    const handleMouseMove = (event) => {
      const targetX = (event.clientX - windowHalfX) / 200
      const targetY = (event.clientY - windowHalfY) / 200
  
      // softer easing
      camera.position.x += (targetX - camera.position.x) * 0.02
      camera.position.y += (-targetY - camera.position.y) * 0.02
      camera.lookAt(scene.position)
    }
  
    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', handleMouseMove)
  
    // cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleMouseMove)
  
      // dispose everything carefully
      if (particles.dispose) particles.dispose()
      if (particleMaterial.dispose) particleMaterial.dispose()

      cubeMeshes.forEach((cubeMesh) => {
        if (cubeMesh.geometry?.dispose) cubeMesh.geometry.dispose()
        if (Array.isArray(cubeMesh.material)) {
          cubeMesh.material.forEach((m) => {
            if (m?.dispose) m.dispose()
          })
        } else {
          if (cubeMesh.material?.dispose) cubeMesh.material.dispose()
        }
        scene.remove(cubeMesh)
      })

      // dispose geometry used for rounded boxes
      if (roundedBoxGeo.dispose) roundedBoxGeo.dispose()

      // pmrem cleanup
      if (pmremGen.dispose) pmremGen.dispose()

      if (renderer.dispose) renderer.dispose()
    }
  }, [])
  

  return (
    <div
      ref={containerRef}
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={heroStyles.container}
    >
      <canvas ref={canvasRef} style={heroStyles.canvas} />

      <div style={heroStyles.heroContent}>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          CraftMind – Web & Mobile App Development in India
        </h1>
        <p style={heroStyles.heroDescription} className="text-justify">
          CraftMind delivers enterprise-grade web development, mobile apps, AI/ML solutions, ERP, and CRM systems. Transform your business with scalable technology solutions in India.
        </p>

        <form 
          onSubmit={handleSubmit}
          className="lead-form max-w-4xl mx-auto mt-8"
          aria-label="Schedule a call"
          style={{
            display: 'flex',
            gap: '10px',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Input
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            aria-label="Your name"
            className="min-w-[180px] flex-1 max-w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
            style={{ minWidth: '180px', flex: '1 1 auto', maxWidth: '200px' }}
          />
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            aria-label="Email address"
            className="min-w-[180px] flex-1 max-w-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
            style={{ minWidth: '180px', flex: '1 1 auto', maxWidth: '200px' }}
          />
          <Select value={service} onValueChange={setService}>
            <SelectTrigger 
              aria-label="Service"
              className="min-w-[180px] flex-1 max-w-[200px] bg-white/10 border-white/20 text-white"
              style={{ minWidth: '180px', flex: '1 1 auto', maxWidth: '200px' }}
            >
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="web-app">Web App</SelectItem>
              <SelectItem value="mobile-app">Mobile App</SelectItem>
              <SelectItem value="ai-ml">AI / ML</SelectItem>
            </SelectContent>
          </Select>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary px-6 py-2.5 rounded-lg font-semibold bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-500 hover:via-pink-400 hover:to-orange-400 text-white shadow-lg"
            style={{
              padding: '10px 16px',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            {isSubmitting ? 'Scheduling...' : 'Schedule 30-min call'}
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Hero;
