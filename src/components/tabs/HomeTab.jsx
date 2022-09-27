import React from 'react';

export default function HomeTab({ nodeRef }) {
  return (
    <>
        <div className="home" ref={nodeRef}>
            <h1>Home</h1>
        </div>
    </>
  );
}

