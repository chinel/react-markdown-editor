import React, { useState } from "react";
import "./App.css";

export default function App() {
  //the [markdown, setMarkdown]  is a value and function that was provided to us by useState and we use array destructuring to pull them out
  const [markdown, setMarkdown] = useState("# sup");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      <div className="preview">{markdown}</div>
    </div>
  );
}
