import AdminLayout from './layout';
import { useState, useEffect } from 'react';
import { 
  User, 
  UserPlus, 
  Search, 
  Shield, 
  Trash2, 
  Mail, 
  CheckCircle2, 
  XCircle,
  History,
  MoreVertical
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_USERS = [
  { id: '1', name: 'Admin Staff', email: 'admin@afrobility.org', role: 'Admin', verified: true, joined: '2024-01-10' },
  { id: '2', name: 'John Editor', email: 'john@afrobility.org', role: 'Editor', verified: true, joined: '2024-02-15' },
  { id: '3', name: 'Sarah Viewer', email: 'sarah@afrobility.org', role: 'Viewer', verified: false, joined: '2024-03-20' },
];

const MOCK_AUDIT_LOGS = [
  { id: '1', user: 'Admin Staff', action: 'Created Event', target: 'Summer Picnic', date: '2025-05-10 14:30' },
  { id: '2', user: 'John Editor', action: 'Updated Article', target: 'Navigating Disability...', date: '2025-05-09 11:20' },
  { id: '3', user: 'Admin Staff', action: 'Deleted User', target: 'temp_user@test.com', date: '2025-05-08 09:15' },
];

export default function AdminUserManagement() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [activeTab, setActiveTab] = useState<'users' | 'logs'>('users');
  const [isAddingUser, setIsAddingUser] = useState(false);

  const handleDeleteUser = (id: string) => {
    if (confirm('Are you sure you want to remove this user?')) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-charcoal p-1 rounded-xl border border-white/5 w-fit">
            <button 
              onClick={() => setActiveTab('users')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'users' ? 'bg-mustard text-charcoal' : 'text-gray-400 hover:text-white'}`}
            >
              Staff Members
            </button>
            <button 
              onClick={() => setActiveTab('logs')}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'logs' ? 'bg-mustard text-charcoal' : 'text-gray-400 hover:text-white'}`}
            >
              Audit Logs
            </button>
          </div>
          
          {activeTab === 'users' && (
            <Button onClick={() => setIsAddingUser(true)} className="bg-mustard text-charcoal font-bold hover:bg-mustard/90 gap-2">
              <UserPlus className="w-4 h-4" /> Add Staff Member
            </Button>
          )}
        </div>

        {activeTab === 'users' ? (
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-4 bg-white/5 border-b border-white/5 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search by name or email..."
                  className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
                />
              </div>
            </div>
            
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-4 font-medium">User</th>
                  <th className="px-8 py-4 font-medium">Role</th>
                  <th className="px-8 py-4 font-medium">Verification</th>
                  <th className="px-8 py-4 font-medium">Joined</th>
                  <th className="px-8 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-mustard/10 flex items-center justify-center border border-mustard/20">
                          <User className="w-5 h-5 text-mustard" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-white">{u.name}</span>
                          <span className="text-xs text-gray-500">{u.email}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <Shield className={`w-4 h-4 ${u.role === 'Admin' ? 'text-mustard' : 'text-gray-500'}`} />
                        <span className="text-sm text-gray-300">{u.role}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      {u.verified ? (
                        <span className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold uppercase">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-mustard text-xs font-bold uppercase">
                          <Mail className="w-3.5 h-3.5" /> Pending
                        </span>
                      )}
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {new Date(u.joined).toLocaleDateString('en-GB')}
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleDeleteUser(u.id)} className="p-2 hover:bg-destructive/10 rounded-lg text-gray-400 hover:text-destructive transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                          <MoreVertical className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-6 bg-white/5 border-b border-white/5">
              <h3 className="font-serif text-lg">System Audit Logs</h3>
            </div>
            <div className="divide-y divide-white/5">
              {MOCK_AUDIT_LOGS.map((log) => (
                <div key={log.id} className="px-8 py-6 hover:bg-white/[0.02] transition-colors flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <History className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white">{log.user}</span>
                        <span className="text-gray-500 text-sm">{log.action}</span>
                        <span className="text-mustard text-sm font-medium">{log.target}</span>
                      </div>
                      <span className="text-xs text-gray-600 font-mono mt-1 block">{log.date}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs text-gray-500 hover:text-white">View Details</Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {isAddingUser && (
          <div className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <div className="bg-[#1A1A1A] w-full max-w-md rounded-[2rem] border border-white/10 p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-serif">Add Staff Member</h3>
                <button onClick={() => setIsAddingUser(false)} className="text-gray-500 hover:text-white">
                  <XCircle className="w-6 h-6" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mustard outline-none transition-colors" placeholder="e.g. Jane Doe" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mustard outline-none transition-colors" placeholder="jane@afrobility.org" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Role Assignment</label>
                  <select className="w-full bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-white focus:border-mustard outline-none transition-colors appearance-none">
                    <option value="Viewer">Viewer (Read-only)</option>
                    <option value="Editor">Editor (Can manage content)</option>
                    <option value="Admin">Admin (Full system access)</option>
                  </select>
                </div>
                <div className="pt-4">
                  <Button className="w-full bg-mustard text-charcoal font-black py-6 rounded-xl hover:bg-mustard/90">
                    Send Invitation
                  </Button>
                  <p className="text-[10px] text-center text-gray-500 mt-4">
                    The user will receive an email to verify their account and set their password.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
