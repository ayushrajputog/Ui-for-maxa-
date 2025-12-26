
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'outline', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "rounded-[6px] transition-all duration-75 flex items-center justify-center border border-black active:scale-[0.98] font-medium uppercase tracking-wider";
  const variants = {
    primary: "bg-black text-white hover:bg-white hover:text-black",
    outline: "bg-white text-black hover:bg-black hover:text-white"
  };
  const sizes = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-5 py-2 text-[12px]",
    lg: "px-8 py-3 text-[13px]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className = '', ...props }) => {
  return (
    <input 
      className={`w-full px-4 py-2 rounded-[6px] border border-black/20 focus:border-black transition-all text-sm placeholder:text-gray-300 ${className}`}
      {...props}
    />
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string; onClick?: () => void }> = ({ children, className = '', onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-[6px] border border-black p-6 transition-all ${onClick ? 'cursor-pointer hover:bg-gray-50' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <span className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border border-black rounded-[4px] ${className}`}>
      {children}
    </span>
  );
};

export const Modal: React.FC<{ isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 backdrop-blur-sm p-6">
      <div className="bg-white border border-black w-full max-w-md rounded-[6px] overflow-hidden">
        <div className="p-4 border-b border-black flex justify-between items-center bg-white">
          <h3 className="text-[11px] font-black uppercase tracking-widest">{title}</h3>
          <button onClick={onClose} className="text-sm font-bold">×</button>
        </div>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};
