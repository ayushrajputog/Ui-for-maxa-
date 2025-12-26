
import React from 'react';
import { Card, Button } from '../components/UI';

const Marketplace: React.FC = () => {
  return (
    <div className="min-h-screen pt-32">
      <div className="container-custom px-6">
        <header className="mb-20 text-center">
          <h1 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Templates</h1>
          <p className="text-black/30 text-xs font-bold uppercase tracking-widest italic">Curated by the MAXAA Community</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[3/4] border border-black rounded-[6px] mb-6 flex items-center justify-center group-hover:bg-black/5 transition-colors">
                 <p className="text-[10px] font-black uppercase tracking-widest text-black/10 italic">Template preview will load here</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-tighter">Theme_{i}</h3>
                  <p className="text-[10px] font-black text-black/30 uppercase italic">Free</p>
                </div>
                <Button size="sm">Get</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
