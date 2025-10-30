import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-emerald-500 text-white">
              <UtensilsCrossed size={20} />
            </div>
            <span className="font-semibold text-lg tracking-tight">TastyBook</span>
          </div>

          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
            <a href="#recipes" className="hover:text-gray-900 transition-colors">Recipes</a>
            <a href="#categories" className="hover:text-gray-900 transition-colors">Categories</a>
            <a href="#trending" className="hover:text-gray-900 transition-colors">Trending</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </nav>

          <div>
            <button className="inline-flex items-center rounded-md bg-emerald-500 px-3.5 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/30">
              Submit Recipe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
