import React from 'react';

// Component that uses shorthand fragment syntax (no wrapper element in DOM)
function ChildWithShorthandFragment() {
  return (
    <>
      <div className="fragment-content">
        <p>Hey, I am a child</p>
        <p>My name is child component</p>
      </div>
    </>
  );
}

export default ChildWithShorthandFragment;