
import React, { useState } from 'react';

const GrowthAILogo: React.FC = () => (
  <div className="flex items-center gap-2">
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0B1229]">
      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="currentColor"/>
      <path d="M16.5 12C16.5 14.49 14.49 16.5 12 16.5C9.51 16.5 7.5 14.49 7.5 12C7.5 9.51 9.51 7.5 12 7.5C14.49 7.5 16.5 9.51 16.5 12ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="currentColor"/>
      <path d="M9 12H15" stroke="white" strokeWidth="1.5"/>
    </svg>
    <span className="text-xl font-bold text-[#0B1229]">Growth AI</span>
  </div>
);


const NavLink: React.FC<{ href: string; children: React.ReactNode, hasDropdown?: boolean }> = ({ href, children, hasDropdown }) => (
  <a href={href} className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
    {children}
    {hasDropdown && (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    )}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <header className="relative">
      <nav className="flex items-center justify-between">
        <GrowthAILogo />
        <div className="hidden lg:flex items-center gap-8">
          <NavLink href="#">About</NavLink>
          <NavLink href="#" hasDropdown>Services</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Resources</NavLink>
          <NavLink href="#">Contact Us</NavLink>
        </div>
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-sm font-semibold text-gray-800 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">Sign Up</button>
          <button className="text-sm font-semibold text-white bg-[#0B1229] hover:bg-black px-4 py-2 rounded-full transition-colors">Login</button>
        </div>
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="lg:hidden mt-4 bg-white/80 backdrop-blur-sm rounded-lg p-4 space-y-4">
          <NavLink href="#">About</NavLink>
          <NavLink href="#" hasDropdown>Services</NavLink>
          <NavLink href="#">Blog</NavLink>
          <NavLink href="#">Resources</NavLink>
          <NavLink href="#">Contact Us</NavLink>
          <div className="flex flex-col gap-4 pt-4 border-t">
            <button className="w-full text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">Sign Up</button>
            <button className="w-full text-sm font-semibold text-white bg-[#0B1229] hover:bg-black px-4 py-2 rounded-full transition-colors">Login</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
