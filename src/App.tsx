import { useState, useEffect, useRef } from 'react'

const heroCover = '/media/foto_perfil.christy.jpeg'
const controlEstudio = '/media/2da_foto_prueba.jpeg'
const reelCoverPlaceholder = 'https://placehold.co/600x1067/161616/7f4ca5?text=Portada+Reel'
const showreelBannerPlaceholder = 'https://placehold.co/1800x800/111111/7f4ca5?text=Fondo+Showreel'
const videoThumbPlaceholder = 'https://placehold.co/640x360/141414/7f4ca5?text=Video+del+Proyecto'

const COMPETENCIAS = [
  'Realización Audiovisual',
  'Producción de Teatro & Eventos',
  'Dirección de Arte & Escenografía',
  'Edición (Premiere Pro · Final Cut · CapCut)',
  'Guionismo & Storytelling',
  'Iluminación Escénica y de Estudio',
  'Operación de Cámara & Sonido Directo',
  'IA Generativa (Runway, Descript)',
  'Gestión de Producción en Vivo',
]

interface MediaRecurso {
  id: string
  tipo: 'video' | 'pdf'
  titulo: string
  url: string
  duracionOPaginas: string
}

interface ProyectoExperiencia {
  id: string
  empresa: string
  rol: string
  periodo: string
  lugar: string
  descripcion: string
  items: { bold: string; text: string }[]
  recurso: MediaRecurso // 1 único recurso: Video para los primeros 7, PDF para los últimos 2
}


