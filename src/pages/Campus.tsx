import React from 'react';
import { 
  GraduationCap, 
  Microscope, 
  BrainCircuit, 
  Terminal, 
  Trophy, 
  Activity, 
  PenTool,
  BookOpen
} from 'lucide-react';

const Campus: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto pt-4 md:pt-10 animate-in fade-in slide-in-from-right-8 duration-500 pb-20 relative z-10">
      
      {/* 
        =======================================================
        Main Container: Campus & Research Experience
        =======================================================
      */}
      <div 
        className="bg-[rgb(0,255,255)] border-[8px] border-[rgb(0,0,0)] p-6 md:p-10 shadow-custom hand-drawn relative transition-all duration-300 transform -rotate-[1deg] hover:rotate-0"
        style={{ "--shadow-x": "16px", "--shadow-y": "16px", "--shadow-color": "rgb(0,0,0)" } as React.CSSProperties}
      >
        
        {/* Header Section */}
        <div className="flex flex-col border-b-[6px] border-[rgb(0,0,0)] pb-6 mb-8 gap-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[rgb(0,0,0)] tracking-tighter mb-2 inline-block hover:animate-wiggle cursor-crosshair text-shadow-sm">
            【校园与科研经历 Tab】
          </h2>
          <div className="font-mono text-lg md:text-xl font-bold flex flex-wrap items-center gap-2">
            <span className="text-[rgb(255,0,255)] text-2xl font-black">{"//"}</span>
            <span className="text-[rgb(0,0,0)]">Campus & Research |</span>
            <span className="bg-[rgb(255,0,255)] text-[rgb(255,255,255)] px-4 py-1 border-[4px] border-[rgb(0,0,0)] transform rotate-2 hand-drawn shadow-[4px_4px_0_rgb(255,234,0)] ml-1 flex items-center gap-2 cursor-crosshair hover:scale-105 transition-transform">
              <BrainCircuit size={18} />
              AI+专业落地
            </span>
          </div>
        </div>

        {/* 
          Block 1: Core Research (Terminal / Data Science vibe)
        */}
        <div className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[8px_8px_0_rgb(255,0,255)] hand-drawn-alt mb-10 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgb(255,234,0)] transition-all group relative z-10">
          
          {/* Decorative Elements */}
          <div className="absolute right-4 top-4 flex space-x-2">
            <div className="w-4 h-4 rounded-full border-2 border-[rgb(255,255,255)] bg-[rgb(255,0,0)]"></div>
            <div className="w-4 h-4 rounded-full border-2 border-[rgb(255,255,255)] bg-[rgb(255,234,0)]"></div>
            <div className="w-4 h-4 rounded-full border-2 border-[rgb(255,255,255)] bg-[rgb(0,255,0)]"></div>
          </div>

          <h3 className="text-2xl md:text-3xl font-black mb-6 flex flex-wrap items-start md:items-center gap-3 mt-4 md:mt-0 leading-snug">
            <div className="bg-[rgb(255,234,0)] p-2.5 border-[3px] border-[rgb(255,255,255)] transform -rotate-6 group-hover:rotate-12 transition-transform shadow-[3px_3px_0_rgb(255,255,255)]">
              <Microscope className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
            </div>
            <span className="flex-1">
              核心科研：AI主播话术情感对观众购买意愿的影响
              <span className="text-[rgb(0,255,255)] border-b-4 border-dashed border-[rgb(0,255,255)] ml-2 inline-block">——主要负责人</span>
            </span>
          </h3>

          <div className="font-mono text-base md:text-lg space-y-5 pl-0 md:pl-4">
             {/* Core Work */}
             <div className="p-4 bg-[rgba(255,255,255,0.1)] border-l-[4px] border-[rgb(0,255,0)]">
               <div className="flex items-start">
                 <span className="text-[rgb(0,255,0)] mr-3 shrink-0 text-xl font-black">{"//"}</span> 
                 <p className="leading-relaxed">
                  <span className="bg-[rgb(0,255,0)] text-[rgb(0,0,0)] px-2 py-0.5 font-bold mr-2 inline-block">核心工作：</span>
                  百度AI/NLP情感分析 + Python + SPSS/STATA 实验设计与数据分析
                 </p>
               </div>
             </div>

             {/* Core Result */}
             <div className="p-4 bg-[rgba(255,255,255,0.1)] border-l-[4px] border-[rgb(255,0,255)]">
               <div className="flex items-start">
                 <span className="text-[rgb(255,0,255)] mr-3 shrink-0 text-xl font-black">{"//"}</span> 
                 <p className="leading-relaxed">
                  <span className="bg-[rgb(255,0,255)] text-[rgb(255,255,255)] px-2 py-0.5 font-bold mr-2 inline-block">核心成果：</span>
                  验证AI主播话术情感对购买意愿的影响及产品类型的调节作用
                 </p>
               </div>
             </div>
          </div>
        </div>

        {/* 
          Block 2: Campus, Education & Skills (Pop-Art Sticker vibe)
        */}
        <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[8px_8px_0_rgb(0,0,0)] hand-drawn mb-6 hover:-translate-y-1 hover:shadow-[12px_12px_0_rgb(0,255,0)] transition-all group relative z-10">
          
          <h3 className="text-2xl md:text-3xl font-black mb-8 flex items-center gap-3">
            <div className="bg-[rgb(0,255,0)] p-2.5 border-[3px] border-[rgb(0,0,0)] rounded-full group-hover:scale-110 transition-transform shadow-[3px_3px_0_rgb(0,0,0)]">
              <GraduationCap className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
            </div>
            校园补充经历
          </h3>

          <div className="space-y-8 font-mono">
            
            {/* Campus Title / Roles */}
            <div className="flex flex-wrap items-center gap-3 font-bold text-lg md:text-xl">
               <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-4 py-2 border-[3px] border-[rgb(0,0,0)] hand-drawn-alt shadow-[4px_4px_0_rgb(0,255,255)]">
                 辽大辩论队队长
               </span>
               <span className="text-[rgb(0,0,0)] px-2">/</span>
               <span className="bg-[rgb(255,234,0)] text-[rgb(0,0,0)] px-4 py-2 border-[3px] border-[rgb(0,0,0)] hand-drawn shadow-[4px_4px_0_rgb(255,0,255)]">
                 素质拓展中心负责人
               </span>
               <span className="flex items-center text-[rgb(255,0,0)] font-black text-xl ml-2 whitespace-nowrap">
                 <Trophy size={24} className="mr-1" /> 国/省/校多项荣誉
               </span>
            </div>

            {/* Education Details */}
            <div className="pl-4 border-l-4 border-[rgb(0,0,0)] border-dashed">
               <div className="flex items-start mb-4">
                 <span className="bg-[rgb(0,255,255)] border-[2px] border-[rgb(0,0,0)] p-1 mr-3 group-hover:rotate-180 transition-transform duration-500 rounded-sm">
                   <BookOpen size={18} strokeWidth={3} />
                 </span> 
                 <p className="font-bold text-base md:text-lg leading-relaxed flex-1">
                  <span className="text-[rgb(255,0,255)] font-black mr-2">【教育背景】</span>
                  辽大 211 <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-2 mx-1">本硕连读 (保研)</span> 
                  本科均分 <strong>90/100</strong> | 连续多年获奖学金 / 优秀毕业生
                 </p>
               </div>
            </div>

            {/* Skills Pool (Sticker Pack effect) */}
            <div className="pt-6 border-t-[4px] border-[rgb(0,0,0)]">
              <div className="flex items-center mb-4">
               <Terminal size={24} className="mr-2" strokeWidth={2.5}/>
               <span className="font-black text-xl">【技能全图鉴】</span>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-4">
                {/* Tech Skills */}
                <div className="flex items-center gap-2 bg-[rgb(255,234,0)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black transform rotate-1 shadow-[3px_3px_0_rgb(0,0,0)] hover:scale-105 transition-transform cursor-crosshair">
                   Axure / SPSS / STATA / 剪映
                </div>
                
                {/* Language */}
                <div className="flex items-center gap-2 bg-[rgb(0,255,0)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black transform -rotate-2 shadow-[3px_3px_0_rgb(0,0,0)] hover:scale-105 transition-transform">
                   英语六级 (CET-6)
                </div>

                {/* Writing */}
                <div className="flex items-center gap-2 bg-[rgb(255,0,255)] text-[rgb(255,255,255)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black transform rotate-2 shadow-[3px_3px_0_rgb(0,0,0)] hover:scale-105 transition-transform">
                   <PenTool size={18} />
                   写作 (叶圣陶杯国二)
                </div>

                {/* Sports */}
                <div className="flex items-center gap-2 bg-[rgb(0,255,255)] border-[3px] border-[rgb(0,0,0)] px-4 py-2 font-black transform -rotate-1 shadow-[3px_3px_0_rgb(0,0,0)] hover:scale-105 transition-transform">
                   <Activity size={18} />
                   网球 3.0
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Campus;