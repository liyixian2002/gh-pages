import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="w-full flex-col pt-8 animate-in fade-in duration-500">
      <h2 className="text-3xl font-bold mb-4 border-l-4 border-purple-500 pl-4">联系求职 (待更新)</h2>
      <p className="text-gray-400">这里是联系方式与求职状态的拓展部分骨架。</p>
      
      <div className="mt-12 w-full max-w-2xl h-80 bg-white/[0.02] border border-white/[0.05] rounded-xl flex items-center justify-center opacity-30 pointer-events-none border-dashed">
        <span className="text-white/20 text-lg">Contact Form / Info Placeholder</span>
      </div>
    </div>
  );
};

export default Contact;