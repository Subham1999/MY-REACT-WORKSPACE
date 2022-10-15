import React, { useState, useContext } from 'react';

export const UserContext = React.createContext('');

const UserContextDemo = () => {
  const userContext = useContext(UserContext);
  return (
    <>
      <div>UserContext : {JSON.stringify(userContext)}</div>
    </>
  );
};

export default UserContextDemo;
