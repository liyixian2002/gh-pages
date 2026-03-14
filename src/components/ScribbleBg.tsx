import React from 'react';

const ScribbleBg: React.FC = () => {
  return (
    <div data-cmp="ScribbleBg" className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[rgb(255,255,255)]">
      {/* 网格噪点背景，强化视觉层次 */}
      <div className="absolute inset-0 opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(rgb(0,0,0) 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      
      {/* 巨大的动感随性划线 */}
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none" className="absolute w-[150vw] h-[150vh] top-[-25vh] left-[-25vw] opacity-80">
        {/* 疯狂生长的波浪线 */}
        <path d="M-100,200 Q200,-50 500,300 T1200,100" fill="none" stroke="rgb(0,255,0)" strokeWidth="80" className="animate-doodle" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M-50,800 C300,1200 700,400 1200,900" fill="none" stroke="rgb(0,255,255)" strokeWidth="60" className="animate-doodle" style={{ animationDelay: '2s' }} strokeLinecap="round" strokeLinejoin="round" />
        
        {/* 粉色对角线闪击 */}
        <path d="M1200,300 C800,100 400,800 -100,600" fill="none" stroke="rgb(255,0,255)" strokeWidth="30" className="animate-doodle" style={{ animationDelay: '1s' }} strokeLinecap="round" />
        
        {/* 动态漂浮的虚线轨迹 */}
        <path d="M50,100 L1100,900" fill="none" stroke="rgb(0,0,0)" strokeWidth="6" strokeDasharray="30,40" opacity="0.4" className="animate-float" />
        <path d="M-100,800 L1000,-100" fill="none" stroke="rgb(0,0,0)" strokeWidth="8" strokeDasharray="10,25" opacity="0.4" className="animate-float-reverse" />
      </svg>
      
      {/* 巨大的背景水印字母 */}
      <div 
        className="absolute top-[8%] left-[5%] text-[rgba(0,0,0,0.06)] font-black text-[120px] whitespace-nowrap transform -rotate-[10deg] animate-float pointer-events-none tracking-widest leading-none z-0"
      >
        ZOEY / AI<br/>PRODUCT
      </div>
      <div 
        className="absolute bottom-[5%] right-[-10%] text-[rgba(0,0,0,0.08)] font-black text-[150px] whitespace-nowrap transform rotate-[5deg] animate-float-reverse pointer-events-none tracking-widest z-0"
      >
        CREATOR_
      </div>
    </div>
  );
};

export default ScribbleBg;