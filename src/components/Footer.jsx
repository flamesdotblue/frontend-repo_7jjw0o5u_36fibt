import React from 'react';

const Footer = () => {
  return (
    <footer id="about" className="mt-16 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-gray-900">About TastyBook</h4>
            <p className="mt-2 text-gray-600">
              Discover delicious, easy-to-follow recipes crafted for home cooks of all levels. Save your
              favorites, explore cuisines, and cook with confidence.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Get Inspired</h4>
            <ul className="mt-2 space-y-1 text-gray-600">
              <li>30-minute Meals</li>
              <li>Vegetarian Delights</li>
              <li>Desserts & Baking</li>
              <li>Meal Prep Ideas</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Stay in the loop</h4>
            <p className="mt-2 text-gray-600">Join our newsletter for weekly recipe drops.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                aria-label="Email address"
              />
              <button className="rounded-lg bg-emerald-500 px-3 py-2 text-white font-medium hover:bg-emerald-600">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} TastyBook. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
