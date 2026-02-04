import AdminLayout from './layout';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  ArrowUpDown,
  Calendar,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_DONATIONS = [
  { id: '1', name: 'Sarah Johnson', email: 'sarah.j@example.com', amount: 50, date: '2025-05-10', status: 'Completed', frequency: 'One-time' },
  { id: '2', name: 'Michael Kwesi', email: 'm.kwesi@example.com', amount: 25, date: '2025-05-09', status: 'Completed', frequency: 'Monthly' },
  { id: '3', name: 'Elena Rodriguez', email: 'elena.r@example.com', amount: 100, date: '2025-05-08', status: 'Pending', frequency: 'One-time' },
  { id: '4', name: 'David Smith', email: 'd.smith@example.com', amount: 10, date: '2025-05-07', status: 'Completed', frequency: 'Monthly' },
  { id: '5', name: 'Amara Okafor', email: 'amara.o@example.com', amount: 200, date: '2025-05-06', status: 'Completed', frequency: 'One-time' },
  { id: '6', name: 'James Wilson', email: 'j.wilson@example.com', amount: 50, date: '2025-05-05', status: 'Failed', frequency: 'One-time' },
];

export default function DonationTracker() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');

  const filteredDonations = MOCK_DONATIONS.filter(donation => {
    const matchesSearch = donation.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          donation.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || donation.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-serif">Donation Tracker</h2>
          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
              <Download className="w-4 h-4" /> Export CSV
            </Button>
            <Button className="bg-mustard text-charcoal hover:bg-mustard/90 font-bold">
              Add Manual Entry
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-[#1A1A1A] p-4 rounded-xl border border-white/5 flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search by name or email..."
              className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-mustard transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select 
              className="bg-charcoal border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="All">All Status</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Failed">Failed</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <input 
              type="date" 
              className="bg-charcoal border border-white/10 rounded-lg px-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#1A1A1A] rounded-xl border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 text-gray-400 text-xs uppercase tracking-widest border-b border-white/5">
                  <th className="px-6 py-4 font-medium">Donor</th>
                  <th className="px-6 py-4 font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                      Amount <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium">Frequency</th>
                  <th className="px-6 py-4 font-medium">
                    <div className="flex items-center gap-1 cursor-pointer hover:text-white transition-colors">
                      Date <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="px-6 py-4 font-medium">Status</th>
                  <th className="px-6 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredDonations.map((donation) => (
                  <tr key={donation.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="font-bold text-white group-hover:text-mustard transition-colors">{donation.name}</span>
                        <span className="text-xs text-gray-500">{donation.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-bold text-white">
                      £{donation.amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        donation.frequency === 'Monthly' ? 'bg-blue-500/10 text-blue-400' : 'bg-gray-500/10 text-gray-400'
                      }`}>
                        {donation.frequency}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-400">
                      {new Date(donation.date).toLocaleDateString('en-GB')}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`flex items-center gap-1.5 text-sm ${
                        donation.status === 'Completed' ? 'text-emerald-400' : 
                        donation.status === 'Pending' ? 'text-mustard' : 'text-destructive'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${
                          donation.status === 'Completed' ? 'bg-emerald-400' : 
                          donation.status === 'Pending' ? 'bg-mustard' : 'bg-destructive'
                        }`}></span>
                        {donation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-gray-500 hover:text-white p-1 rounded-lg hover:bg-white/5 transition-all">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredDonations.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                      No donations found matching your criteria.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="bg-white/5 px-6 py-4 flex items-center justify-between text-sm text-gray-400">
            <span>Showing {filteredDonations.length} of {MOCK_DONATIONS.length} donations</span>
            <div className="flex items-center gap-2">
              <Button variant="ghost" disabled size="sm" className="text-xs">Previous</Button>
              <Button variant="ghost" disabled size="sm" className="text-xs text-mustard">1</Button>
              <Button variant="ghost" disabled size="sm" className="text-xs">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
