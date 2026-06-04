import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <main>
      <p>Ditty</p>
      <h1>New workspace</h1>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
