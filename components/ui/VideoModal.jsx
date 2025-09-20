'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

const VideoModal = ({ isOpen, onClose, videoUrl, title = "Video" }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getEmbedUrl = (url) => {
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    return url;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl mx-4 bg-slate-900 light:bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-700 light:border-gray-200">
          <h3 className="text-lg font-semibold text-white light:text-gray-900">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white light:text-gray-600 light:hover:text-gray-900 transition-colors rounded-lg hover:bg-slate-800 light:hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
          <iframe
            src={getEmbedUrl(videoUrl)}
            title={title}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoModal;