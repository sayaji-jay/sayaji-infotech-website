'use client';

import { useState } from 'react';

const Avatar = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
  fallbackType = 'initials'
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-lg',
    lg: 'text-xl',
    xl: 'text-2xl'
  };

  // Generate random cartoon-style avatars
  const getRandomCartoonAvatar = () => {
    const seed = name ? name.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : Math.random() * 1000;
    const avatarStyles = [
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`,
      `https://api.dicebear.com/7.x/bottts/svg?seed=${seed}`,
      `https://api.dicebear.com/7.x/personas/svg?seed=${seed}`,
      `https://api.dicebear.com/7.x/fun-emoji/svg?seed=${seed}`,
    ];

    return avatarStyles[Math.floor(seed) % avatarStyles.length];
  };

  const getInitials = () => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word.charAt(0))
      .join('')
      .substring(0, 2)
      .toUpperCase();
  };

  const getRandomGradient = () => {
    const gradients = [
      'from-purple-500 to-pink-500',
      'from-blue-500 to-cyan-500',
      'from-green-500 to-teal-500',
      'from-yellow-500 to-orange-500',
      'from-red-500 to-pink-500',
      'from-indigo-500 to-purple-500',
      'from-cyan-500 to-blue-500',
      'from-teal-500 to-green-500',
    ];

    const seed = name ? name.split('').reduce((a, b) => a + b.charCodeAt(0), 0) : 0;
    return gradients[seed % gradients.length];
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Show fallback if no src provided, or image failed to load
  const showFallback = !src || imageError;

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden ${className}`}>
      {!showFallback && (
        <img
          src={src}
          alt={alt || name || 'Avatar'}
          onError={handleImageError}
          onLoad={handleImageLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {showFallback && (
        <>
          {fallbackType === 'cartoon' ? (
            <img
              src={getRandomCartoonAvatar()}
              alt={alt || name || 'Avatar'}
              className="w-full h-full object-cover"
              onError={() => {
                // If cartoon avatar also fails, fall back to initials
                setImageError(true);
              }}
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${getRandomGradient()} flex items-center justify-center ring-2 ring-purple-500/20 hover:ring-purple-500/40 transition-all duration-300`}>
              <span className={`text-white font-semibold ${textSizeClasses[size]}`}>
                {getInitials()}
              </span>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Avatar;