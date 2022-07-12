import React, { useState } from 'react';

const HookInput = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  return (
    <React.Fragment>
      <input
        type="text"
        value={name.firstName}
        onChange={(event) => {
          setName({ ...name, firstName: event.target.value });
        }}
      />
      <br />
      <input
        type="text"
        value={name.lastName}
        onChange={(event) => {
          setName({ ...name, lastName: event.target.value });
        }}
      />
      <br />
      <button
        onClick={(event) => {
          setName({ firstName: '', lastName: '' });
        }}
      >
        reset
      </button>
      <br />
      <p>Hello {`${name.firstName} ${name.lastName}`}!</p>
    </React.Fragment>
  );
};

export default HookInput;
