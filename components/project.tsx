export default function Project() {
  const projects = [
    {
      number: 'Project 01',
      title: 'Movie Shelf',
      description: 'Movie search app with categories and favourites. Built with Next.js and the OMDB API.',
      stack: ['Next.js', 'Tailwind', 'OMDB API'],
      github: 'https://github.com/Alador-Mikiele-cd/movie-shelf',
      live: '',
    },
    {
      number: 'Project 02',
      title: 'Portfolio',
      description: 'Personal portfolio site with smooth animations, dark theme, and a clean layout.',
      stack: ['Next.js', 'Tailwind', 'Framer Motion'],
      github: 'https://github.com/Alador-Mikiele-cd/portfolio-site',
      live: '',
    },
    {
      number: 'Project 03',
      title: 'Coming Soon',
      description: 'Something new is in progress. Building every day.',
      stack: ['Coming soon'],
      github: '',
      live: '',
    },
  ]

  return (
    <div className="min-h-dvh" style={{ background: '#080810' }} id="project">
      <h1 className="text-center text-white pt-16 md:pt-24 text-3xl md:text-5xl lg:text-6xl px-4">
        My recent work
      </h1>

      <div className="py-12 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-[#0e0c1a] border border-[#2a2250] rounded-2xl p-7 hover:border-[#7f77dd] hover:-translate-y-1 transition-all relative overflow-hidden"
              style={{ boxShadow: '0 0 40px rgba(127, 119, 221, 0.15)' }}
            >
              {/* Glow */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 rounded-full bg-[#7f77dd]/10 blur-2xl" />

              <p className="text-[#6b5dd3] text-xs tracking-widest uppercase mb-4">{project.number}</p>
              <div className="w-10 h-px bg-[#4a3f8a] mb-5" style={{ boxShadow: '0 0 8px #7f77dd' }} />
              <h3 className="text-[#e8e4ff] text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-[#7a7299] text-sm leading-relaxed mb-6">{project.description}</p>

              <div className="flex gap-2 flex-wrap mb-6">
                {project.stack.map((tech, j) => (
                  <span key={j} className="bg-[#1a1530] border border-[#2a2250] rounded px-2 py-1 text-xs text-[#9b93c4] font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" className="text-[#6b5dd3] text-xs tracking-widest uppercase hover:text-[#a89fd4]">
                    GitHub →
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" className="text-[#6b5dd3] text-xs tracking-widest uppercase hover:text-[#a89fd4]">
                    Live →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}