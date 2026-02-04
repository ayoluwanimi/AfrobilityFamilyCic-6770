import AdminLayout from './layout';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  CheckCircle, 
  XCircle, 
  Clock,
  User,
  Mail,
  Calendar,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_BOOKINGS = [
  { id: '1', name: 'Kwame Mensah', email: 'kwame@example.com', service: 'Education Guidance', date: '2025-05-15', status: 'Pending' },
  { id: '2', name: 'Fatima Ali', email: 'fatima.a@example.com', service: 'Support Group', date: '2025-05-16', status: 'Confirmed' },
  { id: '3', name: 'John Peterson', email: 'john.p@example.com', service: 'Education Guidance', date: '2025-05-18', status: 'Cancelled' },
  { id: '4', name: 'Zainab Yusuf', email: 'zainab.y@example.com', service: 'Support Group', date: '2025-05-20', status: 'Confirmed' },
  { id: '5', name: 'Robert Chen', email: 'r.chen@example.com', service: 'Education Guidance', date: '2025-05-22', status: 'Pending' },
];

export default function BookingManagement() {
  const [bookings, setBookings] = useState(MOCK_BOOKINGS);
  const [searchTerm, setSearchTerm] = useState('');

  const updateStatus = (id: string, newStatus: string) => {
    setBookings(prev => prev.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  const filteredBookings = bookings.filter(b => 
    b.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    b.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-serif">Booking Management</h2>
          <Button className="bg-mustard text-charcoal font-bold hover:bg-mustard/90">
            Manual Booking
          </Button>
        </div>

        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search bookings by name or email..."
              className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-mustard/30 transition-all group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-mustard group-hover:bg-mustard group-hover:text-charcoal transition-all font-bold text-lg">
                  {booking.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-mustard transition-colors">{booking.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-400 mt-1">
                    <span className="flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {booking.email}</span>
                    <span className="flex items-center gap-1 font-bold text-gray-300 bg-white/5 px-2 py-0.5 rounded uppercase text-[10px]">
                       {booking.service}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1">Booking Date</span>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Calendar className="w-4 h-4 text-mustard" />
                    {new Date(booking.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </div>
                </div>

                <div className="flex flex-col min-w-[120px]">
                  <span className="text-[10px] uppercase text-gray-500 font-bold tracking-widest mb-1">Status</span>
                  <span className={`flex items-center gap-2 font-bold text-sm ${
                    booking.status === 'Confirmed' ? 'text-emerald-400' : 
                    booking.status === 'Cancelled' ? 'text-destructive' : 'text-mustard'
                  }`}>
                    {booking.status === 'Confirmed' ? <CheckCircle className="w-4 h-4" /> : 
                     booking.status === 'Cancelled' ? <XCircle className="w-4 h-4" /> : <Clock className="w-4 h-4" />}
                    {booking.status}
                  </span>
                </div>

                <div className="flex items-center gap-2 border-l border-white/5 pl-6">
                  {booking.status === 'Pending' && (
                    <>
                      <Button 
                        size="sm" 
                        onClick={() => updateStatus(booking.id, 'Confirmed')}
                        className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white font-bold"
                      >
                        Confirm
                      </Button>
                      <Button 
                        size="sm" 
                        onClick={() => updateStatus(booking.id, 'Cancelled')}
                        className="bg-destructive/10 text-destructive hover:bg-destructive hover:text-white font-bold"
                      >
                        Cancel
                      </Button>
                    </>
                  )}
                  {booking.status !== 'Pending' && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      onClick={() => updateStatus(booking.id, 'Pending')}
                      className="border-white/10 text-gray-400 hover:text-white"
                    >
                      Reset to Pending
                    </Button>
                  )}
                  <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
          {filteredBookings.length === 0 && (
            <div className="text-center py-20 bg-[#1A1A1A] rounded-2xl border border-dashed border-white/10 text-gray-500 font-serif text-xl">
              No bookings found...
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
