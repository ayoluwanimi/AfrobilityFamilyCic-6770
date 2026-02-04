import AdminLayout from './layout';
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  CreditCard,
  Target,
  ArrowUpRight,
  PieChart as PieChartIcon
} from 'lucide-react';

export default function FinancialSummary() {
  const kpis = [
    { label: 'Raised This Month', value: '£1,450.00', trend: '+18%', icon: DollarSign, color: 'text-emerald-400' },
    { label: 'Annual Donations', value: '£12,240.00', trend: '+4.2%', icon: Target, color: 'text-mustard' },
    { label: 'Total Donors', value: '142', trend: '+12', icon: Users, color: 'text-blue-400' },
    { label: 'Avg. Donation', value: '£42.50', trend: '-2%', icon: CreditCard, color: 'text-purple-400' },
  ];

  const monthlyData = [
    { month: 'Jan', amount: 800 },
    { month: 'Feb', amount: 1200 },
    { month: 'Mar', amount: 950 },
    { month: 'Apr', amount: 1100 },
    { month: 'May', amount: 1450 },
  ];

  const maxAmount = Math.max(...monthlyData.map(d => d.amount));

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h2 className="text-2xl font-serif">Financial Summary</h2>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, i) => (
            <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 shadow-xl relative overflow-hidden group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-mustard/10 transition-colors">
                  <kpi.icon className={`w-6 h-6 ${kpi.color}`} />
                </div>
                <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                  kpi.trend.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-destructive/10 text-destructive'
                }`}>
                  {kpi.trend.startsWith('+') ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {kpi.trend}
                </div>
              </div>
              <h3 className="text-gray-400 text-sm font-sans mb-1">{kpi.label}</h3>
              <p className="text-3xl font-bold">{kpi.value}</p>
              
              {/* Subtle background decoration */}
              <div className="absolute -right-4 -bottom-4 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity">
                <kpi.icon className="w-24 h-24" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donation Trends Bar Chart */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 shadow-xl">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-xl font-serif">Donation Trends</h3>
                <p className="text-sm text-gray-500">Monthly revenue growth (2025)</p>
              </div>
              <select className="bg-charcoal border border-white/10 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-mustard">
                <option>Last 6 Months</option>
                <option>Last Year</option>
              </select>
            </div>

            <div className="flex items-end justify-between h-64 gap-4">
              {monthlyData.map((data, i) => {
                const height = (data.amount / maxAmount) * 100;
                return (
                  <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                    <div className="w-full relative flex flex-col justify-end h-full">
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-mustard text-charcoal px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                        £{data.amount}
                      </div>
                      <div 
                        className="w-full bg-white/5 group-hover:bg-mustard transition-all duration-500 rounded-t-lg origin-bottom relative"
                        style={{ height: `${height}%` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-white transition-colors">{data.month}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Breakdown by Frequency */}
          <div className="bg-[#1A1A1A] p-8 rounded-2xl border border-white/5 shadow-xl">
            <h3 className="text-xl font-serif mb-2">Breakdown by Frequency</h3>
            <p className="text-sm text-gray-500 mb-8">One-time vs Recurring donations</p>

            <div className="flex flex-col items-center justify-center py-4">
              {/* Mock Donut Chart */}
              <div className="relative w-48 h-48 mb-8">
                <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#2A2A2A"
                    strokeWidth="4"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#E49B0F"
                    strokeWidth="4"
                    strokeDasharray="65 35"
                    strokeDashoffset="0"
                    className="animate-[dash_2s_ease-in-out_forwards]"
                  ></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="15.915"
                    fill="transparent"
                    stroke="#3B82F6"
                    strokeWidth="4"
                    strokeDasharray="35 65"
                    strokeDashoffset="-65"
                    className="animate-[dash_2s_ease-in-out_forwards]"
                  ></circle>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold">84%</span>
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Retention</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 w-full max-w-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-3 h-3 rounded-full bg-mustard"></div>
                    One-time (65%)
                  </div>
                  <p className="text-xl pl-5 font-bold">£7,956</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    Monthly (35%)
                  </div>
                  <p className="text-xl pl-5 font-bold">£4,284</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