const EXPERIENCIA: ProyectoExperiencia[] = [
  {
    id: 'exp-1',
    empresa: 'Solo Baila',
    rol: 'Planificación, dirección, camara',
    periodo: '2024 – Presente',
    lugar: 'Proyecto Destacado 01',
    descripcion: 'Dirección y realización integral de piezas audiovisuales, cobertura de espectáculos en vivo y desarrollo visual para proyectos culturales y comerciales.',
    items: [
      { bold: 'Pre-producción:', text: 'Conceptualización estética, elaboración de guiones técnicos, storyboards y planificación logística de rodajes.' },
      { bold: 'Producción & Eventos:', text: 'Operación de cámara, diseño de iluminación en locación y registro multicámara de eventos y puestas en escena.' },
      { bold: 'Post-producción:', text: 'Montaje rítmico en Premiere Pro y CapCut, etalonaje digital e integración de herramientas de IA generativa.' },
    ],
    recurso: {
      id: 'rec-1',
      tipo: 'video',
      titulo: 'Solo Baila',
      url: 'public/media/solobaila.mp4', 
      duracionOPaginas: '01:45',
    },
  },
  {
    id: 'exp-2',
    empresa: 'No te fíes',
    rol: 'Realizadora Audiovisual & Asistente de Escena',
    periodo: '2025 – 2026',
    lugar: 'Proyecto Destacado 02',
    descripcion: 'Coordinación técnica, registro audiovisual y diseño de proyecciones visuales (mapping escénico) para obras teatrales estudiantiles e independientes.',
    items: [
      { bold: 'Escenografía & Luces:', text: 'Diseño de planta de iluminación teatral y programación de secuencias lumínicas y sonoras para funciones en vivo.' },
      { bold: 'Registro Multicámara:', text: 'Grabación a tres cámaras de funciones completas y edición de tráilers promocionales de la temporada.' },
    ],
    recurso: {
      id: 'rec-2',
      tipo: 'video',
      titulo: 'No te fíes',
      url: 'src/assets/images/notefies.mov', // Reemplaza con tu video importado
      duracionOPaginas: '02:15',
    },
  },
  {
    id: 'exp-3',
    empresa: 'Trailer Terminator',
    rol: 'Directora y Realizadora Audiovisual (Proyecto Académico)',
    periodo: '2025',
    lugar: 'Proyecto Destacado 03',
    descripcion: 'Cortometraje narrativo desarrollado como práctica avanzada de realización cinematográfica, abarcando desde la escritura del guion hasta la distribución en festivales estudiantiles.',
    items: [
      { bold: 'Dirección de Actores:', text: 'Ensayos de mesa y puesta en escena con elenco teatral.' },
      { bold: 'Fotografía y Sonido:', text: 'Diseño de encuadres expresivos y captura de sonido directo con microfonía inalámbrica y boom.' },
    ],
    recurso: {
      id: 'rec-3',
      tipo: 'video',
      titulo: 'Terminator',
      url: 'src/assets/images/trailerterminator.mp4', // Reemplaza con tu video importado
      duracionOPaginas: '03:30',
    },
  },
  {
    id: 'exp-4',
    empresa: 'Desaparecido',
    rol: 'Productora de Eventos y Realizadora en Vivo',
    periodo: '2025',
    lugar: 'Proyecto Destacado 04',
    descripcion: 'Producción logística de escenario, regiduría de artistas y realización de aftermovie oficial para festival cultural universitario.',
    items: [
      { bold: 'Regiduría de Escenario:', text: 'Control de tiempos, pruebas de sonido (soundcheck) y coordinación entre técnicos de luces y bandas.' },
      { bold: 'Aftermovie & Reels:', text: 'Cobertura dinámica con gimbal y entrega de cápsulas en tiempo real para redes sociales.' },
    ],
    recurso: {
      id: 'rec-4',
      tipo: 'video',
      titulo: 'Desaparecido',
      url: 'src/assets/images/Desaparecido.mp4', // Reemplaza con tu video importado
      duracionOPaginas: '01:50',
    },
  },
  {
    id: 'exp-5',
    empresa: 'Documental Cultural "Tras Bambalinas"',
    rol: 'Realizadora Audiovisual & Investigadora',
    periodo: '2024 – 2025',
    lugar: 'Proyecto Destacado 05',
    descripcion: 'Pieza documental enfocada en el trabajo de los técnicos, actores y tramoyistas antes de abrir el telón en el teatro local.',
    items: [
      { bold: 'Guion Documental:', text: 'Investigación testimonial, estructura de entrevistas y seguimiento observacional en camerinos.' },
      { bold: 'Montaje Sonoro:', text: 'Diseño de paisaje acústico mezclando ambientes de sala, ensayos y música original.' },
    ],
    recurso: {
      id: 'rec-5',
      tipo: 'video',
      titulo: 'Documental "Tras Bambalinas"',
      url: 'src/assets/images/lcdsv.mp4', // Reemplaza con tu video importado
      duracionOPaginas: '04:10',
    },
  },
  {
    id: 'exp-6',
    empresa: 'Corporativo',
    rol: 'Directora de Arte y Realizadora Audiovisual',
    periodo: '2024',
    lugar: 'Proyecto Destacado 06',
    descripcion: 'Producción integral de videoclip conceptual combinando danza contemporánea, iluminación dramática teatral y cámara en movimiento.',
    items: [
      { bold: 'Dirección de Arte:', text: 'Construcción de set, selección de vestuario, utilería y paleta cromática.' },
      { bold: 'Edición Musical:', text: 'Sincronización al beat, efectos visuales dinámicos y corrección de color estilizada.' },
    ],
    recurso: {
      id: 'rec-6',
      tipo: 'video',
      titulo: 'Corporativo',
      url: 'src/assets/images/corporativo_1.mp4', // Reemplaza con tu video importado
      duracionOPaginas: '02:45',
    },
  },
  {
    id: 'exp-7',
    empresa: 'Redes sociales',
    rol: 'Coordinadora de Realización y Switcher en Vivo',
    periodo: '2024',
    lugar: 'Proyecto Destacado 07',
    descripcion: 'Operación de realización en directo para congresos, foros culturales y presentaciones en vivo con transmisión vía streaming.',
    items: [
      { bold: 'Realización en Directo:', text: 'Conmutación de cámaras en vivo, inserción de gráficas (lower thirds) y control de audio de sala.' },
      { bold: 'Entregables:', text: 'Exportación de ponencias individuales y resumen ejecutivo del evento.' },
    ],
    recurso: {
      id: 'rec-7',
      tipo: 'video',
      titulo: 'Redes sociales',
      url: 'src/assets/images/video_rrss_1.mp4', // Reemplaza con tu video importado
      duracionOPaginas: '01:30',
    },
  },
  {
    id: 'exp-8',
    empresa: 'Guion Tratamiento',
    rol: 'Directora de Producción Escénica y Audiovisual',
    periodo: '2025',
    lugar: 'Proyecto Destacado 08 · Documento PDF',
    descripcion: 'Carpeta integral de pre-producción, desglose de guion técnico, planta de luces y planificación artística para montaje teatral y rodaje.',
    items: [
      { bold: 'Desglose Técnico:', text: 'Guion técnico literario, storyboard, listado de planos y requerimientos de utilería y vestuario.' },
      { bold: 'Planta Escénica:', text: 'Esquema de iluminación teatral, posiciones de cámara y cronograma de ensayos.' },
    ],
    recurso: {
      id: 'rec-8',
      tipo: 'pdf',
      titulo: 'Guion tratamiento',
      url: 'src/assets/images/tratamiento_guion.pdf', // Reemplaza con la ruta de tu PDF importado
      duracionOPaginas: '16 páginas · Documento PDF',
    },
  },
  {
    id: 'exp-9',
    empresa: 'Guíon desarrollo de personaje',
    rol: 'Productora General de Eventos y Espectáculos',
    periodo: '2026',
    lugar: 'Proyecto Destacado 09 · Documento PDF',
    descripcion: 'Proyecto documental con la planificación logística, escaleta minuto a minuto, rider técnico de sonido/video y protocolo de regiduría en vivo.',
    items: [
      { bold: 'Escaleta & Rider Técnico:', text: 'Planificación detallada de entradas de audio, cues de iluminación, video proyección y tiempos en escenario.' },
      { bold: 'Presupuesto y Logística:', text: 'Organigrama de equipo técnico, plan de rodaje/montaje y memoria descriptiva del espectáculo.' },
    ],
    recurso: {
      id: 'rec-9',
      tipo: 'pdf',
      titulo: 'Desarrollo de Personaje',
      url: 'src/assets/images/desarrollo_personaje_guion.pdf', // Reemplaza con la ruta de tu PDF importado
      duracionOPaginas: '12 páginas · Documento PDF',
    },
  },
]

const VIDEOS = [
  {
    id: 'v1',
    titulo: 'Realización Audiovisual & Escena',
    categoria: 'Teatro y Eventos · 2025',
    tipo: 'instagram',
    reelId: 'DbEYCsrR3y1',
    url: 'https://www.instagram.com/reel/DbEYCsrR3y1/',
  },
  {
    id: 'v2',
    titulo: 'Producción Audiovisual en Vivo',
    categoria: 'Cobertura & Montaje · 2025',
    tipo: 'instagram',
    reelId: 'DbY4rLvzkIc',
    url: 'https://www.instagram.com/reel/DbY4rLvzkIc/',
  },
  {
    id: 'v3',
    titulo: 'Dirección de Arte & Contenido',
    categoria: 'Proyecto Audiovisual · 2025',
    tipo: 'instagram',
    reelId: 'DUBnaXfka-W',
    url: 'https://www.instagram.com/reel/DUBnaXfka-W/',
  },
]

