import React from 'react';
import './App.css';
import ChildWithDiv from './components/ChildWithDiv';
import ChildWithFragment from './components/ChildWithFragment';
import ChildWithShorthandFragment from './components/ChildWithShorthandFragment';
import Bookshelf from './components/Bookshelf';

function App() {
  // Sample book data for the Bookshelf component
  const books = [
    { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee" },
    { id: 2, title: "1984", author: "George Orwell" },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen" },
    { id: 4, title: "The Great Gatsby", author: "F. Scott Fitzgerald" }
  ];

  return (
    <div className="app">
      <header>
        <h1>React Fragments Demo</h1>
        <p>This demo shows the difference between using wrapper divs and React fragments.</p>
      </header>

      <main>
        <section className="section">
          <h2>Example 1: Components with Wrapper Divs</h2>
          <p>Notice the unnecessary wrapper divs in the DOM (highlighted in red):</p>
          <div className="parent">
            <ChildWithDiv />
            <ChildWithDiv />
          </div>
        </section>

        <section className="section">
          <h2>Example 2: Components with React.Fragment</h2>
          <p>Same components but using React.Fragment to avoid wrapper divs:</p>
          <div className="parent">
            <ChildWithFragment />
            <ChildWithFragment />
          </div>
        </section>

        <section className="section">
          <h2>Example 3: Components with Shorthand Fragment Syntax</h2>
          <p>Using the shorthand {'<>'} syntax for cleaner code:</p>
          <div className="parent">
            <ChildWithShorthandFragment />
            <ChildWithShorthandFragment />
          </div>
        </section>

        <section className="section">
          <h2>Example 4: Fragments with Keys in Lists</h2>
          <p>When mapping over arrays, fragments can still receive key props:</p>
          <Bookshelf books={books} />
        </section>

        <section className="section">
          <h2>Inspect the DOM</h2>
          <p>
            <strong>Instructions:</strong> Open your browser's developer tools and inspect 
            the DOM structure. Notice how:
          </p>
          <ul>
            <li>Example 1 creates unnecessary wrapper divs</li>
            <li>Examples 2 & 3 don't add extra DOM elements</li>
            <li>Example 4 shows fragments working with keys in lists</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;