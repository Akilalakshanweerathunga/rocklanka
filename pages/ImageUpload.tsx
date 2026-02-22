import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

// ImgBB API configuration
const IMGBB_API_KEY = '45bb488e555ce984b39022d3ee87f8d5';
const IMGBB_API_URL = 'https://api.imgbb.com/1/upload';

interface UploadedImage {
  id: string;
  url: string;
  deleteUrl: string;
  title: string;
  uploadedAt: string;
}

const ImageUpload: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [imageTitle, setImageTitle] = useState('');

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setError('Please select an image file');
        return;
      }
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('Image size must be less than 10MB');
        return;
      }
      setSelectedImage(file);
      setError(null);
      setSuccess(null);
    }
  };

  const handleUpload = async () => {
    if (!selectedImage) {
      setError('Please select an image first');
      return;
    }

    setUploading(true);
    setUploadProgress(0);
    setError(null);
    setSuccess(null);

    try {
      // Convert image to base64
      const base64 = await fileToBase64(selectedImage);
      
      // Prepare form data
      const formData = new FormData();
      formData.append('key', IMGBB_API_KEY);
      formData.append('image', base64);
      formData.append('expiration', '600'); // 10 minutes (for demo purposes)
      
      if (imageTitle) {
        formData.append('title', imageTitle);
      }

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval);
            return prev;
          }
          return prev + 10;
        });
      }, 200);

      // Upload to ImgBB
      const response = await fetch(IMGBB_API_URL, {
        method: 'POST',
        body: formData
      });

      clearInterval(progressInterval);
      setUploadProgress(100);

      const data = await response.json();

      if (data.success) {
        const newImage: UploadedImage = {
          id: data.data.id,
          url: data.data.url,
          deleteUrl: data.data.delete_url,
          title: imageTitle || selectedImage.name,
          uploadedAt: new Date().toISOString()
        };
        
        setUploadedImages(prev => [newImage, ...prev]);
        setSuccess('Image uploaded successfully!');
        setSelectedImage(null);
        setImageTitle('');
      } else {
        setError(data.error?.message || 'Upload failed. Please try again.');
      }
    } catch (err) {
      setError('Failed to upload image. Please check your connection and try again.');
      console.error('Upload error:', err);
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const fileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setSuccess('URL copied to clipboard!');
    setTimeout(() => setSuccess(null), 2000);
  };

  const deleteImage = async (image: UploadedImage) => {
    try {
      await fetch(image.deleteUrl);
      setUploadedImages(prev => prev.filter(img => img.id !== image.id));
      setSuccess('Image removed from list');
    } catch (err) {
      setError('Failed to remove image');
    }
  };

  return (
    <div className="min-h-screen font-sans selection:bg-burnt selection:text-white overflow-x-hidden">
      <Navbar isScrolled={true} />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=2070&auto=format&fit=crop" 
            alt="Image Upload" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-forest/70" />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif text-sand mb-4">Image Upload</h1>
          <p className="text-sand/80 text-xl">
            Upload images to ImgBB for use in your website
          </p>
        </div>
      </section>

      {/* Upload Section */}
      <section className="py-16 px-6 bg-sand">
        <div className="max-w-4xl mx-auto">
          {/* Upload Card */}
          <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-forest mb-6">Upload New Image</h2>
            
            {/* File Input */}
            <div className="mb-6">
              <label className="block text-forest font-semibold mb-2">Select Image</label>
              <div className="border-2 border-dashed border-forest/30 rounded-xl p-8 text-center hover:border-burnt transition-colors cursor-pointer">
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={handleImageSelect}
                  className="hidden"
                  id="image-input"
                />
                <label htmlFor="image-input" className="cursor-pointer">
                  {selectedImage ? (
                    <div className="flex flex-col items-center">
                      <img 
                        src={URL.createObjectURL(selectedImage)} 
                        alt="Preview" 
                        className="w-48 h-48 object-cover rounded-lg mb-4"
                      />
                      <p className="text-forest font-medium">{selectedImage.name}</p>
                      <p className="text-gray-500 text-sm">{(selectedImage.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center">
                      <svg className="w-16 h-16 text-forest/50 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-forest font-medium">Click to select an image</p>
                      <p className="text-gray-500 text-sm">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* Image Title */}
            <div className="mb-6">
              <label className="block text-forest font-semibold mb-2">Image Title (Optional)</label>
              <input 
                type="text"
                value={imageTitle}
                onChange={(e) => setImageTitle(e.target.value)}
                placeholder="Enter a title for your image"
                className="w-full px-4 py-3 rounded-lg border-2 border-forest/30 focus:border-burnt focus:ring-2 focus:ring-burnt/20 outline-none transition-colors font-medium text-black"
              />
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                {success}
              </div>
            )}

            {/* Upload Button */}
            <button 
              onClick={handleUpload}
              disabled={!selectedImage || uploading}
              className="w-full py-4 bg-burnt text-white rounded-full text-lg font-bold hover:bg-forest transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {uploading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading... {uploadProgress}%
                </>
              ) : (
                'Upload Image'
              )}
            </button>

            {/* Progress Bar */}
            {uploading && (
              <div className="mt-4">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-burnt h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Uploaded Images */}
          {uploadedImages.length > 0 && (
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-forest mb-6">Uploaded Images</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {uploadedImages.map((image) => (
                  <div key={image.id} className="border-2 border-forest/20 rounded-xl overflow-hidden">
                    <img 
                      src={image.url} 
                      alt={image.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-forest mb-2">{image.title}</h3>
                      <p className="text-gray-500 text-sm mb-4 break-all">{image.url}</p>
                      
                      <div className="flex gap-2">
                        <button 
                          onClick={() => copyToClipboard(image.url)}
                          className="flex-1 py-2 bg-forest text-white rounded-lg text-sm font-medium hover:bg-burnt transition-colors"
                        >
                          Copy URL
                        </button>
                        <button 
                          onClick={() => deleteImage(image)}
                          className="py-2 px-4 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 bg-forest/10 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-forest mb-4">How to use uploaded images:</h3>
            <ol className="list-decimal list-inside text-forest space-y-2">
              <li>Upload an image using the form above</li>
              <li>Copy the image URL</li>
              <li>Use the URL in your website code or slider</li>
              <li>For the hero slider, you can replace the image URLs in the HeroSlider component</li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ImageUpload;
