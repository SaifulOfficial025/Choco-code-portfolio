import React, { useState, useEffect } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-light shadow-lg shadow-black/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-1 group">
            <span className="text-cc-green font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">&lt;</span>
            <span className="text-2xl md:text-3xl font-serif font-bold text-gradient-choco tracking-tight">
              Choco Code
            </span>
            <span className="text-cc-green font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity">/&gt;</span>
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Services', 'Portfolio', 'Teams', 'Reviews'].map((item, i) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className={`relative text-sm font-medium transition-colors duration-300 ${
                  i === 0 ? 'text-cc-green' : 'text-cc-black/60 hover:text-cc-green'
                } after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cc-green after:to-cc-yellow after:transition-all after:duration-300 hover:after:w-full`}
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a 
              href="#" 
              className="shimmer-btn inline-flex items-center bg-gradient-to-r from-cc-green to-cc-green-light text-white font-semibold py-2.5 px-6 rounded-lg shadow-lg shadow-cc-green/20 hover:shadow-cc-green/40 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              <span className="font-mono mr-2 text-xs opacity-70">//</span>
              Fiverr Profile
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cc-black p-2 hover:text-cc-green transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-light rounded-xl p-6 space-y-4 shadow-xl">
            {['Home', 'Services', 'Portfolio', 'Teams', 'Reviews'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="block text-cc-black/70 hover:text-cc-green text-sm font-medium transition-colors py-2 border-b border-cc-green/10"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href="#" 
              className="shimmer-btn block text-center bg-gradient-to-r from-cc-green to-cc-green-light text-white font-semibold py-3 px-6 rounded-lg text-sm mt-4"
            >
              Fiverr Profile
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;