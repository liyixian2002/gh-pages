import React from 'react';
import { 
  Rocket, 
  TrendingUp, 
  ExternalLink, 
  Sparkles, 
  Banknote,
  Users,
  Play
} from 'lucide-react';

const Startup: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-4 md:pt-10 animate-in fade-in slide-in-from-bottom-8 duration-500 pb-20 relative z-10">
      
      {/* 
        =======================================================
        Main Container: Startup Experience
        =======================================================
      */}
      <div 
        className="bg-[rgb(255,234,0)] border-[8px] border-[rgb(0,0,0)] p-6 md:p-10 shadow-custom hand-drawn relative transition-all duration-300 transform rotate-[1deg] hover:rotate-0"
        style={{ "--shadow-x": "16px", "--shadow-y": "16px", "--shadow-color": "rgb(0,0,0)" } as React.CSSProperties}
      >
        
        {/* Header Section */}
        <div className="flex flex-col border-b-[6px] border-[rgb(0,0,0)] pb-6 mb-8 gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[rgb(0,0,0)] tracking-tighter mb-2 inline-block hover:animate-wiggle cursor-crosshair text-shadow-sm">
            【创业经历 Tab】
          </h2>
          <div className="font-mono text-lg md:text-xl font-bold flex flex-wrap items-center gap-2">
            <span className="text-[rgb(255,0,255)] text-2xl font-black">{"//"}</span>
            <span className="text-[rgb(0,0,0)]">Entrepreneurship |</span>
            <span className="bg-[rgb(0,255,0)] text-[rgb(0,0,0)] px-4 py-1 border-[4px] border-[rgb(0,0,0)] transform -rotate-2 hand-drawn-alt shadow-[4px_4px_0_rgb(255,0,255)] ml-1 flex items-center gap-2 cursor-crosshair hover:scale-105 transition-transform">
              <Sparkles size={18} />
              AI赋能自媒体
            </span>
          </div>
        </div>

        {/* 
          Block 1: Identity & Monetization 
        */}
        <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[8px_8px_0_rgb(0,0,0)] hand-drawn-alt mb-10 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgb(255,0,255)] transition-all group relative z-10">
          
          {/* Decorative Tape */}
          <div className="absolute -top-4 left-8 w-24 h-8 bg-[rgba(0,0,0,0.8)] transform -rotate-[5deg] hand-drawn z-20 shadow-[2px_2px_0_rgb(0,255,255)]"></div>

          <h3 className="text-2xl md:text-3xl font-black mb-6 flex flex-wrap items-center gap-3">
            <div className="bg-[rgb(255,0,255)] p-2.5 border-[3px] border-[rgb(0,0,0)] group-hover:-translate-y-2 transition-transform shadow-[3px_3px_0_rgb(0,0,0)]">
              <Rocket className="text-[rgb(255,255,255)]" size={28} strokeWidth={3} />
            </div>
            独立自媒体博主
          </h3>

          {/* Key Metrics Badges */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center bg-[rgb(0,255,255)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black text-lg shadow-[4px_4px_0_rgb(0,0,0)] transform rotate-1">
              <Users className="mr-2" size={20} strokeWidth={3} /> 
              全网粉丝 10w+
            </div>
            
            <div className="flex items-center bg-[rgb(255,234,0)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black text-lg shadow-[4px_4px_0_rgb(0,0,0)] transform -rotate-1">
              <Banknote className="mr-2" size={20} strokeWidth={3} /> 
              广告报价 4000元/条
            </div>

            <div className="flex items-center bg-[rgb(0,255,0)] border-[3px] border-[rgb(0,0,0)] px-5 py-2 font-black text-xl shadow-[4px_4px_0_rgb(0,0,0)] transform rotate-2 animate-pulse">
              <TrendingUp className="mr-2" size={24} strokeWidth={3} /> 
              月稳定变现 3w+
            </div>
          </div>
        </div>

        {/* 
          Block 2: Core Data Performance 
        */}
        <div className="bg-[rgb(0,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[8px_8px_0_rgb(0,0,0)] hand-drawn mb-10 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgb(0,255,0)] transition-all group relative z-10">
          
          <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
            <div className="bg-[rgb(255,255,255)] p-2.5 border-[3px] border-[rgb(0,0,0)] group-hover:rotate-12 transition-transform shadow-[3px_3px_0_rgb(0,0,0)] rounded-full">
              <TrendingUp className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
            </div>
            核心数据表现
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-center">
            
            {/* Stat Box 1 */}
            <div className="bg-[rgb(255,255,255)] border-[4px] border-[rgb(0,0,0)] p-4 shadow-[4px_4px_0_rgb(255,0,255)] transform -rotate-1 group-hover:scale-105 transition-transform flex flex-col justify-center items-center">
              <div className="text-[rgb(255,0,255)] font-black text-4xl mb-1 drop-shadow-sm flex items-center justify-center">
                550w+ <Play className="ml-1 fill-current" size={24} />
              </div>
              <div className="text-[rgb(0,0,0)] font-bold bg-[rgb(255,234,0)] px-2 py-0.5 border-2 border-[rgb(0,0,0)] text-sm inline-block mx-auto mt-2">
                单条视频浏览量
              </div>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-[rgb(255,255,255)] border-[4px] border-[rgb(0,0,0)] p-4 shadow-[4px_4px_0_rgb(255,0,255)] transform rotate-1 group-hover:scale-105 transition-transform flex flex-col justify-center items-center">
              <div className="text-[rgb(255,0,0)] font-black text-4xl mb-1 drop-shadow-sm">
                10条
              </div>
              <div className="text-[rgb(0,0,0)] font-bold bg-[rgb(0,255,0)] px-2 py-0.5 border-2 border-[rgb(0,0,0)] text-sm inline-block mx-auto mt-2">
                破百万播放视频
              </div>
            </div>

            {/* Stat Box 3 */}
            <div className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] border-[4px] border-[rgb(255,255,255)] p-4 shadow-[4px_4px_0_rgb(255,0,255)] transform -rotate-2 group-hover:scale-105 transition-transform flex flex-col justify-center items-center relative overflow-hidden">
              <div className="absolute right-[-10px] top-[-10px] text-[rgb(255,0,255)] opacity-50">
                <Sparkles size={60} strokeWidth={1.5} />
              </div>
              <div className="text-[rgb(0,255,255)] font-black text-4xl mb-1 drop-shadow-sm relative z-10">
                TOP 5%
              </div>
              <div className="text-[rgb(0,0,0)] font-bold bg-[rgb(255,255,255)] px-2 py-0.5 border-2 border-[rgb(0,0,0)] text-sm inline-block mx-auto mt-2 relative z-10">
                同赛道流量排名
              </div>
            </div>

          </div>
        </div>

        {/* 
          Links Section (Actions) 
        */}
        <div className="flex flex-col md:flex-row gap-6 mt-10">
          
          <button className="flex-1 group relative bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-4 md:p-6 shadow-[6px_6px_0_rgb(255,0,255)] hand-drawn hover:-translate-y-2 hover:shadow-[10px_10px_0_rgb(0,0,0)] transition-all text-left flex justify-between items-center overflow-hidden">
             {/* Background hover fill effect */}
             <div className="absolute inset-0 bg-[rgb(255,0,255)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
             
             <div className="relative z-10 flex flex-col">
               <span className="text-[rgb(0,0,0)] font-black text-xl md:text-2xl group-hover:text-[rgb(255,255,255)] transition-colors">
                 [ 点击查看 ]
               </span>
               <span className="text-[rgb(0,0,0)] font-bold text-lg md:text-xl font-mono mt-1 group-hover:text-[rgb(255,234,0)] transition-colors">
                 🔗 大学生博主账号
               </span>
             </div>
             
             <div className="bg-[rgb(255,234,0)] p-3 border-[4px] border-[rgb(0,0,0)] rounded-full transform group-hover:rotate-45 group-hover:scale-110 transition-all z-10 relative">
               <ExternalLink size={24} className="text-[rgb(0,0,0)]" strokeWidth={3} />
             </div>
          </button>

          <button className="flex-1 group relative bg-[rgb(0,0,0)] border-[5px] border-[rgb(0,0,0)] p-4 md:p-6 shadow-[6px_6px_0_rgb(0,255,255)] hand-drawn-alt hover:-translate-y-2 hover:shadow-[10px_10px_0_rgb(255,234,0)] transition-all text-left flex justify-between items-center overflow-hidden">
             {/* Background hover fill effect */}
             <div className="absolute inset-0 bg-[rgb(0,255,0)] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
             
             <div className="relative z-10 flex flex-col">
               <span className="text-[rgb(255,255,255)] font-black text-xl md:text-2xl group-hover:text-[rgb(0,0,0)] transition-colors">
                 [ 点击查看 ]
               </span>
               <span className="text-[rgb(0,255,255)] font-bold text-lg md:text-xl font-mono mt-1 group-hover:text-[rgb(0,0,0)] transition-colors">
                 🔗 情感咨询博主账号
               </span>
             </div>
             
             <div className="bg-[rgb(255,0,255)] p-3 border-[4px] border-[rgb(0,0,0)] rounded-full transform group-hover:rotate-45 group-hover:scale-110 transition-all z-10 relative">
               <ExternalLink size={24} className="text-[rgb(255,255,255)]" strokeWidth={3} />
             </div>
          </button>

        </div>

      </div>
    </div>
  );
};

export default Startup;