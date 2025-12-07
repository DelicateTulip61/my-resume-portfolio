import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal, 
  Code2, 
  Briefcase, 
  User, 
  ExternalLink 
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Eran Sadgan
            </span>
            <div className="hidden sm:flex space-x-8">
              <a href="#about" className="text-sm font-medium hover:text-indigo-600 transition-colors">About</a>
              <a href="#experience" className="text-sm font-medium hover:text-indigo-600 transition-colors">Experience</a>
              <a href="#projects" className="text-sm font-medium hover:text-indigo-600 transition-colors">Projects</a>
              <a href="#contact" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
            <div className="absolute top-20 right-10 w-72 h-72 bg-violet-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 p-1 mx-auto">
                <div className="w-full h-full rounded-full bg-slate-100 flex items-center justify-center overflow-hidden">
                   <User size={64} className="text-indigo-300" />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Eran Sadgan</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              A passionate developer building accessible, pixel-perfect, and performant web experiences.
            </p>
            
            <div className="flex justify-center gap-4">
              <a href="#contact" className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/25">
                Get in touch
              </a>
              <a href="#projects" className="px-8 py-3 bg-white text-slate-900 border border-slate-200 rounded-full font-medium hover:border-indigo-200 hover:bg-indigo-50 transition-all">
                View Work
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "JavaScript / TypeScript",
                "React & Next.js",
                "Node.js",
                "Tailwind CSS",
                "PostgreSQL",
                "Git & CI/CD",
                "Cloud Architecture",
                "System Design"
              ].map((skill, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-indigo-100 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="font-medium text-slate-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <User className="text-indigo-600" />
                  About Me
                </h2>
                <div className="prose prose-slate text-lg text-slate-600">
                  <p className="mb-4">
                    I'm a software engineer based in [Your Location]. I enjoy turning complex problems into simple, beautiful, and intuitive designs.
                  </p>
                  <p>
                    My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-6 rounded-2xl">
                  <span className="block text-3xl font-bold text-indigo-600 mb-1">3+</span>
                  <span className="text-slate-600 font-medium">Years Experience</span>
                </div>
                <div className="bg-violet-50 p-6 rounded-2xl">
                  <span className="block text-3xl font-bold text-violet-600 mb-1">20+</span>
                  <span className="text-slate-600 font-medium">Projects Completed</span>
                </div>
                <div className="bg-blue-50 p-6 rounded-2xl">
                  <span className="block text-3xl font-bold text-blue-600 mb-1">10+</span>
                  <span className="text-slate-600 font-medium">Happy Clients</span>
                </div>
                <div className="bg-emerald-50 p-6 rounded-2xl">
                  <span className="block text-3xl font-bold text-emerald-600 mb-1">100%</span>
                  <span className="text-slate-600 font-medium">Commitment</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Briefcase className="text-indigo-600" />
              Work Experience
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  role: "Senior Frontend Developer",
                  company: "Tech Corp Inc.",
                  period: "2023 - Present",
                  description: "Leading the frontend team in rebuilding the core product dashboard using React and TypeScript. Improved performance by 40%."
                },
                {
                  role: "Full Stack Developer",
                  company: "StartUp Solutions",
                  period: "2021 - 2023",
                  description: "Developed and maintained multiple client projects. Implemented secure authentication and payment processing flows."
                },
                {
                  role: "Junior Web Developer",
                  company: "Digital Agency",
                  period: "2020 - 2021",
                  description: "Collaborated with designers to implement responsive landing pages. Optimized assets for faster load times."
                }
              ].map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-indigo-200 hover:border-indigo-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-indigo-500"></div>
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <div className="flex items-center gap-2 text-indigo-600 font-medium mb-2">
                    <span>{job.company}</span>
                    <span>•</span>
                    <span className="text-sm">{job.period}</span>
                  </div>
                  <p className="text-slate-600 max-w-3xl">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
              <Code2 className="text-indigo-600" />
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "E-Commerce Platform",
                  desc: "A full-featured online store built with Next.js, Stripe, and Sanity CMS.",
                  tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
                  color: "bg-blue-100"
                },
                {
                  title: "Task Management App",
                  desc: "Real-time collaboration tool for remote teams using Socket.io and React.",
                  tags: ["React", "Node.js", "Socket.io", "MongoDB"],
                  color: "bg-emerald-100"
                },
                {
                  title: "Weather Dashboard",
                  desc: "Beautiful weather visualization app consuming open weather APIs.",
                  tags: ["Vue.js", "Chart.js", "OpenWeatherAPI"],
                  color: "bg-orange-100"
                },
                {
                  title: "Portfolio Template",
                  desc: "A high-performance, accessible portfolio starter kit for developers.",
                  tags: ["Astro", "Tailwind", "Vercel"],
                  color: "bg-purple-100"
                }
              ].map((project, index) => (
                <div key={index} className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                  <div className={`h-48 ${project.color} flex items-center justify-center`}>
                    <Terminal className="text-slate-400 opacity-50" size={64} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-600 mb-4">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600">
                        <Github size={18} /> Code
                      </a>
                      <a href="#" className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-indigo-600">
                        <ExternalLink size={18} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-slate-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-8">Let's Work Together</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm currently available for freelance work and open to full-time opportunities. If you have a project that needs some creative touch, I'd love to hear about it.
            </p>
            
            <div className="flex justify-center gap-6 mb-12">
              <a href="mailto:hello@eransadgan.me" className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-colors">
                <Mail size={20} />
                Email Me
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors border border-slate-700">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg font-medium transition-colors border border-slate-700">
                <Github size={20} />
                GitHub
              </a>
            </div>
            
            <div className="pt-8 border-t border-slate-800 text-slate-500 text-sm">
              © {new Date().getFullYear()} Eran Sadgan. All rights reserved.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;