import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { useNavigate } from 'react-router-dom';
import { Upload, Trash2, LogOut } from 'lucide-react';

const Admin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);
    setLoading(false);
    if (!user) navigate('/admin/login');
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!user) return null;

  return (
    <div className="min-h-screen bg-brand-grey">
      <header className="bg-brand-navy text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-brand-orange hover:bg-brand-rust px-4 py-2 rounded transition-colors"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Gallery Management</h2>
          <p className="text-brand-charcoal mb-4">
            Upload and manage gallery images. Images are stored in Supabase Storage.
          </p>
          <button className="bg-brand-orange hover:bg-brand-rust text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors">
            <Upload size={20} />
            Upload Images
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">Contact Submissions</h2>
          <p className="text-brand-charcoal">View and manage contact form submissions from your website.</p>
        </div>
      </main>
    </div>
  );
};

export default Admin;
