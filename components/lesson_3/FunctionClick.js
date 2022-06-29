import React from 'react';

const outSideClickHandler = () => {
  console.log('outSideClickHandler -working');
};

const FunctionClick = (props) => {
  const clickHandler = () => {
    count += 1;
    console.log(`"${props.text}"\tstate=`, count);
  };
  let count = 0;
  return (
    <div>
      <button className="btn btn-primary" onClick={clickHandler}>
        {props?.text}-{count}
      </button>
      <br />
      <button className="btn btn-primary" onClick={outSideClickHandler}>
        {props?.text}-{count}
      </button>
    </div>
  );
};

export default FunctionClick;
