import React from "react";

export default function Nav() {
  return (
    <nav id="navigation" className="bg-secondary">
      <h1>TheCatet</h1>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search your notes ..."
      />
    </nav>
  );
}
