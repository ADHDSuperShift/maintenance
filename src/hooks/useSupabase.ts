import { useState, useEffect } from 'react';
import { supabase, ContactSubmission, GalleryImage } from '@/lib/supabase';

export const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitContact = async (data: ContactSubmission) => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);
      
      if (error) throw error;
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { submitContact, loading, error };
};

export const useGallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setImages(data || []);
    } catch (err) {
      console.error('Error fetching images:', err);
    } finally {
      setLoading(false);
    }
  };

  return { images, loading, refetch: fetchImages };
};
