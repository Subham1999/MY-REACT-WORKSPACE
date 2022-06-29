import React from 'react';

const RealTimeWatch = () => {
  let time = new Date();

  // setInterval(() => {
  //   time = new Date();
  // }, 1000);

  return <p> Current Time : {time.toTimeString()}</p>;
};

export default RealTimeWatch;
