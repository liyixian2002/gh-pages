import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import ScribbleBg from './ScribbleBg';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div data-cmp="Layout" className="min-h-screen flex flex-col font-mono relative z-0 selection:bg-[rgb(255,0,255)] selection:text-[rgb(255,255,255)]">
      <ScribbleBg />
      <Navbar />
      
      <div className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 pt-[120px] pb-20 relative flex">
        <main className="flex-1 w-full relative z-10 animate-in fade-in zoom-in-95 duration-500">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;