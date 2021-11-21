import React from 'react';

export const ReactComponent = ({ data, ...restProps }) => {
  console.log(restProps);
  return (
    <div>
      react component
    </div>
  )
};
