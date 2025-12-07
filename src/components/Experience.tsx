import { Briefcase } from 'lucide-react';

export function Experience() {
  const jobs = [
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
  ];

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <Briefcase className="text-indigo-600" />
          Work Experience
        </h2>
        
        <div className="space-y-8">
          {jobs.map((job, index) => (
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
  );
}
