
import React from 'react';

const FeatureCards: React.FC = () => {
    return (
        <section className="mt-20 lg:mt-32 pb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                {/* Card 1: 2.4M+ */}
                <div className="lg:col-span-1 md:col-span-1 bg-[#0B1229] rounded-3xl p-8 flex flex-col justify-between">
                    <div>
                        <p className="text-5xl lg:text-6xl font-bold text-white">2.4M+</p>
                        <p className="text-lg text-gray-300 mt-2">Keywords tracked and optimized daily.</p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                        <p className="text-lg font-medium text-white">Start a chat with Growth AI</p>
                        <div className="bg-cyan-400 text-sm text-[#0B1229] font-bold py-1 px-2 rounded-md">+8% MoM</div>
                    </div>
                </div>

                {/* Card 2: SEO Tasks */}
                <div className="lg:col-span-2 md:col-span-1 bg-[#2563EB] rounded-3xl p-8 relative overflow-hidden">
                   <div className="absolute inset-0 bg-no-repeat bg-cover opacity-10" style={{backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 800'%3e%3cg stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.5'%3e%3cpath d='M-400 0C-400 220.9-220.9 400 0 400S400 220.9 400 0 220.9-400 0-400-400-220.9-400 0z'/%3e%3cpath d='M1200 0C1200 220.9 1379.1 400 1600 400S2000 220.9 2000 0 1820.9-400 1600-400s-400 179.1-400 400z'/%3e%3cpath d='M-400 800C-400 579.1-220.9 400 0 400S400 579.1 400 800 220.9 1200 0 1200-400 1020.9-400 800z'/%3e%3cpath d='M1200 800C1200 579.1 1379.1 400 1600 400S2000 579.1 2000 800 1820.9 1200 1600 1200s-400-179.1-400-400z'/%3e%3c/g%3e%3c/svg%3e\")"}}></div>
                    <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-4 text-white">
                        <div className="bg-white/20 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold">✅ Checklist task</div>
                        <div className="bg-white/20 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold">📝 Write a blog post</div>
                        <div className="bg-white/20 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold">📈 Campaign</div>
                        <div className="bg-white/20 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold">💡 Generate ideas</div>
                        <div className="bg-white/20 p-3 rounded-xl flex items-center gap-2 text-sm font-semibold">🎯 Strategy</div>
                    </div>
                </div>

                {/* Card 3: Suggestion */}
                <div className="lg:col-span-2 bg-blue-50 rounded-3xl p-8">
                     <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-blue-200 rounded-full flex items-center justify-center shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-1.707 1.707A1 1 0 003 15v1a1 1 0 001 1h12a1 1 0 001-1v-1a1 1 0 00-.293-.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-bold text-gray-800">Growth AI Suggestion</p>
                            <p className="text-gray-600 mt-1">"Homepage meta description is missing. Adding one can improve click-through rates from search results."</p>
                            <button className="mt-4 px-4 py-1.5 bg-[#0B1229] text-white text-sm font-semibold rounded-full hover:bg-black transition-colors">Update</button>
                        </div>
                    </div>
                </div>

                {/* Card 4: Benefits */}
                <div className="lg:col-span-1 grid grid-cols-2 gap-4">
                    <BenefitCard icon="cost" title="Higher Rankings" />
                    <BenefitCard icon="ux" title="More Traffic" />
                    <BenefitCard icon="support" title="24/7 Monitoring" />
                    <BenefitCard icon="safety" title="Data-driven Insights" />
                </div>
            </div>
        </section>
    );
};


const BenefitIcon: React.FC<{ icon: string }> = ({ icon }) => {
  // Fix: Changed JSX.Element to React.ReactElement to resolve the "Cannot find namespace 'JSX'" error.
  const icons: { [key: string]: React.ReactElement } = {
    cost: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
    ux: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" /></svg>,
    support: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    safety: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  };

  const colors: { [key: string]: string } = {
    cost: 'text-blue-500 bg-blue-100',
    ux: 'text-cyan-500 bg-cyan-100',
    support: 'text-orange-500 bg-orange-100',
    safety: 'text-green-500 bg-green-100',
  }

  return <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colors[icon]}`}>{icons[icon]}</div>;
}


const BenefitCard: React.FC<{ icon: string, title: string }> = ({ icon, title }) => (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 flex flex-col justify-start items-start gap-2 border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow">
        <BenefitIcon icon={icon} />
        <p className="text-sm font-semibold text-gray-800">{title}</p>
    </div>
);


export default FeatureCards;
