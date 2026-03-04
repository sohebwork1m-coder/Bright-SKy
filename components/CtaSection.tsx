
import React from 'react';

const CtaSection: React.FC = () => {
    return (
        <section className="mt-20 lg:mt-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative bg-[#0B1229] rounded-[2rem] p-8 sm:p-12 lg:p-16 overflow-hidden">
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-80 h-80 bg-blue-600/10 rounded-full filter blur-3xl"></div>
                    
                    <div className="relative text-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tighter">
                            Ready to Grow Your Business?
                        </h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-300 text-base md:text-lg">
                            Join thousands of successful businesses who use Growth AI to supercharge their SEO and dominate search rankings. Start your free trial today.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                type="button"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0B1229] font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                            >
                                Get Started Free
                            </button>
                            <button
                                type="button"
                                className="w-full sm:w-auto px-8 py-3.5 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors"
                            >
                                Talk to Sales
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
