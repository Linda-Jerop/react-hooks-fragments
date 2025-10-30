import React from 'react';

// Component that uses React.Fragment (no wrapper element in DOM)
function ChildWithFragment() {
  return (
    <React.Fragment>
      <div className="fragment-content">
        <p>Hey, I am a child</p>
        <p>My name is child component</p>
      </div>
    </React.Fragment>
  );
}

export default ChildWithFragment;