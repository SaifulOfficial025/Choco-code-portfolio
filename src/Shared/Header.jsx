import React from 'react'

function Header() {
  return (
    <header className="w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <div className="flex justify-start">
            <a href="#">
              <img 
                src="/logo-blue-01.svg" 
                alt="App Oreo" 
                className="h-20 w-auto" 
              />
            </a>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-blue-500 font-semibold text-base hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-600 font-medium text-base hover:text-blue-500 transition-colors">
              Services
            </a>
            <a href="#portfolio" className="text-gray-600 font-medium text-base hover:text-blue-500 transition-colors">
              Portfolio
            </a>
            <a href="#teams" className="text-gray-600 font-medium text-base hover:text-blue-500 transition-colors">
              Teams
            </a>
            <a href="#reviews" className="text-gray-600 font-medium text-base hover:text-blue-500 transition-colors">
              Reviews
            </a>
          </nav>

          {/* Call to Action Button */}
          <div className="flex justify-end">
            <a 
              href="#" 
              className="bg-[#1dbf73] hover:bg-[#19a463] text-white font-semibold py-2.5 px-6 rounded shadow transition duration-200"
            >
              Fiverr Profile
            </a>
          </div>
          
        </div>
      </div>
    </header>
  )
}

export default Header