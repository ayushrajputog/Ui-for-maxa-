
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isBuilder = location.pathname.includes('/builder');

  if (isBuilder) return null;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Projects', path: '/projects' },
    { name: 'Builder', path: '/builder' },
    { name: 'Templates', path: '/marketplace' },
    { name: 'Settings', path: '/settings' },
    { name: 'Login', path: '/login' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 px-6 py-6 border-b border-black/5">
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter uppercase">
          MAXAA
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${location.pathname === link.path ? 'text-black' : 'text-black/30 hover:text-black'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-sm font-black uppercase tracking-widest"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black p-6 flex flex-col space-y-4">
          {links.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className={`text-[10px] font-bold uppercase tracking-widest ${location.pathname === link.path ? 'text-black underline' : 'text-black/30'}`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
