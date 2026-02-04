import { ReactNode, useEffect } from 'react';
import { useLocation, Link } from 'wouter';
import { authClient } from '../../lib/auth';
import { 
  LayoutDashboard, 
  HeartHandshake, 
  Wallet, 
  CalendarCheck, 
  FileText, 
  LogOut,
  ChevronRight,
  Users
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location, setLocation] = useLocation();
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      setLocation('/sign-in');
    }
  }, [session, isPending, setLocation]);

  if (isPending) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mustard"></div>
      </div>
    );
  }

  if (!session) return null;

  const navItems = [
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/donations', label: 'Donation Tracker', icon: HeartHandshake },
    { href: '/admin/finance', label: 'Financial Summary', icon: Wallet },
    { href: '/admin/bookings', label: 'Bookings', icon: CalendarCheck },
    { href: '/admin/cms', label: 'Content CMS', icon: FileText },
    { href: '/admin/users', label: 'Staff Management', icon: Users },
  ];

  const handleLogout = async () => {
    await authClient.signOut();
    setLocation('/sign-in');
  };

  return (
    <div className="min-h-screen bg-charcoal text-white flex">
      {/* Sidebar */}
      <aside className="w-64 bg-[#1A1A1A] border-r border-white/5 flex flex-col fixed inset-y-0 shadow-xl z-20">
        <div className="p-6">
          <Link href="/">
            <h1 className="text-2xl font-serif text-mustard cursor-pointer">Afrobility</h1>
          </Link>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Admin Control</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => {
            const isActive = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <div className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all cursor-pointer group
                  ${isActive 
                    ? 'bg-mustard text-charcoal font-bold shadow-lg shadow-mustard/10' 
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'}
                `}>
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-charcoal' : 'group-hover:text-mustard'}`} />
                  <span>{item.label}</span>
                  {isActive && <ChevronRight className="ml-auto w-4 h-4" />}
                </div>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 rounded-xl w-full text-gray-400 hover:bg-destructive/10 hover:text-destructive transition-all group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-serif">Welcome back, {session.user.name.split(' ')[0]}</h2>
            <p className="text-gray-400">Managing Afrobility Family CIC</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-full border border-white/5 text-sm text-gray-400">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
            <div className="w-10 h-10 rounded-full bg-mustard flex items-center justify-center text-charcoal font-bold shadow-lg shadow-mustard/20">
              {session.user.name.charAt(0)}
            </div>
          </div>
        </header>

        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
