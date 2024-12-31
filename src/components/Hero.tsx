import React from 'react';
import { Heart, Stars } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1467810563316-b5476525c0f9?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Happy New Year 2025
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Stars className="w-6 h-6 text-yellow-300" />
            <p className="text-xl md:text-2xl text-yellow-300 font-light">
              A Special Dedication
            </p>
            <Stars className="w-6 h-6 text-yellow-300" />
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
            <p className="text-2xl md:text-3xl text-white font-medium mb-4">
              To My Dearest
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-rose-300 mb-4">
              IGIRANEZA Danny
            </h2>
            <div className="flex items-center justify-center gap-2 text-xl text-white">
              <span>With all my love</span>
              <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white font-light italic">
            "In every moment we've shared, every smile we've exchanged, <br />
            I find more reasons to cherish what we have."
          </p>

          <div className="mt-8 text-white/90">
            <p className="text-lg">With Love,</p>
            <p className="text-xl font-medium">Ishaka Ericsson</p>
          </div>
        </div>
      </div>
    </div>
  );
}