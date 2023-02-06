import "./App.css";
import React, { useState, useEffect } from 'react';

const Document = ({ title, content, handleScroll }) => {
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="content" onScroll={handleScroll}>
        {content}
      </div>
    </div>
  );
};

function App() {
  const [content, setContent] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    fetch('https://jaspervdj.be/lorem-markdownum/markdown.txt')
      .then(response => response.text())
      .then(text => {
        setContent(text);
      });
  }, []);

  const handleScroll = event => {
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight) {
      setIsButtonEnabled(true);
    }
  };

  return (
    <div>
      <Document title="Terms and Conditions" content={content} handleScroll={handleScroll} />
      <button disabled={!isButtonEnabled}>I Agree</button>
    </div>
  );
}

export default App;

