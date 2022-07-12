import React, { useState } from 'react';

const HookCounter = () => {
  const initialValue = 0;

  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>Counter - {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        click me
      </button>
    </React.Fragment>
  );
};

export default HookCounter;
