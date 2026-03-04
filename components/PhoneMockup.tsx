
import React from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const gscData = [
  { date: 'Jul 1', clicks: 1200 },
  { date: 'Jul 8', clicks: 1800 },
  { date: 'Jul 15', clicks: 1500 },
  { date: 'Jul 22', clicks: 2200 },
  { date: 'Jul 29', clicks: 2500 },
  { date: 'Aug 5', clicks: 3100 },
  { date: 'Aug 12', clicks: 3500 },
];

const MetricCard: React.FC<{ title: string, value: string, change: string, changeType: 'up' | 'down' }> = ({ title, value, change, changeType }) => (
    <div className="p-2 rounded-lg bg-gray-50">
        <p className="text-[10px] text-gray-500">{title}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
        <p className={`text-[10px] font-semibold ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>{change}</p>
    </div>
);

const PhoneMockup: React.FC = () => {
  return (
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[10px] rounded-[2.5rem] h-[450px] w-[220px] sm:h-[550px] sm:w-[270px] shadow-xl">
        <div className="w-[4px] h-[30px] bg-gray-800 absolute -left-[12px] top-[70px] rounded-l-lg"></div>
        <div className="w-[4px] h-[40px] bg-gray-800 absolute -left-[12px] top-[110px] rounded-l-lg"></div>
        <div className="w-[4px] h-[50px] bg-gray-800 absolute -right-[12px] top-[100px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white">
            <div className="w-full h-full bg-white p-2 text-[10px] sm:text-xs">
                {/* Header */}
                <div className="flex justify-between items-center text-gray-500 text-[8px] sm:text-[10px] px-1">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                </div>

                {/* GSC UI */}
                <div className="mt-2 flex items-center gap-1">
                   <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[8px]">G</div>
                   <p className="text-gray-800 font-bold text-[10px]">Search Console</p>
                </div>

                <div className="mt-2 border-b-2 border-blue-600 w-1/2 pb-1">
                    <p className="font-semibold text-blue-600">Performance</p>
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2">
                    <MetricCard title="Total clicks" value="12.1K" change="+1.2K" changeType="up"/>
                    <MetricCard title="Total impressions" value="340K" change="+15K" changeType="up"/>
                    <MetricCard title="Average CTR" value="3.6%" change="+0.2%" changeType="up"/>
                    <MetricCard title="Average position" value="8.4" change="-0.5" changeType="up"/>
                </div>

                <div className="mt-3 h-[80px] sm:h-[120px]">
                    <ResponsiveContainer width="100%" height="100%" minWidth={0}>
                       <AreaChart data={gscData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8}/>
                                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                                </linearGradient>
                            </defs>
                            <Tooltip contentStyle={{ fontSize: '10px', padding: '2px 5px', borderRadius: '4px' }} />
                            <XAxis dataKey="date" tick={{fontSize: 8}} tickLine={false} axisLine={false} />
                            <YAxis tick={{fontSize: 8}} tickLine={false} axisLine={false} domain={['dataMin - 500', 'dataMax + 500']} hide={true} />
                            <Area type="monotone" dataKey="clicks" stroke="#2563eb" fillOpacity={1} fill="url(#colorClicks)" strokeWidth={2}/>
                       </AreaChart>
                    </ResponsiveContainer>
                </div>
                
                <div className="mt-2">
                  <p className="font-semibold text-gray-700">Top queries</p>
                  <div className="space-y-1 mt-1 text-[9px] sm:text-[11px] text-gray-600">
                    <p>ai seo tools</p>
                    <p>website growth hacks</p>
                    <p>best ai for marketing</p>
                    <p>increase website traffic</p>
                  </div>
                </div>

            </div>
        </div>
    </div>
  );
};

export default PhoneMockup;
