import React, { useState } from "react";
import "./App.css";
import marked from "marked";
import ReactMarkdown from "react-markdown";

export default function App() {
  //the [markdown, setMarkdown]  is a value and function that was provided to us by useState and we use array destructuring to pull them out
  const [markdown, setMarkdown] = useState("# Type Here");

  function handleChange(e) {
    setMarkdown(e.target.value);
  }

  return (
    <div className="app">
      <textarea onChange={handleChange} value={markdown} />

      {/* <div
        className="preview"
        dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      /> */}

      {/**Here we switched to a more declarative approach using reactMardown which gives us a component and we no longer need to worry about dangerouslySetInnerHTML */}
      <ReactMarkdown className="preview" source={markdown} />
    </div>
  );
}
