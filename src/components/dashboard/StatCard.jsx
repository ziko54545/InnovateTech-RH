import React from 'react';

const StatCard = ({ title, value, icon: Icon, trend, color = 'blue' }) => {

    const colorStyles = {
        cyan: 'from-cyan-500/10 to-blue-500/10 text-cyan-400 border-cyan-500/20',
        blue: 'from-blue-500/10 to-indigo-500/10 text-blue-400 border-blue-500/20',
        purple: 'from-purple-500/10 to-fuchsia-500/10 text-purple-400 border-purple-500/20',
        pink: 'from-pink-500/10 to-rose-500/10 text-pink-400 border-pink-500/20',
    };

    const selectedStyle = colorStyles[color] || colorStyles.blue;

    return (
        <div className="bg-[#0f172a] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-white/10 transition-all group">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">{title}</h3>
                    <div className="text-2xl font-bold text-white">{value}</div>
                </div>
                <div className={`p-3 rounded-xl bg-gradient-to-br ${selectedStyle} border`}>
                    <Icon className="w-5 h-5" />
                </div>
            </div>
            {trend && (
                <div className="flex items-center gap-2 text-xs">
                    <span className="text-green-400 font-medium bg-green-400/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                        {trend}
                    </span>
                    <span className="text-slate-500">vs période préc.</span>
                </div>
            )}
        </div>
    );
};

export default StatCard;
