import { ReactNode, useEffect, useState } from 'react';
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
  Users,
  Menu,
  X
} from 'lucide-react';

interface AdminLayoutProps {
  children: ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location, setLocation] = useLocation();
  const { data: session, isPending } = authClient.useSession();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    // Set a timeout to force show after 3 seconds if session isn't loading
    const timer = setTimeout(() => {
      if (isPending) {
        setForceShow(true);
      }
    }, 3000);
    return () => clearTimeout(timer);
  }, [isPending]);

  useEffect(() => {
    if (!isPending && !session && !forceShow) {
      setLocation('/sign-in');
    }
  }, [session, isPending, setLocation, forceShow]);

  // Close sidebar on location change (mobile)
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]);

  // If still loading session and haven't reached timeout
  if (isPending && !forceShow) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-mustard mb-4"></div>
        <p className="font-sans text-gray-400 animate-pulse">Loading dashboard...</p>
      </div>
    );
  }

  // If no session and force show disabled, redirect to sign in
  if (!session && !forceShow) {
    return (
      <div className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-white p-4 text-center">
        <p className="animate-pulse font-serif text-xl mb-4">Redirecting to sign in...</p>
        <Link href="/sign-in">
          <button className="text-mustard hover:underline text-sm">Click here if you are not redirected</button>
        </Link>
      </div>
    );
  }

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
    <div className="min-h-screen bg-charcoal text-white flex flex-col md:flex-row">
      {/* Mobile Header */}
      <div className="md:hidden bg-[#1A1A1A] border-b border-white/5 p-4 flex items-center justify-between sticky top-0 z-30">
        <Link href="/">
          <h1 className="text-xl font-serif text-mustard font-bold">Afrobility</h1>
        </Link>
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 text-gray-400 hover:text-white"
        >
          {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-64 bg-[#1A1A1A] border-r border-white/5 flex flex-col shadow-xl z-50 transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 md:static md:h-screen
      `}>
        <div className="p-6 hidden md:block">
          <Link href="/">
            <h1 className="text-2xl font-serif text-mustard cursor-pointer font-bold">Afrobility</h1>
          </Link>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">Admin Control</p>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4 md:mt-0">
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
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-10 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-serif">Welcome back, {session?.user?.name?.split(' ')[0] || 'Admin'}</h2>
            <p className="text-gray-400 text-sm md:text-base">Managing Afrobility Family CIC</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1A1A1A] px-4 py-2 rounded-full border border-white/5 text-xs md:text-sm text-gray-400">
              {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-mustard flex items-center justify-center text-charcoal font-bold shadow-lg shadow-mustard/20">
              {session?.user?.name?.charAt(0) || 'A'}
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  );
}
