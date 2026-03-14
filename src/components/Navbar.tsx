import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  // 严格对应的四个导航 Tab
  const navLinks = [
    { path: '/', label: '基础信息' },
    { path: '/internships', label: '实习经历' },
    { path: '/startup', label: '创业经历' },
    { path: '/campus', label: '校园与科研经历' }
  ];

  return (
    <nav data-cmp="Navbar" className="fixed top-0 left-0 right-0 z-50 bg-[rgb(255,255,255)] border-b-[6px] border-[rgb(0,0,0)] h-[90px] px-4 md:px-8 flex items-center justify-between shadow-[0_8px_0_rgba(0,0,0,0.1)]">
      
      {/* 左侧头像与高亮标识 (动态悬停放大) */}
      <div className="flex-shrink-0 flex items-center space-x-4 md:space-x-6 animate-float">
        {/* 生活照相框 - 带错位狂野背景 */}
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-[rgb(255,0,255)] transform rotate-6 hand-drawn group-hover:rotate-12 transition-all duration-300"></div>
          <div className="absolute inset-0 bg-[rgb(0,255,255)] transform -rotate-6 hand-drawn-alt group-hover:-rotate-12 transition-all duration-300"></div>
          <div className="w-14 h-14 md:w-16 md:h-16 overflow-hidden border-[4px] border-[rgb(0,0,0)] flex items-center justify-center transform -rotate-3 relative z-10 bg-[rgb(255,234,0)] shadow-[4px_4px_0_rgb(0,0,0)] group-hover:scale-110 transition-transform">
            {/* 您的个人生活照占位 - 未来可直接替换 src */}
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150" 
              alt="Zoey Life Photo Pz" 
              className="w-full h-full object-cover opacity-90 grayscale-[20%] group-hover:grayscale-0 transition-all"
            />
          </div>
        </div>
        
        <div className="flex flex-col">
          <Link to="/" className="text-xl md:text-3xl font-black text-[rgb(0,0,0)] transform rotate-1 hover:animate-wiggle inline-block tracking-tighter">
            Zoey Li
            <span className="inline-block ml-3 md:ml-4 px-3 py-1 bg-[rgb(0,255,0)] border-[4px] border-[rgb(0,0,0)] hand-drawn text-base md:text-xl font-bold cursor-crosshair shadow-[4px_4px_0_rgba(0,0,0,1)] hover:bg-[rgb(255,234,0)] transition-colors">
              | AI PM
            </span>
          </Link>
        </div>
      </div>

      {/* 右侧导航栏 Tab 按钮 */}
      <div className="flex flex-1 justify-end space-x-3 md:space-x-5 overflow-x-auto whitespace-nowrap scrollbar-hide py-2 pr-2">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.path}
              to={link.path}
              className={`
                px-4 py-2 flex-shrink-0 font-black text-sm md:text-lg transition-all duration-300 border-[4px] border-[rgb(0,0,0)]
                ${isActive 
                  ? 'bg-[rgb(0,0,0)] text-[rgb(255,255,255)] rotate-2 hand-drawn shadow-[6px_6px_0_rgb(255,0,255)] scale-110' 
                  : 'bg-[rgb(255,255,255)] text-[rgb(0,0,0)] hand-drawn-alt hover:-translate-y-2 hover:-rotate-3 hover:bg-[rgb(255,234,0)] shadow-[6px_6px_0_rgb(0,0,0)]'}
              `}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

    </nav>
  );
};

export default Navbar;