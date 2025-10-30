import React from 'react';

// Component that uses a wrapper div (creates unnecessary DOM element)
function ChildWithDiv() {
  return (
    <div className="wrapper-div">
      <p>Hey, I am a child</p>
      <p>My name is child component</p>
    </div>
  );
}

export default ChildWithDiv;