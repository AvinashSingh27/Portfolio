import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const titles = [
    'Azure Developer Associate',
    'DevOps Engineer',
    'Cloud Solutions Architect',
    'Software Engineer'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentTitle.length) {
            setDisplayText(currentTitle.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitleIndex]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-2xl">
              SS
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Shantanu Singh
          </h1>

          <div className="h-16 mb-8">
            <p className="text-2xl md:text-3xl text-blue-300 font-light">
              {displayText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Microsoft Certified Azure Developer with expertise in cloud solutions,
            DevOps practices, and infrastructure as code. Specialized in building
            scalable healthcare and AI applications on Azure.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Get In Touch
            </button>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-900 transition-all"
            >
              View My Work
            </a>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:shantanu2408singh@outlook.com"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
