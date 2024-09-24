import React, { useState, useEffect } from 'react';
import "./style.css";

const TextAnalyzer = () => {
  const [text, setText] = useState('');
  const [uniqueWordCount, setUniqueWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [searchString, setSearchString] = useState('');
  const [replaceString, setReplaceString] = useState('');

  useEffect(() => {
    const words = text
      .toLowerCase()
      .match(/\b\w+\b/g);
    const uniqueWords = new Set(words || []);
    setUniqueWordCount(uniqueWords.size);

    const characters = text.replace(/[^\w]/g, ''); // Remove non-word characters (punctuation, spaces)
    setCharCount(characters.length);
  }, [text]);

  const handleReplace = () => {
    if (searchString) {
      const newText = text.replaceAll(searchString, replaceString);
      setText(newText);
    }
  };

  return (
    <div className="container">
      <h1>Text Analyzer</h1>
      <textarea
        rows="8"
        cols="50"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text here..."
      />
      <div className="stats">
        <p>Unique Words: {uniqueWordCount}</p>
        <p>Character Count (Excl. Spaces & Punctuation): {charCount}</p>
      </div>

      <div className="replace-section">
        <input
          type="text"
          placeholder="Search String"
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace String"
          value={replaceString}
          onChange={(e) => setReplaceString(e.target.value)}
        />
        <button onClick={handleReplace}>Replace All</button>
      </div>
    </div>
  );
};

export default TextAnalyzer;
