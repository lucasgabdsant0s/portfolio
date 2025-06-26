import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const navItems = [
    { name: 'Início', href: '#início' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#serviços' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-500 ${
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
              className="relative font-medium text-white hover:text-accent transition-all duration-300 group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple transition-all duration-300 group-hover:w-full"></span>
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
                className="text-white hover:text-accent transition-all duration-300 py-3 px-4 rounded-lg hover:bg-white hover:bg-opacity-10 fade-in-up"
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
  );
};

export default Header; 