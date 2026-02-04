import AdminLayout from './layout';
import { 
  HeartHandshake, 
  Wallet, 
  CalendarCheck, 
  FileText,
  TrendingUp,
  Users,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'wouter';

export default function AdminDashboard() {
  const stats = [
    { label: 'Total Donations', value: '£4,250', icon: HeartHandshake, trend: '+12.5%', color: 'text-emerald-400' },
    { label: 'Active Bookings', value: '18', icon: CalendarCheck, trend: '+3 new', color: 'text-mustard' },
    { label: 'Total Donors', value: '84', icon: Users, trend: '+8 this month', color: 'text-blue-400' },
    { label: 'Published Articles', value: '12', icon: FileText, trend: '2 drafts', color: 'text-purple-400' },
  ];

  const quickLinks = [
    { label: 'View Donations', href: '/admin/donations', description: 'Track contributions and donors', icon: HeartHandshake },
    { label: 'Manage Bookings', href: '/admin/bookings', description: 'Confirm or cancel service bookings', icon: CalendarCheck },
    { label: 'Write Insight', href: '/admin/cms', description: 'Create new blog articles', icon: FileText },
    { label: 'Finance Report', href: '/admin/finance', description: 'Download monthly summaries', icon: Wallet },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 shadow-xl hover:border-mustard/20 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-mustard/10 transition-colors">
                  <stat.icon className="w-6 h-6 text-mustard" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full bg-white/5 ${stat.color}`}>
                  {stat.trend}
                </span>
              </div>
              <h3 className="text-gray-400 text-sm font-sans mb-1">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-serif">Quick Actions</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {quickLinks.map((link, i) => (
                <Link key={i} href={link.href}>
                  <div className="bg-[#1A1A1A] p-6 rounded-2xl border border-white/5 hover:border-mustard/40 transition-all cursor-pointer group flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-mustard group-hover:text-charcoal transition-all">
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold group-hover:text-mustard transition-colors">{link.label}</h4>
                      <p className="text-sm text-gray-400">{link.description}</p>
                    </div>
                    <ArrowUpRight className="ml-auto w-4 h-4 text-gray-600 group-hover:text-mustard" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Recent Activity Mockup */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif">Recent Activity</h3>
            <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden">
              {[
                { user: 'Sarah J.', action: 'donated £50', time: '2h ago' },
                { user: 'Mike K.', action: 'booked Education Guidance', time: '5h ago' },
                { user: 'Elena R.', action: 'donated £100 (Monthly)', time: 'Yesterday' },
                { user: 'Staff', action: 'published new article', time: 'Yesterday' },
              ].map((activity, i) => (
                <div key={i} className="p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                  <p className="text-sm">
                    <span className="font-bold text-mustard">{activity.user}</span>{' '}
                    <span className="text-gray-300">{activity.action}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              ))}
              <div className="p-4 bg-white/5 text-center">
                <button className="text-xs text-mustard hover:underline">View All Activity</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
