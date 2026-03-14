import React from 'react';
import { Camera, Paintbrush, Terminal } from 'lucide-react';

const FloatingTags: React.FC = () => {
  // Sidebar floating labels definition
  const tags = [
    { label: 'Sora2/即梦/可灵', icon: Camera, color: 'from-blue-500 to-cyan-400' },
    { label: 'Runway/Midjourney', icon: Paintbrush, color: 'from-purple-500 to-pink-500' },
    { label: '手搓玩家', icon: Terminal, color: 'from-amber-400 to-orange-500' }
  ];

  return (
    <div data-cmp="FloatingTags" className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col space-y-4">
      {tags.map((tag, index) => {
        const Icon = tag.icon;
        return (
          <div 
            key={index}
            className="group flex items-center justify-end relative cursor-crosshair"
          >
            {/* Tag Badge */}
            <div className={`
              flex items-center space-x-2 px-4 py-2 rounded-l-xl rounded-r-md 
              bg-[#121212]/80 backdrop-blur-md border border-white/10 
              shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-300
              hover:-translate-x-2 hover:border-white/30
            `}>
              <div className={`p-1.5 rounded-md bg-gradient-to-br ${tag.color}`}>
                <Icon size={14} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors whitespace-nowrap">
                {tag.label}
              </span>
            </div>
            
            {/* Active connecting line decoration */}
            <div className="absolute right-[-24px] w-6 h-[1px] bg-gradient-to-r from-white/30 to-transparent hidden group-hover:block" />
          </div>
        );
      })}
    </div>
  );
};

export default FloatingTags;