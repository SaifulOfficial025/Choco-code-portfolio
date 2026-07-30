import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#b3ecf9] pt-20 pb-8 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - Brand & Subscription */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img src="/logo-blue-01.svg" alt="App Oreo Logo" className="h-16" />
            </div>
            <p className="text-[#334155] text-[15px] mb-8 max-w-sm leading-relaxed">
              AI development services with 100% client satisfaction.
            </p>
            
            <form className="flex w-full max-w-sm mb-8" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Send Email" 
                className="w-full px-4 py-2.5 text-sm bg-transparent border border-[#0284c7] text-gray-800 focus:outline-none placeholder-gray-500 rounded-l-md transition-colors focus:bg-white/40" 
                required
              />
              <button 
                type="submit" 
                className="bg-[#0284c7] text-white px-6 py-2.5 text-sm font-semibold rounded-r-md hover:bg-[#0369a1] transition-colors"
              >
                Send
              </button>
            </form>
            
            <div className="flex space-x-5 text-[#0284c7]">
              <a href="#" className="hover:text-blue-900 transition-colors" aria-label="Home">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </a>
              <a href="#" className="hover:text-blue-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Committed To */}
          <div className="lg:col-span-4">
            <h3 className="font-bold text-gray-900 text-lg mb-6 tracking-wide">Committed To</h3>
            <p className="text-[#334155] text-[15px] leading-[1.8] mb-6 max-w-sm">
              Ordet is a protégé of the Chicago tommusryve educate and collaborate with le ifference entermentally ant soccally. Let's ca Mare.
            </p>
            <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
              Go to profile <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
            </a>
          </div>

          {/* Column 3 - Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Home <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Portfolio <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Services <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Teams <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Resources */}
          <div className="lg:col-span-2">
            <h3 className="font-bold text-gray-900 text-lg mb-6 tracking-wide">Resources</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Fiverr Profile <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Contact Us <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Client Reviews <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-[15px] text-[#4f95c8] hover:text-blue-700 hover:underline flex items-center transition-colors">
                  Our Goals <span className="ml-1 text-[10px] font-bold mt-0.5">&gt;</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
        
        {/* Copyright Section */}
        <div className="text-center text-[13px] text-gray-500 pt-8 mt-12 pb-2">
          © 2023 Team A. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;