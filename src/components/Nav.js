import React from "react";

export default function Nav({ onSearchQuery, searchQuery, setSearchQuery }) {
  return (
    <nav id="navigation" className="bg-secondary">
      <h1>TheCatet</h1>
      <div className="flex">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search your notes ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          onClick={() => onSearchQuery(searchQuery)}
        >
          Search
        </button>
      </div>
    </nav>
  );
}
