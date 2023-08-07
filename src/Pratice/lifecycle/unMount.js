import React, { useState } from 'react';
import Counter from './Component';

function UnMount() {
  const [showCounter, setShowCounter] = useState(true);

  const handleUnmount = () => {
    setShowCounter(false);
  };

  return (
    <div>
      {showCounter && <Counter />}
      <button onClick={handleUnmount}>Unmount Counter</button>
    </div>
  );
}

export default UnMount;
