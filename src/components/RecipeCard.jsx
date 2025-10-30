import React from 'react';
import { Star, Clock } from 'lucide-react';

const RecipeCard = ({ recipe }) => {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
          {recipe.cuisine}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{recipe.title}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{recipe.description}</p>
        <div className="mt-3 flex items-center justify-between text-sm">
          <div className="flex items-center gap-1 text-amber-500">
            <Star size={16} className={recipe.rating >= 1 ? '' : 'opacity-30'} />
            <Star size={16} className={recipe.rating >= 2 ? '' : 'opacity-30'} />
            <Star size={16} className={recipe.rating >= 3 ? '' : 'opacity-30'} />
            <Star size={16} className={recipe.rating >= 4 ? '' : 'opacity-30'} />
            <Star size={16} className={recipe.rating >= 5 ? '' : 'opacity-30'} />
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <Clock size={16} />
            <span>{recipe.time} mins</span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {recipe.tags?.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <button className="w-full rounded-xl bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800">
            View Recipe
          </button>
        </div>
      </div>
    </article>
  );
};

export default RecipeCard;
