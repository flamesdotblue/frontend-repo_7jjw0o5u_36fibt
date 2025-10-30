import React, { useMemo, useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import Footer from './components/Footer';

const recipesSeed = [
  {
    id: 1,
    title: 'Creamy Garlic Parmesan Pasta',
    description: 'Silky, rich pasta tossed in a luscious garlic-parmesan sauce finished with fresh herbs.',
    image:
      'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    time: 25,
    cuisine: 'Italian',
    tags: ['Pasta', 'Quick', 'Comfort Food'],
  },
  {
    id: 2,
    title: 'Rainbow Buddha Bowl',
    description:
      'A nourishing bowl packed with roasted veggies, quinoa, crunchy slaw, and a zesty tahini drizzle.',
    image:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
    time: 30,
    cuisine: 'Fusion',
    tags: ['Vegetarian', 'Gluten-free', 'Meal Prep'],
  },
  {
    id: 3,
    title: 'Spicy Korean Fried Chicken',
    description: 'Crispy double-fried chicken glazed with a sticky gochujang sauce and sesame seeds.',
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop',
    rating: 5,
    time: 40,
    cuisine: 'Korean',
    tags: ['Crispy', 'Party', 'Spicy'],
  },
  {
    id: 4,
    title: 'Avocado Toast with Poached Eggs',
    description: 'Buttery avocado on toasted sourdough topped with perfectly poached eggs and chili flakes.',
    image:
      'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop',
    rating: 4,
    time: 15,
    cuisine: 'Brunch',
    tags: ['Breakfast', 'High-Protein', 'Quick'],
  },
];

function App() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return recipesSeed;
    return recipesSeed.filter((r) =>
      [r.title, r.description, r.cuisine, ...(r.tags || [])]
        .join(' ')
        .toLowerCase()
        .includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50/40 via-white to-white text-gray-900">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" aria-hidden>
            <div className="mx-auto h-full max-w-6xl opacity-60 blur-3xl">
              <div className="h-64 w-64 rounded-full bg-emerald-200/40 absolute -top-10 -left-10" />
              <div className="h-64 w-64 rounded-full bg-amber-200/40 absolute top-20 right-0" />
            </div>
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-medium text-emerald-700">
                New • Handpicked recipes weekly
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight">
                Cook delicious food with confidence
              </h1>
              <p className="mt-3 text-lg text-gray-600">
                Search thousands of curated, kitchen-tested recipes you can trust. From quick weekday
                dinners to indulgent weekend treats.
              </p>
              <div className="mt-6 max-w-xl">
                <SearchBar value={query} onChange={setQuery} onSubmit={setQuery} />
                <p className="mt-2 text-xs text-gray-500">Try: pasta, vegetarian, korean...</p>
              </div>
            </div>
          </div>
        </section>

        {/* Recipes */}
        <section id="recipes" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-4 flex items-baseline justify-between">
            <h2 className="text-xl sm:text-2xl font-semibold">Featured Recipes</h2>
            <span className="text-sm text-gray-500">{filtered.length} results</span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((r) => (
              <RecipeCard key={r.id} recipe={r} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="mt-6 rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-600">
              No recipes match your search. Try different keywords.
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
