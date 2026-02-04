import AdminLayout from './layout';
import { useState, useEffect } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Image as ImageIcon,
  Tag,
  User,
  Calendar,
  Save,
  Send,
  MapPin,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContentCMS() {
  const [activeTab, setActiveTab] = useState<'articles' | 'events'>('articles');
  const [articles, setArticles] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentItem, setCurrentItem] = useState<any>(null);

  useEffect(() => {
    // In a real app, fetch from API
    // For now, using mock data but structured for future API integration
    setArticles([
      { id: '1', title: 'Navigating Disability Support: A Guide for African Families', author: 'Staff', category: 'Guides', status: 'Published', date: '2025-04-10', description: '', content: '' },
      { id: '2', title: 'Building Community: Emotional Support', author: 'Admin', category: 'Community', status: 'Published', date: '2025-04-15', description: '', content: '' },
      { id: '3', title: 'Culturally Sensitive Resources for Caribbean Families', author: 'Staff', category: 'Resources', status: 'Draft', date: '2025-04-20', description: '', content: '' },
    ]);
    setEvents([
      { id: '1', title: 'Family Gathering: Summer Picnic', date: '2025-07-15', location: 'Hyde Park, London', status: 'Published', capacity: 50, description: 'A relaxed afternoon for families.' },
      { id: '2', title: 'Workshop: Educational Advocacy', date: '2025-08-05', location: 'Online', status: 'Draft', capacity: 100, description: 'Learn how to advocate for your child.' },
    ]);
  }, []);

  const handleDelete = (id: string) => {
    if (confirm(`Are you sure you want to delete this ${activeTab === 'articles' ? 'article' : 'event'}?`)) {
      if (activeTab === 'articles') {
        setArticles(prev => prev.filter(a => a.id !== id));
      } else {
        setEvents(prev => prev.filter(e => e.id !== id));
      }
    }
  };

  const openEditor = (item: any = null) => {
    if (activeTab === 'articles') {
      setCurrentItem(item || { title: '', author: '', description: '', content: '', category: 'Guides', status: 'Draft' });
    } else {
      setCurrentItem(item || { title: '', date: '', location: '', description: '', capacity: '', registrationLink: '', status: 'Draft' });
    }
    setIsEditing(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4 bg-charcoal p-1 rounded-xl border border-white/5 w-fit">
            <button 
              onClick={() => { setActiveTab('articles'); setIsEditing(false); }}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'articles' ? 'bg-mustard text-charcoal' : 'text-gray-400 hover:text-white'}`}
            >
              Articles
            </button>
            <button 
              onClick={() => { setActiveTab('events'); setIsEditing(false); }}
              className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeTab === 'events' ? 'bg-mustard text-charcoal' : 'text-gray-400 hover:text-white'}`}
            >
              Events
            </button>
          </div>
          
          {!isEditing && (
            <Button onClick={() => openEditor()} className="bg-mustard text-charcoal font-bold hover:bg-mustard/90 gap-2">
              <Plus className="w-4 h-4" /> Create New {activeTab === 'articles' ? 'Article' : 'Event'}
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif">{currentItem.id ? `Edit ${activeTab === 'articles' ? 'Article' : 'Event'}` : `New ${activeTab === 'articles' ? 'Article' : 'Event'}`}</h3>
              <div className="flex gap-3">
                <Button variant="ghost" onClick={() => setIsEditing(false)} className="text-gray-400">Cancel</Button>
                <Button variant="outline" className="border-white/10 gap-2">
                  <Save className="w-4 h-4" /> Save as Draft
                </Button>
                <Button className="bg-mustard text-charcoal font-bold hover:bg-mustard/90 gap-2">
                  <Send className="w-4 h-4" /> Publish Now
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">{activeTab === 'articles' ? 'Article Title' : 'Event Title'}</label>
                  <input 
                    type="text" 
                    placeholder={activeTab === 'articles' ? "Enter a compelling title..." : "Enter event name..."}
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-xl font-serif text-white focus:outline-none focus:border-mustard transition-colors"
                    defaultValue={currentItem.title}
                  />
                </div>

                {activeTab === 'articles' ? (
                  <>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Description</label>
                      <textarea 
                        rows={3}
                        placeholder="Brief summary for social sharing and SEO..."
                        className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-mustard transition-colors resize-none"
                        defaultValue={currentItem.description}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Content</label>
                      <textarea 
                        rows={12}
                        placeholder="Write your article content here (Markdown supported)..."
                        className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-mustard transition-colors resize-none font-mono text-sm"
                        defaultValue={currentItem.content}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Date & Time</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            type="datetime-local" 
                            className="w-full bg-charcoal border border-white/10 rounded-xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-mustard transition-colors"
                            defaultValue={currentItem.date}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Location</label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                          <input 
                            type="text" 
                            placeholder="e.g. London or Online"
                            className="w-full bg-charcoal border border-white/10 rounded-xl pl-12 pr-6 py-4 text-white focus:outline-none focus:border-mustard transition-colors"
                            defaultValue={currentItem.location}
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Description</label>
                      <textarea 
                        rows={6}
                        placeholder="Event details and what to expect..."
                        className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-mustard transition-colors resize-none"
                        defaultValue={currentItem.description}
                      />
                    </div>
                  </>
                )}
              </div>

              <div className="space-y-6">
                <div className="bg-charcoal p-6 rounded-xl border border-white/5 space-y-6">
                  <h4 className="font-bold text-mustard border-b border-white/5 pb-2 mb-4">Metadata</h4>
                  
                  {activeTab === 'articles' ? (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Author</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input 
                            type="text" 
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mustard"
                            defaultValue={currentItem.author}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Category</label>
                        <div className="relative">
                          <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mustard appearance-none" defaultValue={currentItem.category}>
                            <option>Guides</option>
                            <option>Community</option>
                            <option>Resources</option>
                          </select>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Capacity</label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                          <input 
                            type="number" 
                            placeholder="Unlimited if empty"
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mustard"
                            defaultValue={currentItem.capacity}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Registration Link</label>
                        <input 
                          type="text" 
                          placeholder="Link to registration form"
                          className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-mustard"
                          defaultValue={currentItem.registrationLink}
                        />
                      </div>
                    </>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Featured Image</label>
                    <div className="mt-2 border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-mustard/30 transition-all cursor-pointer group">
                      <div className="p-3 rounded-full bg-white/5 group-hover:bg-mustard/10 transition-colors">
                        <ImageIcon className="w-6 h-6 text-gray-500 group-hover:text-mustard" />
                      </div>
                      <span className="text-xs text-gray-500">Click to upload image</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="p-4 bg-white/5 border-b border-white/5 flex gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input 
                  type="text" 
                  placeholder={`Search ${activeTab}...`}
                  className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
                />
              </div>
            </div>
            
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-4 font-medium">{activeTab === 'articles' ? 'Article Title' : 'Event Title'}</th>
                  <th className="px-8 py-4 font-medium">{activeTab === 'articles' ? 'Author' : 'Location'}</th>
                  <th className="px-8 py-4 font-medium">{activeTab === 'articles' ? 'Category' : 'Date'}</th>
                  <th className="px-8 py-4 font-medium">Status</th>
                  <th className="px-8 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {(activeTab === 'articles' ? articles : events).map((item) => (
                  <tr key={item.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6 max-w-md">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded bg-charcoal border border-white/5 flex items-center justify-center shrink-0">
                          {activeTab === 'articles' ? <FileText className="w-5 h-5 text-mustard" /> : <Calendar className="w-5 h-5 text-mustard" />}
                        </div>
                        <span className="font-bold group-hover:text-mustard transition-colors line-clamp-1">{item.title}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">{activeTab === 'articles' ? item.author : item.location}</td>
                    <td className="px-8 py-6 text-sm text-gray-400">
                      {activeTab === 'articles' ? (
                        <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-bold uppercase text-gray-400">{item.category}</span>
                      ) : (
                        item.date
                      )}
                    </td>
                    <td className="px-8 py-6">
                      <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${
                        item.status === 'Published' ? 'text-emerald-400' : 'text-mustard'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          item.status === 'Published' ? 'bg-emerald-400' : 'bg-mustard'
                        }`}></span>
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openEditor(item)} className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 hover:bg-destructive/10 rounded-lg text-gray-400 hover:text-destructive transition-all">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
