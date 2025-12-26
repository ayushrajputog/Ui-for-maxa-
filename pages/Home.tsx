
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/UI';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <section className="container-custom px-6 py-32 md:py-48 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8">
          BUILD APPS USING AI.<br/>NO CODE.
        </h1>
        <p className="text-lg md:text-xl text-black/50 max-w-xl mb-12 font-medium">
          The world's most minimal platform for high-performance digital products.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/builder">
            <Button size="lg" className="w-full sm:w-auto">Get Started</Button>
          </Link>
          <Link to="/marketplace">
            <Button variant="outline" size="lg" className="border-none hover:bg-transparent hover:underline px-0 w-full sm:w-auto">
              View Templates
            </Button>
          </Link>
        </div>
      </section>

      <section className="container-custom px-6 py-20 border-t border-black/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4 block">Engine</span>
            <h3 className="font-bold mb-2">AI App Generator</h3>
            <p className="text-sm text-black/40">Describe your idea, and let MAXAA handle the architecture.</p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4 block">Store</span>
            <h3 className="font-bold mb-2">Template Marketplace</h3>
            <p className="text-sm text-black/40">Ready-to-use professional templates for any industry.</p>
          </div>
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4 block">Speed</span>
            <h3 className="font-bold mb-2">Instant Deploy</h3>
            <p className="text-sm text-black/40">Go live in seconds with globally distributed infrastructure.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
