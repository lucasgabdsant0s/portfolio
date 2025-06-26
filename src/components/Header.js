import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('início');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Header background
      setIsScrolled(scrollTop > 50);
      
      // Progress bar
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));
      
      // Back to top button
      setShowBackToTop(scrollTop > 300);
      
      // Active section detection
      const sections = ['início', 'sobre', 'serviços', 'habilidades', 'portfolio', 'contato'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white bg-opacity-10 z-50">
        <div 
          className="h-full bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <header className={`fixed w-full top-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'glass-effect backdrop-blur-xl py-4 shadow-lg border-b border-white border-opacity-10' 
          : 'bg-transparent py-6'
      }`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <span className="text-gradient hover:scale-105 transition-transform duration-300 cursor-pointer">
              Lucas Gabriel
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-all duration-300 group py-2 ${
                  activeSection === item.href.substring(1) 
                    ? 'text-accent' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 ${
                  activeSection === item.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#contato"
              className="btn-primary ml-4 hover:scale-105 transform transition-all duration-300"
            >
              Vamos Conversar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg glass-effect hover:bg-white hover:bg-opacity-20 transition-all duration-300 group"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute top-0 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 top-2.5' : ''
              }`}></span>
              <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-5 left-0 w-full h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 top-2.5' : ''
              }`}></span>
            </div>
          </button>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full glass-effect backdrop-blur-xl border-b border-white border-opacity-10 transition-all duration-500 ${
            isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
          }`}>
            <nav className="flex flex-col py-6 px-6 space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 fade-in-up ${
                    activeSection === item.href.substring(1) 
                      ? 'text-accent bg-white bg-opacity-5' 
                      : 'text-white hover:text-accent'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={closeMenu}
                >
                  {item.name}
                </a>
              ))}
              
              <div className="pt-4">
                <a
                  href="#contato"
                  className="btn-primary w-full text-center block"
                  onClick={closeMenu}
                >
                  Vamos Conversar
                </a>
              </div>
            </nav>
          </div>
        </div>

        {/* Background overlay for mobile menu */}
        {isMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm -z-10"
            onClick={closeMenu}
          ></div>
        )}
      </header>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-accent-blue to-accent-purple text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-30 flex items-center justify-center group ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Voltar ao topo"
      >
        <svg className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default Header; 