const EDUCACION = [
  { titulo: 'Estudiante de Realización Audiovisual, Teatro y Eventos', sub: 'Formación Académica y Práctica Escénica · En curso' },
  { titulo: 'Comunicación Social & Producción Multimedia', sub: 'Narrativa Visual · Dirección y Guion' },
  { titulo: 'Producción Técnica de Espectáculos y Teatro', sub: 'Iluminación Escénica · Sonido y Regiduría' },
  { titulo: 'Edición Avanzada e IA Aplicada al Audiovisual', sub: 'Premiere Pro · Final Cut · Runway ML · Descript' },
  { titulo: 'Taller de Cámara, Fotografía e Iluminación', sub: 'Lenguaje Cinematográfico y Cobertura de Eventos' },
]

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  // Guarda cuál de las 9 experiencias está desplegada al pasar el cursor (o hacer clic en móvil)
  const [hoveredExp, setHoveredExp] = useState<number | null>(0)
  const [activeMediaModal, setActiveMediaModal] = useState<MediaRecurso | null>(null)
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const expCarouselRef = useRef<HTMLDivElement>(null)

  const scrollCarousel = (el: HTMLDivElement | null, dir: 'left' | 'right', amount = 420) => {
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  const navItems = [
    ['#perfil', 'Perfil'],
    ['#experiencia', 'Experiencia'],
    ['#portafolio', 'Portafolio'],
    ['#educacion', 'Educación'],
    ['#contacto', 'Contacto'],
  ]

  return (
    <div style={{ background: '#080808', color: '#f0ece4', fontFamily: "'Outfit', system-ui, sans-serif", overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        padding: '0 2.5rem',
        height: '68px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        borderBottom: '1px solid rgba(240,236,228,0.06)',
        background: 'rgba(8,8,8,0.88)',
        backdropFilter: 'blur(14px)',
      }}>
        <a href="#hero" style={{ fontFamily: "'Fraunces', serif", fontSize: '1.05rem', fontWeight: 700, color: '#f0ece4', textDecoration: 'none', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
          Christy Ortega Pérez <br />
          <span style={{ color: '#7f4ca5', fontSize: '0.65rem', letterSpacing: '0.09em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif", fontWeight: 600 }}>
            Realizadora Audiovisual · Teatro y Eventos
          </span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="nav-links">
          {navItems.map(([href, label]) => (
            <a
              key={href}
              href={href}
              style={{ color: '#888070', fontSize: '0.78rem', letterSpacing: '0.07em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#f0ece4')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888070')}
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            style={{
              background: '#7f4ca5', color: '#f0ece4',
              padding: '0.45rem 1.1rem',
              fontSize: '0.75rem', letterSpacing: '0.07em', textTransform: 'uppercase', fontWeight: 600,
              textDecoration: 'none', transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Contactar
          </a>
        </div>
        <button
          onClick={() => setMenuOpen(m => !m)}
          className="mobile-menu-btn"
          style={{ display: 'none', background: 'none', border: 'none', color: '#f0ece4', cursor: 'pointer', flexDirection: 'column', gap: '5px', padding: '4px' }}
          aria-label="Menú"
        >
          <span style={{ display: 'block', width: 22, height: 2, background: '#f0ece4', transition: 'transform 0.25s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#f0ece4', opacity: menuOpen ? 0 : 1, transition: 'opacity 0.2s' }} />
          <span style={{ display: 'block', width: 22, height: 2, background: '#f0ece4', transition: 'transform 0.25s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: '#080808', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2.25rem' }}>
          {navItems.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', fontWeight: 700, color: '#f0ece4', textDecoration: 'none' }}>
              {label}
            </a>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="hero" style={{ position: 'relative', height: '100vh', minHeight: 620, display: 'flex', alignItems: 'flex-end', padding: '0 2.5rem 5rem' }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `url(${heroCover})`,
          backgroundSize: 'cover', backgroundPosition: 'center center',
          filter: 'grayscale(15%)',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.45) 50%, rgba(8,8,8,0.2) 100%)' }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '960px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ display: 'block', width: 40, height: 1, background: '#7f4ca5' }} />
            <span style={{ color: '#7f4ca5', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
              Estudiante de Audiovisuales · Realizadora Audiovisual, Teatro y Eventos
            </span>
          </div>
          <h1 style={{
            fontFamily: "'Fraunces', serif",
            fontSize: 'clamp(3rem, 8.5vw, 7.5rem)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem',
            color: '#f0ece4',
          }}>
            Christy<br />
            <em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>Ortega</em><br />
            Pérez
          </h1>
          <p style={{ color: '#a89e8e', fontSize: '1.05rem', maxWidth: 600, lineHeight: 1.6, marginBottom: '0.5rem' }}>
            <strong style={{ color: '#f0ece4', fontWeight: 600 }}>Realizadora Audiovisual, Teatro y Eventos · Estudiante de Audiovisuales</strong>
          </p>
          <p style={{ color: '#888070', fontSize: '0.88rem', maxWidth: 580, lineHeight: 1.6, marginBottom: '2.5rem' }}>
            Producción Escénica · Dirección Audiovisual · Creación Multimedia & Espectáculos en Vivo
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#experiencia" style={{
              background: '#f0ece4', color: '#080808',
              padding: '0.85rem 2rem', fontSize: '0.8rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none',
              transition: 'background 0.2s, color 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = '#7f4ca5'; e.currentTarget.style.color = '#f0ece4' }}
              onMouseLeave={e => { e.currentTarget.style.background = '#f0ece4'; e.currentTarget.style.color = '#080808' }}
            >
              Ver Experiencia
            </a>
            <a href="#contacto" style={{
              border: '1px solid rgba(240,236,228,0.3)', color: '#f0ece4',
              padding: '0.85rem 2rem', fontSize: '0.8rem', letterSpacing: '0.08em',
              textTransform: 'uppercase', fontWeight: 500, textDecoration: 'none',
              transition: 'border-color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = '#7f4ca5')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(240,236,228,0.3)')}
            >
              Contacto
            </a>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', zIndex: 2 }}>
          <span style={{ color: '#888070', fontSize: '0.62rem', letterSpacing: '0.12em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, #888070, transparent)' }} />
        </div>
      </section>

      {/* STATS */}
      <FadeIn>
        <div style={{
          borderTop: '1px solid rgba(240,236,228,0.08)',
          borderBottom: '1px solid rgba(240,236,228,0.08)',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          padding: '0 2.5rem',
        }}>
          {[
            { n: 'Cine & TV', label: 'Realizadora Audiovisual · Christy Ortega Pérez' },
            { n: 'Teatro', label: 'Producción Escénica y Dirección de Arte' },
            { n: 'Eventos', label: 'Cobertura Multicámara & Regiduría en Vivo' },
            { n: 'IA + Post', label: 'Estudiante de Audiovisuales & Innovación' },
          ].map((stat, i) => (
            <div key={i} style={{
              padding: '2.5rem 2rem',
              borderRight: i < 3 ? '1px solid rgba(240,236,228,0.08)' : 'none',
            }}>
              <div style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(1.5rem, 3vw, 2.6rem)', fontWeight: 900, color: '#7f4ca5', letterSpacing: '-0.03em' }}>{stat.n}</div>
              <div style={{ color: '#888070', fontSize: '0.75rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginTop: '0.4rem' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </FadeIn>

      {/* PERFIL */}
      <section id="perfil" style={{ padding: 'clamp(4rem, 8vw, 8rem) 2.5rem', borderBottom: '1px solid rgba(240,236,228,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '5rem', alignItems: 'start' }} className="two-col">
          <FadeIn>
            <div>
              <div style={{ color: '#888070', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Perfil Profesional · Christy Ortega Pérez · Realizadora Audiovisual, Teatro y Eventos
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 4.5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                Pasión por la<br />escena y la<br /><em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>narrativa visual</em>
              </h2>
              <div style={{ position: 'relative', marginTop: '2rem' }}>
                <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '1px solid rgba(127,76,165,0.3)' }} />
                <div style={{ position: 'relative', background: '#111', aspectRatio: '4/3', overflow: 'hidden' }}>
                  <img
                    src={controlEstudio}
                    alt="Christy Ortega Pérez en control de estudio y producción"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(10%)' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.12)' }} />
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div>
              <p style={{ color: '#a89e8e', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                <strong style={{ color: '#f0ece4' }}>Christy Ortega Pérez</strong> es estudiante de audiovisuales y <strong style={{ color: '#f0ece4' }}>Realizadora Audiovisual, Teatro y Eventos</strong>. Combina la sensibilidad artística del lenguaje cinematográfico con la energía del espectáculo en vivo, abarcando desde la concepción del guion y el montaje escénico hasta la realización técnica y postproducción digital.
              </p>
              <p style={{ color: '#a89e8e', fontSize: '0.98rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                A través de proyectos académicos, independientes y comerciales en <strong style={{ color: '#f0ece4' }}>Visual IA Studio</strong>, integra dirección de cámara, diseño de iluminación, regiduría de eventos, edición avanzada e Inteligencia Artificial generativa para construir experiencias visuales y escénicas memorables.
              </p>

              <div style={{ color: '#888070', fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>
                Competencias Core · Audiovisuales, Teatro y Eventos
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {COMPETENCIAS.map(c => (
                  <span key={c} style={{
                    fontSize: '0.78rem', padding: '0.35rem 0.9rem',
                    border: '1px solid rgba(240,236,228,0.15)',
                    color: '#c0b8a8',
                    letterSpacing: '0.02em',
                    transition: 'border-color 0.2s, color 0.2s',
                    cursor: 'default',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = '#7f4ca5'; e.currentTarget.style.color = '#7f4ca5' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,236,228,0.15)'; e.currentTarget.style.color = '#c0b8a8' }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* EXPERIENCIA LABORAL Y PROYECTOS (7 CON 1 VIDEO + 2 CON 1 PDF AL PASAR EL CURSOR) */}
      <section id="experiencia" style={{ padding: 'clamp(4rem, 8vw, 8rem) 2.5rem', background: '#0d0d0d', borderBottom: '1px solid rgba(240,236,228,0.08)' }}>
        <FadeIn>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ color: '#888070', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Experiencia · Christy Ortega Pérez · Realizadora Audiovisual, Teatro y Eventos
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                <em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>Proyectos</em>
              </h2>
              <p style={{ color: '#888070', fontSize: '0.84rem', marginTop: '0.85rem' }}>
                Desplázate horizontalmente por los 9 proyectos y <strong style={{ color: '#f0ece4' }}>pasa el cursor sobre cualquiera</strong> para desplegar su <span style={{ color: '#7f4ca5' }}>video (proyectos 1 al 7)</span> o su <span style={{ color: '#7f4ca5' }}>documento PDF (proyectos 8 y 9)</span>.
              </p>
            </div>

            {/* Botones de desplazamiento del carrusel principal */}
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <button
                type="button"
                onClick={() => scrollCarousel(expCarouselRef.current, 'left', 440)}
                style={{
                  width: 44, height: 44, background: '#141414', border: '1px solid rgba(127,76,165,0.45)',
                  color: '#f0ece4', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#7f4ca5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#141414')}
                aria-label="Desplazar proyectos a la izquierda"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => scrollCarousel(expCarouselRef.current, 'right', 440)}
                style={{
                  width: 44, height: 44, background: '#141414', border: '1px solid rgba(127,76,165,0.45)',
                  color: '#f0ece4', cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#7f4ca5')}
                onMouseLeave={e => (e.currentTarget.style.background = '#141414')}
                aria-label="Desplazar proyectos a la derecha"
              >
                →
              </button>
            </div>
          </div>
        </FadeIn>

        {/* Carrusel horizontal de las 9 experiencias */}
        <FadeIn delay={80}>
          <div
            ref={expCarouselRef}
            className="custom-scrollbar"
            style={{
              display: 'flex',
              gap: '1.25rem',
              overflowX: 'auto',
              paddingBottom: '1.5rem',
              scrollSnapType: 'x mandatory',
              alignItems: 'stretch',
            }}
          >
            {EXPERIENCIA.map((exp, i) => {
              const isExpanded = hoveredExp === i
              const esVideo = exp.recurso.tipo === 'video'

              return (
                <div
                  key={exp.id}
                  onMouseEnter={() => setHoveredExp(i)}
                  onClick={() => setHoveredExp(i)}
                  style={{
                    flex: isExpanded ? '0 0 min(90vw, 540px)' : '0 0 min(85vw, 350px)',
                    background: isExpanded ? '#141118' : '#111111',
                    border: isExpanded ? '1px solid #7f4ca5' : '1px solid rgba(240,236,228,0.08)',
                    padding: '2rem',
                    scrollSnapAlign: 'start',
                    transition: 'all 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    position: 'relative',
                  }}
                >
                  {/* Cabecera de la tarjeta */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.85rem' }}>
                      <span style={{
                        fontFamily: "'Fraunces', serif", fontSize: '0.85rem', fontWeight: 700,
                        color: '#7f4ca5', letterSpacing: '0.08em', textTransform: 'uppercase',
                      }}>
                        #{String(i + 1).padStart(2, '0')} · {exp.periodo}
                      </span>
                      <span style={{
                        fontSize: '0.68rem', letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '0.25rem 0.65rem',
                        background: isExpanded ? '#7f4ca5' : 'rgba(127,76,165,0.15)',
                        color: '#f0ece4',
                        transition: 'background 0.3s',
                        fontWeight: 600,
                      }}>
                        {esVideo ? '🎬 1 Video' : '📄 1 PDF'}
                      </span>
                    </div>

                    <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.45rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.3rem', color: '#f0ece4' }}>
                      {exp.empresa}
                    </h3>
                    <div style={{ color: '#7f4ca5', fontSize: '0.8rem', letterSpacing: '0.04em', marginBottom: '0.2rem', fontWeight: 500 }}>
                      {exp.rol} — Christy Ortega Pérez
                    </div>
                    <div style={{ color: '#888070', fontSize: '0.74rem', marginBottom: '1.1rem' }}>
                      {exp.lugar}
                    </div>

                    <p style={{ color: '#a89e8e', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1.1rem' }}>
                      {exp.descripcion}
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.25rem' }}>
                      {exp.items.map((item, ii) => (
                        <div key={ii} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                          <span style={{ display: 'block', width: 5, height: 5, background: '#7f4ca5', marginTop: '0.45rem', flexShrink: 0 }} />
                          <p style={{ color: '#a89e8e', fontSize: '0.82rem', lineHeight: 1.55, margin: 0 }}>
                            <strong style={{ color: '#f0ece4', fontWeight: 600 }}>{item.bold}</strong> {item.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SECCIÓN DESPLEGABLE AUTOMÁTICA AL PASAR EL CURSOR: 1 VIDEO (PROYECTOS 1-7) O 1 PDF (PROYECTOS 8-9) */}
                  <div style={{
                    maxHeight: isExpanded ? '420px' : '0px',
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease, opacity 0.4s ease',
                    borderTop: isExpanded ? '1px solid rgba(127,76,165,0.3)' : '1px solid transparent',
                    paddingTop: isExpanded ? '1.25rem' : '0',
                  }}>
                    {esVideo ? (
                      /* Vista de 1 solo Video para los primeros 7 proyectos */
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                          <span style={{ color: '#f0ece4', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                            🎬 Video del Proyecto
                          </span>
                          <span style={{ color: '#888070', fontSize: '0.68rem' }}>Haz clic para reproducir</span>
                        </div>

                        <div
                          onClick={e => { e.stopPropagation(); setActiveMediaModal(exp.recurso) }}
                          style={{
                            background: '#0b0b0b',
                            border: '1px solid rgba(127,76,165,0.45)',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'transform 0.2s, border-color 0.2s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.borderColor = '#7f4ca5'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(127,76,165,0.45)'; e.currentTarget.style.transform = 'none' }}
                        >
                          <div style={{ position: 'relative', aspectRatio: '16/9', background: '#161616' }}>
                            <img
                              src={videoThumbPlaceholder}
                              alt={exp.recurso.titulo}
                              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.8 }}
                            />
                            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <div style={{
                                width: 52, height: 52, borderRadius: '50%', background: 'rgba(127,76,165,0.92)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
                              }}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="#f0ece4"><polygon points="8,5 19,12 8,19" /></svg>
                              </div>
                            </div>
                            <span style={{
                              position: 'absolute', bottom: 8, right: 10, background: 'rgba(8,8,8,0.85)',
                              color: '#f0ece4', fontSize: '0.68rem', padding: '2px 8px', border: '1px solid rgba(127,76,165,0.4)',
                            }}>
                              {exp.recurso.duracionOPaginas}
                            </span>
                          </div>
                          <div style={{ padding: '0.75rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div style={{ color: '#f0ece4', fontSize: '0.84rem', fontWeight: 600 }}>
                              {exp.recurso.titulo}
                            </div>
                            <span style={{ color: '#7f4ca5', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                              Reproducir →
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Vista de 1 solo PDF para los últimos 2 proyectos (nada de video) */
                      <div>
                        <div style={{ marginBottom: '0.65rem' }}>
                          <span style={{ color: '#f0ece4', fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                            📄 Documento PDF del Proyecto
                          </span>
                        </div>
                        <div
                          onClick={e => { e.stopPropagation(); setActiveMediaModal(exp.recurso) }}
                          style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem',
                            padding: '1.15rem 1.25rem', background: '#0b0b0b',
                            border: '1px solid rgba(127,76,165,0.5)',
                            cursor: 'pointer', transition: 'background 0.2s, transform 0.2s',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(127,76,165,0.18)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                          onMouseLeave={e => { e.currentTarget.style.background = '#0b0b0b'; e.currentTarget.style.transform = 'none' }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.9rem' }}>
                            <span style={{
                              background: '#7f4ca5', color: '#f0ece4', fontSize: '0.7rem', fontWeight: 700,
                              padding: '0.45rem 0.65rem', letterSpacing: '0.06em',
                            }}>
                              PDF
                            </span>
                            <div>
                              <div style={{ color: '#f0ece4', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.2rem' }}>
                                {exp.recurso.titulo}
                              </div>
                              <div style={{ color: '#888070', fontSize: '0.74rem' }}>
                                {exp.recurso.duracionOPaginas}
                              </div>
                            </div>
                          </div>
                          <span style={{ color: '#7f4ca5', fontSize: '0.8rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                            Abrir PDF →
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Indicador inferior cuando está cerrado */}
                  {!isExpanded && (
                    <div style={{
                      marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid rgba(240,236,228,0.06)',
                      color: '#7f4ca5', fontSize: '0.73rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 600,
                    }}>
                      {esVideo ? 'Pasa el cursor para desplegar el video →' : 'Pasa el cursor para desplegar el PDF →'}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </FadeIn>
      </section>

      {/* MODAL PARA PREVISUALIZAR EL VIDEO O PDF SELECCIONADO DE UNA EXPERIENCIA */}
      {activeMediaModal && (
        <div
          onClick={() => setActiveMediaModal(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(8,8,8,0.88)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#121212', border: '1px solid #7f4ca5', maxWidth: 720, width: '100%',
              padding: '1.75rem', position: 'relative',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <div>
                <span style={{ color: '#7f4ca5', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {activeMediaModal.tipo === 'video' ? 'Reproductor de Video' : 'Visor de Documento PDF'} · Christy Ortega Pérez
                </span>
                <h4 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.3rem', marginTop: '0.2rem' }}>{activeMediaModal.titulo}</h4>
              </div>
              <button
                onClick={() => setActiveMediaModal(null)}
                style={{
                  background: 'none', border: '1px solid rgba(240,236,228,0.25)', color: '#f0ece4',
                  padding: '0.35rem 0.75rem', cursor: 'pointer', fontSize: '0.75rem',
                }}
              >
                ✕ Cerrar
              </button>
            </div>

            {activeMediaModal.tipo === 'video' ? (
              <video
                src={activeMediaModal.url}
                controls
                autoPlay
                style={{ width: '100%', aspectRatio: '16/9', background: '#000', display: 'block' }}
              />
            ) : (
              <div style={{ padding: '2.5rem', background: '#0b0b0b', border: '1px dashed rgba(127,76,165,0.45)', textAlign: 'center' }}>
                <p style={{ color: '#a89e8e', fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                  Reemplaza la propiedad <code style={{ color: '#7f4ca5' }}>recurso.url</code> en los proyectos 8 y 9 dentro de <code style={{ color: '#7f4ca5' }}>EXPERIENCIA</code> con la ruta a tu PDF importado desde <code style={{ color: '#7f4ca5' }}>src/assets/</code>.
                </p>
                <a
                  href={activeMediaModal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block', background: '#7f4ca5', color: '#f0ece4',
                    padding: '0.75rem 1.5rem', fontSize: '0.78rem', letterSpacing: '0.08em',
                    textTransform: 'uppercase', textDecoration: 'none', fontWeight: 600,
                  }}
                >
                  Abrir / Descargar PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PORTAFOLIO DE VIDEOS */}
      <section id="portafolio" style={{ padding: 'clamp(4rem, 8vw, 8rem) 2.5rem', borderBottom: '1px solid rgba(240,236,228,0.08)' }}>
        <FadeIn>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ color: '#888070', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Portafolio · Christy Ortega Pérez · Realizadora Audiovisual, Teatro y Eventos
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
                Colaboraciones <br /><em style={{ fontStyle: 'italic', color: '#7f4ca5' }}> de vídeo</em>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#888070', fontSize: '0.78rem', letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7f4ca5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888070')}
            >
              Ver Instagram →
            </a>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
          {VIDEOS.map((video, i) => (
            <FadeIn key={video.id} delay={i * 80}>
              {video.tipo === 'instagram' ? (
                <div style={{ position: 'relative', background: '#111', overflow: 'hidden' }}>
                  {playingVideo === video.id ? (
                    <div style={{ position: 'relative', paddingBottom: '177.77%' /* 9:16 reel */ }}>
                      <iframe
                        src={`https://www.instagram.com/reel/${video.reelId}/embed/`}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
                        allowFullScreen
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                        title={video.titulo}
                        scrolling="no"
                      />
                      <button
                        onClick={() => setPlayingVideo(null)}
                        style={{
                          position: 'absolute', top: '0.75rem', right: '0.75rem',
                          background: 'rgba(8,8,8,0.7)', border: '1px solid rgba(240,236,228,0.2)',
                          color: '#f0ece4', cursor: 'pointer', padding: '0.3rem 0.6rem',
                          fontSize: '0.7rem', letterSpacing: '0.06em', zIndex: 10,
                        }}
                      >
                        ✕ Cerrar
                      </button>
                    </div>
                  ) : (
                    <div
                      style={{ position: 'relative', cursor: 'pointer', aspectRatio: '9/16' }}
                      onClick={() => setPlayingVideo(video.id)}
                    >
                      <img
                        src={reelCoverPlaceholder}
                        alt={video.titulo}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(30%)', display: 'block', transition: 'filter 0.4s, transform 0.5s' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0%)'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.03)' }}
                        onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(30%)'; (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)' }}
                      />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.1) 60%)' }} />

                      {/* Instagram badge */}
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#7f4ca5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" />
                          <circle cx="12" cy="12" r="4" />
                          <circle cx="17.5" cy="6.5" r="0.5" fill="#7f4ca5" stroke="none" />
                        </svg>
                        <span style={{ color: '#7f4ca5', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600 }}>Reel</span>
                      </div>

                      {/* Play button */}
                      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{
                          width: 60, height: 60, borderRadius: '50%',
                          border: '2px solid #7f4ca5',
                          background: 'rgba(8,8,8,0.6)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          transition: 'border-color 0.2s, background 0.2s',
                        }}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="#f0ece4"><polygon points="8,5 19,12 8,19" /></svg>
                        </div>
                      </div>

                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '1.25rem' }}>
                        <div style={{ fontFamily: "'Fraunces', serif", fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{video.titulo}</div>
                        <div style={{ color: '#888070', fontSize: '0.75rem', letterSpacing: '0.04em' }}>{video.categoria} · Christy Ortega Pérez</div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div style={{
                  aspectRatio: '9/16', background: '#0d0d0d',
                  border: '1px dashed rgba(240,236,228,0.12)',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  gap: '1rem', cursor: 'default',
                }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px dashed rgba(240,236,228,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#888070', fontSize: '1.4rem', lineHeight: 1 }}>+</span>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ color: '#888070', fontSize: '0.82rem', marginBottom: '0.3rem' }}>{video.titulo}</div>
                    <div style={{ color: '#444', fontSize: '0.72rem' }}>{video.categoria}</div>
                  </div>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </section>

      {/* EDUCACIÓN */}
      <section id="educacion" style={{ padding: 'clamp(4rem, 8vw, 8rem) 2.5rem', background: '#0d0d0d', borderBottom: '1px solid rgba(240,236,228,0.08)' }}>
        <FadeIn>
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ color: '#888070', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Formación · Christy Ortega Pérez · Estudiante de Audiovisuales, Teatro y Eventos
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1 }}>
              Educación y<br /><em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>Formación</em>
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 340px), 1fr))', gap: '1px', background: 'rgba(240,236,228,0.08)' }}>
          {EDUCACION.map((edu, i) => (
            <FadeIn key={i} delay={i * 70}>
              <div style={{
                background: '#0d0d0d', padding: '2rem 2.25rem',
                transition: 'background 0.25s', cursor: 'default',
              }}
                onMouseEnter={e => (e.currentTarget.style.background = '#141118')}
                onMouseLeave={e => (e.currentTarget.style.background = '#0d0d0d')}
              >
                <div style={{ fontFamily: "'Fraunces', serif", fontSize: '2.5rem', fontWeight: 900, color: 'rgba(127,76,165,0.28)', letterSpacing: '-0.03em', marginBottom: '0.5rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontSize: '1.15rem', fontWeight: 700, letterSpacing: '-0.01em', marginBottom: '0.5rem' }}>{edu.titulo}</h3>
                <p style={{ color: '#888070', fontSize: '0.8rem', lineHeight: 1.6 }}>{edu.sub}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* REEL STRIP */}
      <FadeIn>
        <div style={{ position: 'relative', overflow: 'hidden', height: 'clamp(240px, 35vw, 460px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={showreelBannerPlaceholder}
            alt="Producción audiovisual Christy Ortega Pérez"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(40%)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,8,8,0.72)' }} />
          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 1.5rem' }}>
            <div style={{ color: '#7f4ca5', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '1.25rem', fontWeight: 600 }}>
              Christy Ortega Pérez · Realizadora Audiovisual, Teatro y Eventos · Showreel
            </div>
            <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 6.5vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '2rem' }}>
              Realización que<br /><em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>impacta</em>
            </h2>
            <button style={{
              width: 68, height: 68, borderRadius: '50%',
              border: '2px solid rgba(240,236,228,0.6)', background: 'rgba(8,8,8,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', margin: '0 auto',
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#7f4ca5'; e.currentTarget.style.background = 'rgba(127,76,165,0.25)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,236,228,0.6)'; e.currentTarget.style.background = 'rgba(8,8,8,0.5)' }}
              aria-label="Ver showreel"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#f0ece4"><polygon points="8,5 19,12 8,19" /></svg>
            </button>
          </div>
        </div>
      </FadeIn>

      {/* CONTACT */}
      <section id="contacto" style={{ padding: 'clamp(4rem, 8vw, 8rem) 2.5rem', borderTop: '1px solid rgba(240,236,228,0.08)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }} className="two-col">
          <FadeIn>
            <div>
              <div style={{ color: '#888070', fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                Contacto · Christy Ortega Pérez · Realizadora Audiovisual, Teatro y Eventos
              </div>
              <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: '1.75rem' }}>
                Trabajemos<br /><em style={{ fontStyle: 'italic', color: '#7f4ca5' }}>juntos</em>
              </h2>
              <p style={{ color: '#a89e8e', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: 420 }}>
                Disponible para proyectos de realización audiovisual, producción de teatro, cobertura de eventos en vivo, rodajes estudiantiles e independientes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { label: 'Nombre', value: 'Christy Ortega Pérez' },
                  { label: 'Perfil', value: 'Realizadora Audiovisual, Teatro y Eventos (Estudiante de Audiovisuales)' },
                  { label: 'Email', value: 'demarketingseo.online@gmail.com' },
                  { label: 'Tel 1', value: '0424-358.17.45' },
                  { label: 'Tel 2', value: '0412-363.37.10' },
                  { label: 'Ubicación', value: 'La Victoria, Aragua, Venezuela' },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline', borderBottom: '1px solid rgba(240,236,228,0.06)', paddingBottom: '0.85rem' }}>
                    <span style={{ color: '#888070', fontSize: '0.68rem', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: 70 }}>{item.label}</span>
                    <span style={{ color: '#f0ece4', fontSize: '0.88rem' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(240,236,228,0.08)' }}>
              {sent && (
                <div style={{ background: 'rgba(127,76,165,0.15)', border: '1px solid rgba(127,76,165,0.5)', padding: '1rem 1.25rem', color: '#7f4ca5', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  Mensaje enviado. Te respondo pronto.
                </div>
              )}
              {[
                { key: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu nombre' },
                { key: 'email', label: 'Email', type: 'email', placeholder: 'tu@email.com' },
              ].map(field => (
                <div key={field.key} style={{ background: '#0d0d0d', padding: '1.25rem 1.5rem' }}>
                  <label style={{ display: 'block', color: '#888070', fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{field.label}</label>
                  <input
                    type={field.type} required placeholder={field.placeholder}
                    value={formData[field.key as 'name' | 'email']}
                    onChange={e => setFormData(d => ({ ...d, [field.key]: e.target.value }))}
                    style={{ width: '100%', background: 'none', border: 'none', outline: 'none', color: '#f0ece4', fontSize: '0.92rem', fontFamily: "'Outfit', sans-serif" }}
                  />
                </div>
              ))}
              <div style={{ background: '#0d0d0d', padding: '1.25rem 1.5rem' }}>
                <label style={{ display: 'block', color: '#888070', fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Mensaje</label>
                <textarea required rows={5} placeholder="Contame sobre tu proyecto audiovisual, obra teatral o evento..."
                  value={formData.message}
                  onChange={e => setFormData(d => ({ ...d, message: e.target.value }))}
                  style={{ width: '100%', background: 'none', border: 'none', outline: 'none', color: '#f0ece4', fontSize: '0.92rem', fontFamily: "'Outfit', sans-serif", resize: 'none' }}
                />
              </div>
              <button type="submit" style={{
                background: '#7f4ca5', color: '#f0ece4',
                padding: '1.25rem', fontSize: '0.8rem', letterSpacing: '0.1em',
                textTransform: 'uppercase', fontWeight: 700, border: 'none',
                cursor: 'pointer', fontFamily: "'Outfit', sans-serif", transition: 'opacity 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Enviar Mensaje →
              </button>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '1px solid rgba(240,236,228,0.08)',
        padding: '2rem 2.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
      }}>
        <div>
          <span style={{ fontFamily: "'Fraunces', serif", fontSize: '1rem', fontWeight: 700 }}>Christy Ortega Pérez</span>
          <span style={{ color: '#7f4ca5', fontSize: '0.72rem', letterSpacing: '0.06em', marginLeft: '1rem', textTransform: 'uppercase', fontWeight: 600 }}>
            Realizadora Audiovisual · Teatro y Eventos
          </span>
        </div>
        <span style={{ color: '#888070', fontSize: '0.76rem' }}>
          © 2026 · Christy Ortega Pérez · Estudiante de Audiovisuales
        </span>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Instagram', 'LinkedIn', 'Vimeo'].map(net => (
            <a key={net} href="#" style={{ color: '#888070', fontSize: '0.73rem', letterSpacing: '0.06em', textTransform: 'uppercase', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#7f4ca5')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888070')}
            >
              {net}
            </a>
          ))}
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(240, 236, 228, 0.04);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(127, 76, 165, 0.45);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #7f4ca5;
        }
        @media (max-width: 920px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 600px) {
          #hero { padding-bottom: 3rem !important; }
          footer { flex-direction: column; text-align: center; }
          div[style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        input::placeholder, textarea::placeholder { color: #3a3530; }

        @media (max-width: 920px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          
          /* --- AGREGA ESTO PARA CENTRAR LA FOTO EN MÓVIL --- */
          #perfil img {
            object-position: center 50% !important;
          }
        }
      `}</style>
    </div>
  )
}