import React from 'react';
import { Download, MonitorPlay, Sparkles } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center pt-8 md:pt-16 pb-24 relative">
      
      {/* 
        =======================================================
        核心模块 1：基础信息（高亮展示屏）
        =======================================================
      */}
      <div 
        className="relative w-full max-w-5xl mb-24 animate-float"
        style={{ "--tw-rotate": "1deg" } as React.CSSProperties}
      >
        {/* 背景动态缠绕线 */}
        <svg className="absolute inset-0 w-[110%] h-[120%] -left-[5%] -top-[10%] pointer-events-none z-10 overflow-visible">
          <path 
            d="M 20,40 Q 50,10 500,20 T 980,50 Q 1000,150 980,300 T 500,380 Q 20,400 10,200 T 20,40 Z" 
            fill="none" 
            stroke="rgb(255,0,255)" 
            strokeWidth="16" 
            className="animate-doodle"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div 
          className="w-full bg-[rgb(255,234,0)] border-[8px] border-[rgb(0,0,0)] p-4 md:p-8 shadow-custom hand-drawn transition-transform hover:scale-[1.01]"
          style={{ "--shadow-x": "20px", "--shadow-y": "20px", "--shadow-color": "rgb(0,0,0)" } as React.CSSProperties}
        >
          {/* 内屏：蓝底终端 */}
          <div className="w-full bg-[rgb(0,0,255)] border-[6px] border-[rgb(0,0,0)] p-6 md:p-12 text-[rgb(255,255,255)] shadow-inner relative overflow-hidden hand-drawn-alt">
            
            <div className="absolute top-8 right-8 w-24 h-6 border-4 border-[rgb(0,0,0)] bg-[rgb(255,255,255)] -rotate-6 animate-wiggle"></div>
            
            <h1 className="text-3xl lg:text-5xl font-black mb-10 tracking-tight leading-tight flex flex-col items-start gap-4">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                <span>Zoey Li 李奕羡 </span>
                <span className="inline-block mt-4 md:mt-0 font-black ml-0 md:ml-6 text-[rgb(0,0,0)] bg-[rgb(0,255,0)] px-5 py-2 border-[5px] border-[rgb(0,0,0)] transform rotate-[-4deg] hover:animate-wiggle cursor-crosshair hand-drawn text-2xl lg:text-4xl shadow-[6px_6px_0_rgb(255,0,255)]">
                  | AI产品经理
                </span>
              </div>
            </h1>

            {/* 严格要求的基础信息展示段落 */}
            <div className="font-mono text-base lg:text-xl font-bold tracking-wide space-y-10 mt-12">
              <div className="hover:translate-x-2 transition-transform cursor-crosshair group flex items-start">
                <span className="text-[rgb(255,0,255)] text-2xl md:text-3xl mr-4 flex-shrink-0">{"//"}</span>
                <p className="leading-relaxed">
                  <span className="text-[rgb(255,234,0)] mr-2">基础信息：</span>
                  211辽大市场营销硕士 | 182-4026-2776 | liyixian2002@126.com
                </p>
              </div>

              <div className="hover:translate-x-2 transition-transform cursor-crosshair group flex items-start">
                <span className="text-[rgb(0,255,0)] text-2xl md:text-3xl mr-4 flex-shrink-0">{"//"}</span>
                <p className="leading-relaxed">
                  <span className="text-[rgb(255,234,0)] mr-2">核心经历：</span>
                  AIGC内容自动化生产产线 | 视觉模型评测 | AI原生视频效果策略优化 | 全网粉丝10w+自媒体博主
                </p>
              </div>

              <div className="hover:translate-x-2 transition-transform cursor-crosshair group flex items-start pb-4">
                <span className="text-[rgb(0,255,255)] text-2xl md:text-3xl mr-4 flex-shrink-0">{"//"}</span>
                <p className="leading-relaxed">
                  <span className="text-[rgb(255,234,0)] mr-2">个人信条：</span>
                  热爱探索AI产品，敢想敢做，以强行动力落地AI产品化实践
                  <span className="inline-block w-5 h-7 bg-[rgb(255,255,255)] ml-3 animate-blink align-middle shadow-[2px_2px_0_rgb(0,0,0)]"></span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =======================================================
        骨架核心 2：底部三大导航卡片（手账贴纸风格，强动画交互）
        =======================================================
      */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-10 justify-center relative z-20">
        
        {/* 卡片 1: 简历PDF（点击即可下载 PDF 文件） */}
        <a
          href="/1.pdf"
          target="_blank"
          download="李奕羡-AI产品经理.pdf"
          className="group relative bg-[rgb(255,0,255)] border-[6px] border-[rgb(0,0,0)] p-8 shadow-custom hand-drawn animate-float hover:scale-105 transition-all text-left flex flex-col justify-between overflow-hidden"
          style={{ "--shadow-x": "12px", "--shadow-y": "12px", "--tw-rotate": "-3deg", animationDelay: "0s" } as React.CSSProperties}
        >
          <div className="absolute -right-6 -top-6 bg-[rgb(255,255,255)] w-20 h-20 border-[6px] border-[rgb(0,0,0)] rounded-full group-hover:scale-150 transition-transform duration-500 opacity-20"></div>
          
          <div className="flex flex-col h-full pl-2 relative z-10">
            <h3 className="text-3xl font-black text-[rgb(0,0,0)] tracking-tighter mb-10 leading-[1.2]">
              一键下载 <br /> 简历 PDF
            </h3>
            
            <div className="flex items-end justify-between mt-auto">
              <span className="text-xs lg:text-sm font-bold bg-[rgb(0,0,0)] text-[rgb(255,255,255)] px-3 py-1 hand-drawn-alt transform rotate-2">
                （李奕羡-AI产品经理）
              </span>
              <div className="bg-[rgb(255,234,0)] p-4 border-[5px] border-[rgb(0,0,0)] rounded-full transform group-hover:-translate-y-4 group-hover:rotate-[360deg] transition-all duration-500 shadow-[4px_4px_0_rgb(0,0,0)]">
                <Download size={32} className="text-[rgb(0,0,0)]" strokeWidth={3} />
              </div> 
            </div>
          </div>
        </a>

        {/* 卡片 2: 视频作品集（跳转到小红书链接） */}
        <a
          href="https://xhslink.com/m/dbetPtVbQ"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[rgb(0,255,255)] border-[6px] border-[rgb(0,0,0)] p-8 shadow-custom hand-drawn-alt animate-float-reverse hover:scale-105 hover:bg-[rgb(255,255,255)] transition-colors text-left flex flex-col justify-between"
          style={{ "--shadow-x": "12px", "--shadow-y": "12px", "--tw-rotate": "2deg", animationDelay: "0.5s", marginTop: "20px" } as React.CSSProperties}
        >
          {/* 胶带装饰 */}
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-32 h-10 bg-[rgba(0,0,0,0.9)] rotate-[4deg] hand-drawn z-20 shadow-[2px_2px_0_rgb(255,0,255)]"></div>

          <div className="flex flex-col h-full z-10 pt-6">
            <h3 className="text-3xl font-black text-[rgb(0,0,0)] tracking-tighter leading-[1.2] mb-8">
              查看 AI 原生 <br /> 视频作品集
            </h3>
            
            <div className="flex items-end justify-between border-t-[5px] border-[rgb(0,0,0)] border-dashed pt-6 mt-auto">
              <span className="text-xs lg:text-sm font-black text-[rgb(0,0,0)] flex items-center bg-[rgb(255,234,0)] border-[3px] border-[rgb(0,0,0)] px-3 py-1 hand-drawn">
                <span className="inline-block w-3 h-3 rounded-full bg-[rgb(255,0,255)] animate-ping mr-2"></span> VIDEO ARCHIVE
              </span>
              <div className="bg-[rgb(0,255,0)] p-4 border-[5px] border-[rgb(0,0,0)] transform group-hover:scale-125 transition-all hand-drawn shadow-[4px_4px_0_rgb(0,0,0)]">
                <MonitorPlay size={32} className="text-[rgb(0,0,0)]" strokeWidth={3} />
              </div>
            </div>
          </div>
        </a>

        {/* 卡片 3: 自媒体账号（跳转到抖音主页） */}
        <a
          href="https://v.douyin.com/nuZU6hT6_-g/"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative bg-[rgb(255,234,0)] border-[6px] border-[rgb(0,0,0)] p-8 shadow-custom hand-drawn animate-float hover:scale-105 transition-all text-left flex flex-col justify-between"
          style={{ "--shadow-x": "12px", "--shadow-y": "12px", "--tw-rotate": "-1deg", animationDelay: "0.2s" } as React.CSSProperties}
        >
          {/* FANS 强标签 */}
          <div className="absolute right-[-16px] top-4 bg-[rgb(255,0,0)] text-[rgb(255,255,255)] font-black text-xl px-4 py-2 border-[4px] border-[rgb(0,0,0)] rotate-[15deg] z-20 group-hover:animate-wiggle shadow-[4px_4px_0_rgb(0,0,0)]">
            FANS 10W+
          </div>

          <div className="flex flex-col h-full">
            <h3 className="text-3xl font-black text-[rgb(0,0,0)] tracking-tighter leading-[1.2] mb-10">
              查看个人 <br /> 自媒体账号
            </h3>
            
            <div className="flex items-end justify-between mt-auto">
              <span className="text-xs lg:text-sm font-black text-[rgb(0,0,0)] bg-[rgb(255,255,255)] px-3 py-1 border-[4px] border-[rgb(0,0,0)] transform -rotate-3 hand-drawn-alt shadow-[3px_3px_0_rgb(0,255,255)]">
                CHECK IT OUT
              </span>
              <div className="bg-[rgb(255,0,255)] p-4 border-[5px] border-[rgb(0,0,0)] rounded-full group-hover:bg-[rgb(0,255,255)] transition-colors duration-300 shadow-[4px_4px_0_rgb(0,0,0)]">
                <Sparkles size={32} className="text-[rgb(255,255,255)] group-hover:text-[rgb(0,0,0)]" strokeWidth={3} />
              </div>
            </div>
          </div>
        </a>

      </div>

    </div>
  );
};

export default Home;