import AdminLayout from './layout';
import { useState } from 'react';
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
  Send
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const MOCK_ARTICLES = [
  { id: '1', title: 'Navigating Disability Support: A Guide for African Families', author: 'Staff', category: 'Guides', status: 'Published', date: '2025-04-10' },
  { id: '2', title: 'Building Community: Emotional Support', author: 'Admin', category: 'Community', status: 'Published', date: '2025-04-15' },
  { id: '3', title: 'Culturally Sensitive Resources for Caribbean Families', author: 'Staff', category: 'Resources', status: 'Draft', date: '2025-04-20' },
];

export default function ContentCMS() {
  const [articles, setArticles] = useState(MOCK_ARTICLES);
  const [isEditing, setIsEditing] = useState(false);
  const [currentArticle, setCurrentArticle] = useState<any>(null);

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this article?')) {
      setArticles(prev => prev.filter(a => a.id !== id));
    }
  };

  const openEditor = (article: any = null) => {
    setCurrentArticle(article || { title: '', author: '', description: '', content: '', category: '', status: 'Draft' });
    setIsEditing(true);
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-serif">Content CMS</h2>
          {!isEditing && (
            <Button onClick={() => openEditor()} className="bg-mustard text-charcoal font-bold hover:bg-mustard/90 gap-2">
              <Plus className="w-4 h-4" /> Create New Article
            </Button>
          )}
        </div>

        {isEditing ? (
          <div className="bg-[#1A1A1A] rounded-2xl border border-white/5 p-8 animate-in fade-in zoom-in-95 duration-300">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-serif">{currentArticle.id ? 'Edit Article' : 'New Article'}</h3>
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
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Article Title</label>
                  <input 
                    type="text" 
                    placeholder="Enter a compelling title..."
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-xl font-serif text-white focus:outline-none focus:border-mustard transition-colors"
                    defaultValue={currentArticle.title}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Description</label>
                  <textarea 
                    rows={3}
                    placeholder="Brief summary for social sharing and SEO..."
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-mustard transition-colors resize-none"
                    defaultValue={currentArticle.description}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-widest">Content</label>
                  <textarea 
                    rows={12}
                    placeholder="Write your article content here (Markdown supported)..."
                    className="w-full bg-charcoal border border-white/10 rounded-xl px-6 py-4 text-gray-300 focus:outline-none focus:border-mustard transition-colors resize-none font-mono text-sm"
                    defaultValue={currentArticle.content}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-charcoal p-6 rounded-xl border border-white/5 space-y-6">
                  <h4 className="font-bold text-mustard border-b border-white/5 pb-2 mb-4">Metadata</h4>
                  
                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Author</label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <input 
                        type="text" 
                        className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mustard"
                        defaultValue={currentArticle.author}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-widest">Category</label>
                    <div className="relative">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                      <select className="w-full bg-[#1A1A1A] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-mustard appearance-none">
                        <option>Guides</option>
                        <option>Community</option>
                        <option>Resources</option>
                      </select>
                    </div>
                  </div>

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
                  placeholder="Search articles..."
                  className="w-full bg-charcoal border border-white/10 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-mustard transition-colors text-sm"
                />
              </div>
            </div>
            
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-400 text-[10px] uppercase tracking-widest border-b border-white/5">
                  <th className="px-8 py-4 font-medium">Article Title</th>
                  <th className="px-8 py-4 font-medium">Author</th>
                  <th className="px-8 py-4 font-medium">Category</th>
                  <th className="px-8 py-4 font-medium">Status</th>
                  <th className="px-8 py-4 font-medium">Date</th>
                  <th className="px-8 py-4 font-medium text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {articles.map((article) => (
                  <tr key={article.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-8 py-6 max-w-md">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded bg-charcoal border border-white/5 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-mustard" />
                        </div>
                        <span className="font-bold group-hover:text-mustard transition-colors line-clamp-1">{article.title}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">{article.author}</td>
                    <td className="px-8 py-6">
                      <span className="px-2 py-1 rounded bg-white/5 text-[10px] font-bold uppercase text-gray-400">{article.category}</span>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`flex items-center gap-1.5 text-[10px] font-bold uppercase ${
                        article.status === 'Published' ? 'text-emerald-400' : 'text-mustard'
                      }`}>
                        <span className={`w-1 h-1 rounded-full ${
                          article.status === 'Published' ? 'bg-emerald-400' : 'bg-mustard'
                        }`}></span>
                        {article.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm text-gray-400">{article.date}</td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => openEditor(article)} className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 hover:bg-white/5 rounded-lg text-gray-400 hover:text-white transition-all">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button onClick={() => handleDelete(article.id)} className="p-2 hover:bg-destructive/10 rounded-lg text-gray-400 hover:text-destructive transition-all">
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
