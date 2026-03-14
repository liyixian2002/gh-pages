import React, { useState } from 'react';
import { 
  Film, 
  Wand2, 
  FlaskConical, 
  ExternalLink, 
  CornerUpLeft, 
  ArrowRight,
  Briefcase,
  Building2,
  MessageCircle,
  Lightbulb,
  ArrowLeft
} from 'lucide-react';

const Internships: React.FC = () => {
  // Use state to manage internal sub-views smoothly without changing strict routes
  const [currentView, setCurrentView] = useState<'baidu' | 'overview' | 'zhenlie'>('baidu');

  return (
    <div className="w-full max-w-5xl mx-auto pt-4 md:pt-10 animate-in fade-in duration-500 pb-20 relative z-10">
      
      {/* 
        =======================================================
        View 1: Baidu Internship
        =======================================================
      */}
      {currentView === 'baidu' && (
        <div 
          className="bg-[rgb(0,255,0)] border-[8px] border-[rgb(0,0,0)] p-6 md:p-10 shadow-custom hand-drawn relative transition-all duration-300 transform rotate-[0.5deg]"
          style={{ "--shadow-x": "16px", "--shadow-y": "16px", "--shadow-color": "rgb(0,0,0)" } as React.CSSProperties}
        >
          {/* Header Section */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b-[6px] border-[rgb(0,0,0)] pb-6 mb-8 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase text-[rgb(0,0,0)] tracking-tighter mb-4 inline-block hover:animate-wiggle cursor-crosshair">
                【实习经历 - 百度】
              </h2>
              <div className="font-mono text-lg md:text-xl font-bold flex flex-wrap items-center gap-2">
                <span className="text-[rgb(255,0,255)] text-2xl font-black">{"//"}</span>
                Baidu Internship |
                <span className="bg-[rgb(255,0,255)] text-[rgb(255,255,255)] px-3 py-1 border-[3px] border-[rgb(0,0,0)] transform -rotate-2 hand-drawn-alt shadow-[3px_3px_0_rgb(0,0,0)] ml-2">
                  AIGC策略产品
                </span>
              </div>
            </div>

            <button className="group flex items-center gap-2 bg-[rgb(255,234,0)] border-[4px] border-[rgb(0,0,0)] px-4 py-2 font-black text-lg hand-drawn shadow-[4px_4px_0_rgb(0,0,0)] hover:bg-[rgb(255,255,255)] hover:-translate-y-1 transition-all self-start lg:self-auto">
              <ExternalLink size={20} className="group-hover:rotate-45 transition-transform" strokeWidth={3} />
              [AI原生视频作品集]
            </button>
          </div>

          {/* Section 1: Short Video Production */}
          <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[6px_6px_0_rgb(0,0,0)] hand-drawn-alt mb-8 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgb(255,0,255)] transition-all group relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
              <div className="bg-[rgb(255,234,0)] p-2 border-[3px] border-[rgb(0,0,0)] group-hover:rotate-12 transition-transform">
                <Film className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
              </div>
              一、AIGC创意复刻短视频生产通路搭建
            </h3>
            <div className="font-bold space-y-4 font-mono text-base md:text-lg">
               <p className="flex items-start">
                 <span className="text-[rgb(255,0,255)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                  <span className="bg-[rgb(255,234,0)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">核心工作：</span> 
                  gemini视频理解生成创意模板 {"->"} 文心生产创意实例 {"->"} claude自动化评估创意脚本 {"->"} 自研模型生产视频
                 </span>
               </p>
               <p className="flex items-start">
                 <span className="text-[rgb(0,255,0)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                  <span className="bg-[rgb(0,255,255)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">落地成果：</span>
                  实现输入抖音高热视频，输出复刻后的n个系列视频，投入到百度feed流获取高分发
                 </span>
               </p>
            </div>
          </div>

          {/* Section 2: AI Comic Drama */}
          <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[6px_6px_0_rgb(0,0,0)] hand-drawn mb-8 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgb(0,255,255)] transition-all group relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
              <div className="bg-[rgb(255,0,255)] p-2 border-[3px] border-[rgb(0,0,0)] group-hover:-rotate-12 transition-transform">
                <Wand2 className="text-[rgb(255,255,255)]" size={28} strokeWidth={3} />
              </div>
              二、AI漫剧自动化工作流拆解
            </h3>
            <div className="font-bold space-y-4 font-mono text-base md:text-lg">
               <p className="flex items-start">
                 <span className="text-[rgb(255,0,255)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                   <span className="bg-[rgb(255,234,0)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">核心工作：</span>
                   coze搭建工作流实现AI漫剧自动化生产，使用即梦等AI工具手搓demo
                 </span>
               </p>
               <p className="flex items-start">
                 <span className="text-[rgb(0,255,0)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                   <span className="bg-[rgb(0,255,255)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">落地成果：</span>
                   落地成品AI漫剧《父皇超会怼》，梳理自动化生产核心环节与优化方向
                 </span>
               </p>
            </div>
          </div>

          {/* Section 3: Model Evaluation */}
          <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[6px_6px_0_rgb(0,0,0)] hand-drawn-alt mb-10 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgb(255,234,0)] transition-all group relative z-10">
            <h3 className="text-2xl md:text-3xl font-black mb-6 flex items-center gap-3">
              <div className="bg-[rgb(0,255,255)] p-2 border-[3px] border-[rgb(0,0,0)] group-hover:rotate-12 transition-transform">
                <FlaskConical className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
              </div>
              三、自研生图/视频大模型评测
            </h3>
            <div className="font-bold space-y-4 font-mono text-base md:text-lg">
               <p className="flex items-start">
                 <span className="text-[rgb(255,0,255)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                   <span className="bg-[rgb(255,234,0)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">核心工作：</span>
                   参与自研生图/视频大模型评测全流程，含评估标准制定+评估集收集+评估报告产出
                 </span>
               </p>
               <p className="flex items-start">
                 <span className="text-[rgb(0,255,0)] mr-3 shrink-0 text-xl">{"//"}</span> 
                 <span>
                   <span className="bg-[rgb(0,255,255)] px-1 py-0.5 border border-[rgb(0,0,0)] mr-2">评测维度：</span>
                   <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-2 mx-1 inline-block transform -rotate-1">指令遵循</span> 
                   | <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-2 mx-1 inline-block transform rotate-1">主体/人物一致性</span>
                   | <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-2 mx-1 inline-block transform -rotate-2">畸变穿帮</span>
                 </span>
               </p>
            </div>
          </div>

          {/* Core Value Summary */}
          <div className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] p-5 md:p-6 border-[5px] border-[rgb(255,234,0)] transform -rotate-[1deg] mb-10 shadow-[8px_8px_0_rgb(255,0,255)] hover:rotate-0 transition-transform">
            <p className="font-bold text-lg md:text-xl font-mono leading-relaxed">
              <span className="text-[rgb(0,255,0)] font-black text-2xl animate-pulse">{"// "}</span>
              <span className="text-[rgb(255,234,0)] pl-1">实习核心价值：</span>
              落地AIGC内容自动化生产全链路实践，完成从创意生成到视频产出的产品实操。
            </p>
          </div>

          {/* Nav Actions */}
          <div className="flex flex-col md:flex-row gap-4 border-t-[5px] border-dashed border-[rgb(0,0,0)] pt-8">
            <button 
              onClick={() => setCurrentView('overview')}
              className="flex-1 group bg-[rgb(255,255,255)] text-[rgb(0,0,0)] border-[4px] border-[rgb(0,0,0)] py-4 font-black text-lg md:text-xl hand-drawn flex items-center justify-center gap-3 hover:-translate-x-2 hover:bg-[rgb(255,234,0)] hover:shadow-[6px_6px_0_rgb(0,0,0)] transition-all"
            >
              <CornerUpLeft size={24} className="group-hover:-translate-y-1 group-hover:-translate-x-1 transition-transform" strokeWidth={3} />
              [ 返回实习经历首页 ]
            </button>
            
            <button 
              onClick={() => setCurrentView('zhenlie')}
              className="flex-1 group bg-[rgb(0,255,255)] text-[rgb(0,0,0)] border-[4px] border-[rgb(0,0,0)] py-4 font-black text-lg md:text-xl hand-drawn-alt flex items-center justify-center gap-3 hover:translate-x-2 hover:bg-[rgb(255,255,255)] hover:shadow-[6px_6px_0_rgb(0,0,0)] transition-all"
            >
              <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" strokeWidth={3} />
              [ 切换至阵列格物实习 ] 📥
            </button>
          </div>
        </div>
      )}

      {/* 
        =======================================================
        View 2: Overview 
        =======================================================
      */}
      {currentView === 'overview' && (
        <div className="w-full flex-col animate-in fade-in duration-300">
          <div 
            className="bg-[rgb(255,255,255)] border-[8px] border-[rgb(0,0,0)] p-8 md:p-12 shadow-custom hand-drawn-alt relative"
            style={{ "--shadow-x": "16px", "--shadow-y": "16px", "--shadow-color": "rgb(0,255,255)" } as React.CSSProperties}
          >
            <h2 className="text-4xl font-black mb-10 text-[rgb(0,0,0)] border-b-[6px] border-[rgb(0,0,0)] pb-4 inline-block">
              实习经历总览
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <button 
                onClick={() => setCurrentView('baidu')}
                className="bg-[rgb(0,255,0)] border-[5px] border-[rgb(0,0,0)] p-10 hand-drawn hover:-translate-y-2 hover:shadow-[8px_8px_0_rgb(0,0,0)] transition-all text-left group"
              >
                <Briefcase size={40} className="mb-4 text-[rgb(0,0,0)] group-hover:animate-wiggle" strokeWidth={2.5} />
                <h3 className="text-3xl font-black mb-2 text-[rgb(0,0,0)]">百度 (Baidu)</h3>
                <p className="font-mono font-bold text-[rgb(0,0,0)] bg-[rgb(255,255,255)] inline-block px-2 border-2 border-[rgb(0,0,0)]">AIGC策略产品</p>
              </button>

              <button 
                onClick={() => setCurrentView('zhenlie')}
                className="bg-[rgb(255,0,255)] border-[5px] border-[rgb(0,0,0)] p-10 hand-drawn-alt hover:-translate-y-2 hover:shadow-[8px_8px_0_rgb(0,0,0)] transition-all text-left group"
              >
                <Building2 size={40} className="mb-4 text-[rgb(255,255,255)] group-hover:animate-wiggle" strokeWidth={2.5} />
                <h3 className="text-3xl font-black mb-2 text-[rgb(255,255,255)]">阵列格物</h3>
                <p className="font-mono font-bold text-[rgb(0,0,0)] bg-[rgb(0,255,255)] inline-block px-2 border-2 border-[rgb(0,0,0)]">ToC AI社交产品优化</p>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 
        =======================================================
        View 3: Zhenlie Internship (The requested content)
        =======================================================
      */}
      {currentView === 'zhenlie' && (
        <div className="w-full flex-col animate-in slide-in-from-right duration-300">
          <div 
            className="bg-[rgb(255,0,255)] border-[8px] border-[rgb(0,0,0)] p-6 md:p-10 shadow-custom hand-drawn relative transition-all duration-300 transform -rotate-[0.5deg]"
            style={{ "--shadow-x": "16px", "--shadow-y": "16px", "--shadow-color": "rgb(0,0,0)" } as React.CSSProperties}
          >
            
            {/* Header Section */}
            <div className="flex flex-col border-b-[6px] border-[rgb(0,0,0)] pb-6 mb-8 gap-4">
              <h2 className="text-4xl md:text-5xl font-black uppercase text-[rgb(255,255,255)] tracking-tighter mb-2 inline-block hover:animate-wiggle cursor-crosshair text-shadow-sm">
                【实习经历 - 阵列格物】
              </h2>
              <div className="font-mono text-lg md:text-xl font-bold flex flex-wrap items-center gap-2">
                <span className="text-[rgb(255,234,0)] text-2xl font-black">{"//"}</span>
                <span className="text-[rgb(0,0,0)]">Array Grid Internship |</span>
                <span className="bg-[rgb(255,234,0)] text-[rgb(0,0,0)] px-3 py-1 border-[3px] border-[rgb(0,0,0)] transform rotate-2 hand-drawn shadow-[3px_3px_0_rgb(0,255,255)] ml-1">
                  ToC AI社交产品优化
                </span>
              </div>
            </div>

            {/* Core Work Block */}
            <div className="bg-[rgb(255,255,255)] border-[5px] border-[rgb(0,0,0)] p-6 md:p-8 shadow-[6px_6px_0_rgb(0,0,0)] hand-drawn-alt mb-10 hover:-translate-y-1 hover:shadow-[10px_10px_0_rgb(0,255,255)] transition-all group relative z-10">
              
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-black mb-2 flex items-center lg:items-start flex-col lg:flex-row gap-3">
                  <div className="flex items-center">
                    <div className="bg-[rgb(0,255,255)] p-2 border-[3px] border-[rgb(0,0,0)] group-hover:rotate-12 transition-transform inline-block mr-3">
                      <Building2 className="text-[rgb(0,0,0)]" size={28} strokeWidth={3} />
                    </div>
                    <span>阵列格物 - AI产品经理实习生</span>
                  </div>
                </h3>
                {/* 竞品信息副标 */}
                <div className="ml-0 lg:ml-16 mt-2 inline-block">
                  <span className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-3 py-1 font-bold text-sm md:text-md transform -rotate-1 hand-drawn inline-block">
                    硕博专属AI社交APP
                  </span>
                  <span className="text-[rgb(0,0,0)] font-bold opacity-60 ml-2 font-mono text-sm shadow-sm inline-block">
                    (竞品：Soul / 青藤之恋 / 二狗)
                  </span>
                </div>
              </div>

              {/* Specific Details */}
              <div className="font-bold space-y-6 font-mono text-base md:text-lg pl-0 lg:pl-4">
                 
                 <div className="flex items-start">
                   <div className="bg-[rgb(255,234,0)] p-1.5 border-[2px] border-[rgb(0,0,0)] rounded-full mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                     <MessageCircle size={18} strokeWidth={3} />
                   </div>
                   <p>
                    <span className="bg-[rgb(255,0,255)] text-[rgb(255,255,255)] px-2 py-0.5 border border-[rgb(0,0,0)] mr-2 inline-block shadow-[2px_2px_0_rgb(0,0,0)]">核心工作：</span> 
                    AI聊天助手从0到1设计落地，解决用户聊天破冰难痛点
                   </p>
                 </div>

                 <div className="flex items-start">
                   <div className="bg-[rgb(0,255,0)] p-1.5 border-[2px] border-[rgb(0,0,0)] rounded-full mr-3 mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                     <Lightbulb size={18} strokeWidth={3} />
                   </div>
                   <p className="leading-relaxed">
                    <span className="bg-[rgb(0,255,255)] text-[rgb(0,0,0)] px-2 py-0.5 border border-[rgb(0,0,0)] mr-2 inline-block shadow-[2px_2px_0_rgb(0,0,0)]">核心成果：</span>
                    设计个性化破冰话术功能并上线，数据小幅提升；复盘问题提出换模型+兜底题库优化方案
                   </p>
                 </div>

              </div>
            </div>

            {/* Core Value Summary */}
            <div className="bg-[rgb(0,0,0)] text-[rgb(255,255,255)] p-5 md:p-6 border-[5px] border-[rgb(0,255,255)] transform rotate-[1deg] mb-10 shadow-[8px_8px_0_rgb(255,234,0)] hover:rotate-0 transition-transform">
              <p className="font-bold text-lg md:text-xl font-mono leading-relaxed">
                <span className="text-[rgb(255,0,255)] font-black text-2xl animate-pulse">{"// "}</span>
                <span className="bg-[rgb(255,255,255)] text-[rgb(0,0,0)] px-1 mr-2 hand-drawn-alt">实习亮点：</span>
                完成ToC AI社交产品核心功能从设计、上线到复盘优化的全流程实操。
              </p>
            </div>

            {/* Nav Actions */}
            <div className="flex flex-col md:flex-row gap-4 border-t-[5px] border-dashed border-[rgb(255,255,255)] pt-8">
              <button 
                onClick={() => setCurrentView('overview')}
                className="flex-1 group bg-[rgb(255,255,255)] text-[rgb(0,0,0)] border-[4px] border-[rgb(0,0,0)] py-4 font-black text-lg md:text-xl hand-drawn flex items-center justify-center gap-3 hover:-translate-y-1 hover:bg-[rgb(0,255,255)] hover:shadow-[6px_6px_0_rgb(0,0,0)] transition-all"
              >
                <ArrowLeft size={24} className="group-hover:-translate-x-2 transition-transform" strokeWidth={3} />
                [ 返回实习经历首页 ]
              </button>
              
              <button 
                onClick={() => setCurrentView('baidu')}
                className="flex-1 group bg-[rgb(0,255,0)] text-[rgb(0,0,0)] border-[4px] border-[rgb(0,0,0)] py-4 font-black text-lg md:text-xl hand-drawn-alt flex items-center justify-center gap-3 hover:-translate-y-1 hover:bg-[rgb(255,255,255)] hover:shadow-[6px_6px_0_rgb(0,0,0)] transition-all"
              >
                📥 [ 切换至百度实习 ]
                <CornerUpLeft size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Internships;