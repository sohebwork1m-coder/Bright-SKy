
import React, { useState, useEffect, useRef } from 'react';
import { AreaChart, Area, ResponsiveContainer, Tooltip, Dot } from 'recharts';

const testimonialsData = [
  {
    companyName: 'Bimal Institute',
    rating: 5,
    workingSince: 2021,
    totalGrowth: 120,
    quote: "Street Investment transformed our online presence. Our organic leads have more than doubled in just 90 days, and their transparency is unmatched.",
    author: 'Rajesh Kumar, Bimal Institute',
    graphData: [ { v: 10 }, { v: 25 }, { v: 22 }, { v: 45 }, { v: 40 }, { v: 60 }, { v: 75 }, { v: 95 }, { v: 120 } ],
  },
  {
    companyName: 'Fusion Dynamics',
    rating: 5,
    workingSince: 2020,
    totalGrowth: 95,
    quote: "The insights from Growth AI are game-changing. We've been able to pivot our content strategy effectively, resulting in a 95% increase in organic traffic.",
    author: 'Maria Garcia, Fusion Dynamics',
    graphData: [ { v: 5 }, { v: 15 }, { v: 30 }, { v: 25 }, { v: 50 }, { v: 65 }, { v: 70 }, { v: 85 }, { v: 95 } ],
  },
  {
    companyName: 'Innovatech Solutions',
    rating: 4.5,
    workingSince: 2022,
    totalGrowth: 150,
    quote: "Working with Growth AI feels like having an in-house SEO team on steroids. The platform is intuitive, and the results speak for themselves.",
    author: 'David Chen, Innovatech Solutions',
    graphData: [ { v: 20 }, { v: 30 }, { v: 50 }, { v: 65 }, { v: 90 }, { v: 100 }, { v: 115 }, { v: 130 }, { v: 150 } ],
  },
    {
    companyName: 'Quantum Leap Co.',
    rating: 5,
    workingSince: 2019,
    totalGrowth: 88,
    quote: "Our search rankings have consistently improved since we started. The automated reports and suggestions save us hours of manual work every week.",
    author: 'Sophia Carter, Quantum Leap Co.',
    graphData: [ { v: 12 }, { v: 10 }, { v: 28 }, { v: 35 }, { v: 48 }, { v: 55 }, { v: 70 }, { v: 80 }, { v: 88 } ],
  },
];

const StarRating = ({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) => {
  const stars = [];
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  const starPath = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";
  
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<svg key={i} className={`${sizeClasses[size]} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20"><path d={starPath} /></svg>);
    } else if (i > rating && i < rating + 1) {
       stars.push(
         <div key={i} className="relative">
            <svg className={`${sizeClasses[size]} text-gray-300`} fill="currentColor" viewBox="0 0 20 20"><path d={starPath} /></svg>
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${(rating % 1) * 100}%` }}>
                <svg className={`${sizeClasses[size]} text-yellow-400`} fill="currentColor" viewBox="0 0 20 20"><path d={starPath} /></svg>
            </div>
        </div>
       );
    } else {
      stars.push(<svg key={i} className={`${sizeClasses[size]} text-gray-300`} fill="currentColor" viewBox="0 0 20 20"><path d={starPath} /></svg>);
    }
  }
  return <div className="flex items-center">{stars}</div>;
};

const CustomTooltip = ({ active, payload }: { active?: boolean, payload?: any[] }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white p-2 rounded-md shadow-lg border border-gray-200">
                <p className="font-bold text-blue-700">{`+${payload[0].value}% Growth`}</p>
            </div>
        );
    }
    return null;
};


