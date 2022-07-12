import React, { useState } from 'react';

const PersonElement = ({ name }) => {
  return <h5>{name}</h5>;
};

const HookArray = () => {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  const [person, setPerson] = useState([]);

  const personElementList = person.map((person) => (
    <PersonElement name={person.name} key={person.name} />
  ));

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
        onClick={() => {
          setPerson([
            ...person,
            {
              name: `${name.firstName} ${name.lastName}`,
            },
          ]);
        }}
      >
        add new
      </button>
      <button
        onClick={() => {
          setName({ firstName: '', lastName: '' });
        }}
      >
        reset
      </button>
      <br />
      {name.firstName && <p>Hello {`${name.firstName} ${name.lastName}`}!</p>}
      <hr />
      {personElementList}
    </React.Fragment>
  );
};

export default HookArray;
