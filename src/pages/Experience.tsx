import React from 'react';

const Experience: React.FC = () => {
  return (
    <div className="w-full flex-col pt-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-4 border-l-4 border-emerald-500 pl-4">核心经历：AI+科研 (待更新)</h2>
      <p className="text-gray-400">目前这里是经历区域骨架，您的全职实习等具体工作经历将落地在此处。</p>
      
      {/* Placeholder Timeline Skeleton */}
      <div className="mt-12 space-y-8 opacity-30 pointer-events-none max-w-3xl border-l-[1px] border-white/20 pl-8 ml-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="relative">
            <div className="absolute w-3 h-3 bg-white/30 rounded-full -left-[38px] top-2"></div>
            <div className="h-6 w-48 bg-white/10 rounded mb-2"></div>
            <div className="h-4 w-32 bg-white/5 rounded mb-4"></div>
            <div className="h-20 w-full bg-white/[0.02] border border-white/[0.05] rounded-xl"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;