const TestimonialCard = ({ data }: { data: any }) => (
    <div className="bg-white rounded-[2rem] p-6 sm:p-8 border border-gray-200/60 shadow-2xl shadow-blue-300/15 text-[#0B1229]">
        <h3 className="text-3xl sm:text-4xl font-bold text-center text-[#0B1229]">{data.companyName}</h3>
        
        <div className="flex flex-col sm:flex-row items-center justify-center flex-wrap gap-3 mt-6 text-sm text-gray-700">
            <div className="bg-gray-50/80 rounded-xl py-2.5 px-4 shadow-sm border border-gray-200/60 flex items-center gap-2">
                <span>{data.rating}/5 Star Rating</span>
                <StarRating rating={data.rating} size="sm" />
            </div>
            <div className="bg-gray-50/80 rounded-xl py-2.5 px-4 shadow-sm border border-gray-200/60">
                <span>Working Since: {data.workingSince}</span>
            </div>
            <div className="bg-gray-50/80 rounded-xl py-2.5 px-4 shadow-sm border border-gray-200/60 flex items-center gap-1.5">
                <span className="text-green-600 font-semibold">+{data.totalGrowth}%</span>
                <span>Total Growth</span>
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                </svg>
            </div>
        </div>

        <blockquote className="mt-8">
            <p className="text-base text-gray-600 leading-relaxed text-center">"{data.quote}"</p>
            <cite className="block text-sm text-gray-500 mt-4 not-italic text-center">- {data.author}</cite>
        </blockquote>

        <div className="mt-6 h-32 sm:h-40">
            <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                <AreaChart data={data.graphData} margin={{ top: 10, right: 5, left: 5, bottom: 0 }}>
                     <defs>
                        <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#81c7f5" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#81c7f5" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <Tooltip 
                      content={<CustomTooltip />} 
                      cursor={{ stroke: '#0B1229', strokeWidth: 1, strokeDasharray: '3 3' }} 
                    />
                    <Area type="monotone" dataKey="v" stroke="#007bff" strokeWidth={2.5} fillOpacity={1} fill="url(#colorGrowth)" dot={<Dot r={0} />} activeDot={{ r: 5, stroke: '#fff', strokeWidth: 2, fill: '#007bff' }} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
        
        <div className="flex justify-center mt-6">
            <StarRating rating={data.rating} size="md" />
        </div>
    </div>
);


const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isPausedRef = useRef(false);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isPausedRef.current) {
                handleNext();
            }
        }, 4000); // Auto-scroll every 4 seconds

        return () => clearInterval(intervalId);
    }, []);


    return (
        <section className="mt-20 lg:mt-32 pb-10 overflow-hidden">
            <div className="text-center px-4">
                 <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1229] tracking-tighter">
                    What Our Clients Say
                 </h2>
                 <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
                    We help businesses like yours achieve remarkable growth. But don't just take our word for it.
                 </p>
            </div>
            
            <div className="relative mt-12 flex items-center justify-center h-[580px] sm:h-[550px]">
                {testimonialsData.map((testimonial, index) => {
                    const offset = index - currentIndex;
                    const totalItems = testimonialsData.length;
                    
                    let displayOffset = offset;
                    if (offset > totalItems / 2) { displayOffset = offset - totalItems; }
                    if (offset < -totalItems / 2) { displayOffset = offset + totalItems; }
                    
                    const isActive = index === currentIndex;
                    const isSide = Math.abs(displayOffset) === 1;
                    const isVisible = isActive || isSide;

                    const scale = isActive ? 1.0 : 0.85;
                    const opacity = isActive ? 1 : (isSide ? 0.65 : 0);
                    const filter = isActive ? 'blur(0px)' : 'blur(5px)';
                    const zIndex = isActive ? 10 : 5;
                    const pointerEvents = isVisible ? 'auto' : 'none';
                    const transform = `translateX(${displayOffset * 40}%) scale(${scale})`;

                    return (
                        <div
                            key={testimonial.companyName}
                            className="absolute w-full max-w-3xl transition-all duration-500 ease-out px-4 cursor-pointer"
                            style={{ transform, zIndex, opacity, filter, pointerEvents }}
                            onClick={() => setCurrentIndex(index)}
                            onMouseEnter={() => {
                                if (isActive) {
                                    isPausedRef.current = true;
                                }
                            }}
                            onMouseLeave={() => {
                                isPausedRef.current = false;
                            }}
                        >
                            <TestimonialCard data={testimonial} />
                        </div>
                    );
                })}
            </div>
            
             <div className="flex justify-center items-center gap-4 mt-0 sm:mt-2 relative z-50">
                <button onClick={handlePrev} className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/80 transition-colors" aria-label="Previous testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                </button>
                 <div className="flex items-center gap-2">
                    {testimonialsData.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-[#0B1229] w-4' : 'bg-gray-400'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>
                <button onClick={handleNext} className="p-3 rounded-full bg-white/50 backdrop-blur-sm shadow-lg hover:bg-white/80 transition-colors" aria-label="Next testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
        </section>
    );
};

export default Testimonials;
