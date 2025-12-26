
import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const location = useLocation();
  if (location.pathname.includes('/builder')) return null;

  return (
    <footer className="py-12 px-6 bg-white">
      <div className="container-custom flex flex-col items-center border-t border-black/5 pt-8">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/30">
          MAXAA &copy; {new Date().getFullYear()} — BUILT FOR CREATORS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
