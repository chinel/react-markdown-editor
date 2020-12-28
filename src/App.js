import React, { useState } from "react";
import "./App.css";

export default function App() {
  //the [markdown, setMarkdown]  is a value and function that was provided to us by useState and we use array destructuring to pull them out
  const [markdown, setMarkdown] = useState("# sup");
  return (
    <div className="app">
      <textarea value={markdown} />

      <div className="preview">{markdown}</div>
    </div>
  );
}
