import React from 'react';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery/Gallery';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <Hero />
      <Gallery />
    </div>
  );
}