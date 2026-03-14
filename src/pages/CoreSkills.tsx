import React from 'react';

const CoreSkills: React.FC = () => {
  return (
    <div className="w-full flex-col pt-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-4 border-l-4 border-blue-500 pl-4">核心能力模块 (待更新)</h2>
      <p className="text-gray-400">目前这里是骨架区域，等您提供批次内容后，将为您在此渲染相关能力详细看板。</p>
      
      {/* Placeholder Skeleton UI */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-30 pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-48 bg-white/[0.02] border border-white/[0.05] rounded-xl p-6">
            <div className="w-1/3 h-6 bg-white/10 rounded mb-4"></div>
            <div className="w-full h-3 bg-white/5 rounded mb-2"></div>
            <div className="w-4/5 h-3 bg-white/5 rounded mb-2"></div>
            <div className="w-2/3 h-3 bg-white/5 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreSkills;