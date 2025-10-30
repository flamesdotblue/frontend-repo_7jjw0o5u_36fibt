import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ value, onChange, onSubmit, placeholder = 'Search recipes, ingredients, cuisines...' }) => {
  const [local, setLocal] = useState(value || '');

  const handleChange = (e) => {
    setLocal(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit && onSubmit(local);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm focus-within:ring-2 focus-within:ring-emerald-500/20">
        <Search className="text-gray-400" size={18} />
        <input
          type="text"
          value={local}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-900"
          aria-label="Search recipes"
        />
        <button
          type="submit"
          className="hidden sm:inline-flex items-center rounded-lg bg-emerald-500 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-600"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
