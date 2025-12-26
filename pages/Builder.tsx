
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Modal, Input } from '../components/UI';

const Builder: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex bg-white overflow-hidden">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-black flex flex-col bg-white">
        <div className="p-8 border-b border-black">
          <Link to="/dashboard" className="text-[10px] font-black uppercase tracking-[0.2em] block mb-8 hover:underline">
            ← Dashboard
          </Link>
          <h2 className="text-lg font-bold tracking-tighter uppercase mb-4">MAXAA Builder</h2>
          <div className="text-[10px] font-black uppercase text-black/30 tracking-widest">Project: My New App</div>
        </div>

        <div className="flex-grow p-8 space-y-12 overflow-y-auto">
          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-6 border-b border-black/5 pb-2">Layout</h3>
            <ul className="space-y-4">
              {['Navigation', 'Hero', 'Grid', 'Footer'].map(item => (
                <li key={item} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-[11px] font-bold uppercase tracking-tighter group-hover:underline">{item}</span>
                  <button className="text-black/20 group-hover:text-black transition-colors">+</button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-6 border-b border-black/5 pb-2">AI Components</h3>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square border border-black/10 rounded-[4px] flex items-center justify-center p-2 text-center">
                  <span className="text-[8px] font-black text-black/20 uppercase">Module {i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-black bg-white">
          <Button className="w-full mb-3" size="sm" onClick={() => setIsModalOpen(true)}>Save Changes</Button>
          <Button variant="outline" className="w-full" size="sm">Preview</Button>
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="flex-grow flex flex-col bg-[#fafafa]">
        <div className="flex-grow p-12 overflow-y-auto flex items-center justify-center">
          <div className="w-full max-w-4xl min-h-[80vh] bg-white border border-black rounded-[6px] relative flex flex-col">
            <header className="p-6 border-b border-black flex justify-between items-center bg-white">
              <div className="h-4 w-24 bg-black/5 rounded-[2px]" />
              <div className="flex gap-4">
                <div className="h-4 w-12 bg-black/5 rounded-[2px]" />
                <div className="h-4 w-12 bg-black/5 rounded-[2px]" />
              </div>
            </header>
            
            <div className="flex-grow flex flex-col items-center justify-center p-20 text-center">
              <p className="text-[11px] font-black uppercase tracking-widest text-black/20 italic mb-4">
                AI will generate content here
              </p>
              <p className="text-xs text-black/10 uppercase font-black">
                Type a prompt below to populate this canvas
              </p>
            </div>

            <footer className="p-8 border-t border-black bg-white mt-auto">
               <div className="h-8 w-full bg-black/5 rounded-[2px]" />
            </footer>

            <div className="absolute top-2 left-2 px-2 py-1 bg-black text-white text-[8px] font-bold uppercase rounded-[2px]">
              Editor Mode
            </div>
          </div>
        </div>

        {/* AI Control Bar */}
        <div className="p-8 border-t border-black bg-white z-10 shadow-[0_-1px_0_0_rgba(0,0,0,1)]">
          <div className="container-custom max-w-2xl flex gap-4">
            <textarea 
              placeholder="E.g. Build a minimalist portfolio for a creative developer..."
              className="flex-grow p-4 border border-black rounded-[6px] text-sm h-14 resize-none focus:outline-none placeholder:text-black/20"
            />
            <Button size="lg" className="h-14 aspect-square md:aspect-auto">Generate</Button>
          </div>
          <div className="text-center mt-4">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-black/20">
              User project placeholder — Processing Prompt
            </span>
          </div>
        </div>
      </main>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Deploy Project"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[9px] font-black uppercase">Subdomain Name</label>
            <Input placeholder="my-awesome-app" />
            <p className="text-[9px] text-black/40 italic">.maxaa.site</p>
          </div>
          <Button className="w-full py-4">Publish Live</Button>
        </div>
      </Modal>
    </div>
  );
};

import { Link } from 'react-router-dom';
export default Builder;
