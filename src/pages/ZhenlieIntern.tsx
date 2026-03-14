import React from 'react';

const ZhenlieIntern: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto pt-10 animate-in fade-in duration-500">
      <div 
        className="bg-[rgb(0,255,255)] border-[6px] border-[rgb(0,0,0)] p-8 rounded-2xl shadow-custom transform rotate-[-1deg] animate-float-reverse"
        style={{ "--shadow-x": "12px", "--shadow-y": "12px", "--tw-rotate": "-1deg" } as React.CSSProperties}
      >
        <h2 className="text-4xl font-black mb-6 uppercase text-[rgb(0,0,0)] border-b-[6px] border-[rgb(0,0,0)] pb-4 inline-block">
          阵列格物实习
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center p-12 bg-[rgb(255,255,255)] border-[4px] border-[rgb(0,0,0)] border-dashed rounded-xl pointer-events-none">
          <p className="text-2xl font-bold bg-[rgb(255,0,255)] text-[rgb(255,255,255)] px-4 py-2 border-[3px] border-[rgb(0,0,0)] rotate-[2deg] animate-float">
            [ 等待下批次内容注入 / PREPARING ]
          </p>
          <div className="mt-12 space-y-6 w-full opacity-40">
             <div className="h-8 bg-[rgb(0,0,0)] w-1/2 rounded"></div>
             <div className="h-24 bg-[rgb(0,0,0)] w-full rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZhenlieIntern;