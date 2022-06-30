import React from "react";

export default function MainBody({ children }) {
  return (
    <main className="wrapper">
      <div className="container">{children}</div>
    </main>
  );
}
