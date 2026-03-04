
import React from 'react';
import PhoneMockup from './PhoneMockup';
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts';

const data = [
    { name: 'Jan', ctr: 2.1 },
    { name: 'Feb', ctr: 2.5 },
    { name: 'Mar', ctr: 2.3 },
    { name: 'Apr', ctr: 3.1 },
    { name: 'May', ctr: 3.8 },
    { name: 'Jun', ctr: 4.2 },
];

const Hero: React.FC = () => {
    return (
        <section className="relative mt-16 lg:mt-24">
            <div className="absolute top-0 left-0 w-full h-full bg-grid-gray-200/[0.5] [mask-image:linear-gradient(to_bottom,white_5%,transparent_90%)] -z-10"></div>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="text-center lg:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#0B1229] tracking-tighter">
                            Unlock Your Website's Potential
                            <span className="relative inline-block">
                                <span className="absolute inset-0 bg-cyan-200 -z-10 transform -skew-x-6"></span>
                                <span className="relative"> with AI-Powered SEO</span>
                            </span>
                        </h1>
                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 text-base md:text-lg">
                            Drive organic traffic, improve search rankings, and convert visitors into customers with our cutting-edge AI technology.
                        </p>
                        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 max-w-lg mx-auto lg:mx-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:flex-grow px-5 py-3.5 bg-white border border-gray-300 rounded-full focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-shadow"
                            />
                            <button
                                type="submit"
                                className="w-full sm:w-auto px-8 py-3.5 bg-[#0B1229] text-white font-semibold rounded-full hover:bg-black transition-colors shrink-0"
                            >
                                Get Started
                            </button>
                        </form>
                        <p className="mt-4 text-xs text-gray-500 flex items-center justify-center lg:justify-start gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm10 5H4v8h12V7z" clipRule="evenodd" />
                            </svg>
                            30 day free trial, no credit card required.
                        </p>
                    </div>

                    <div className="relative flex items-center justify-center h-[500px] lg:h-[600px]">
                        <div className="relative z-10">
                           <PhoneMockup />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-[5%] right-[0%] lg:-right-[5%] z-20 w-52 p-4 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50">
                            <p className="text-3xl font-bold">🏆 #1</p>
                            <p className="text-sm text-gray-700 mt-1">AI Platform for SEO Growth</p>
                        </div>

                        <div className="absolute bottom-[20%] -left-[10%] lg:-left-[20%] z-0 w-48 p-4 bg-[#0B1229]/80 backdrop-blur-lg rounded-2xl shadow-lg text-white">
                            <div className="flex items-center gap-2 text-sm text-gray-300">
                               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" /></svg>
                                CTR Increase
                            </div>
                            <div className="text-4xl font-bold my-2">
                                <span className="text-cyan-300">+</span>1.5<span className="text-2xl">%</span>
                            </div>
                            <div className="h-12 -ml-4">
                               <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                                    <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                                        <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} hide={true} />
                                        <Tooltip contentStyle={{ backgroundColor: '#0B1229', border: 'none', color: 'white', fontSize: '12px', padding: '4px 8px', borderRadius: '8px' }} itemStyle={{color: '#67e8f9'}} />
                                        <Line type="monotone" dataKey="ctr" stroke="#67e8f9" strokeWidth={2} dot={false} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        <div className="absolute bottom-[5%] right-[0%] lg:-right-[10%] z-20 w-60 p-4 bg-white/60 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 flex flex-col items-center">
                            <div className="flex -space-x-2">
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1011/50/50" alt="user"/>
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1025/50/50" alt="user"/>
                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://picsum.photos/id/1028/50/50" alt="user"/>
                            </div>
                            <p className="text-xl font-bold mt-2">10K+</p>
                            <p className="text-sm text-gray-600">WEBSITES OPTIMIZED</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
