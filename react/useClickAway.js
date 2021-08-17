// React UI hook that triggers a callback when user clicks outside the target element.

import React, { useRef } from 'react';
import { useClickAway } from 'react-use';

const Demo = () => {
  const ref = useRef(null);
  useClickAway(ref, () => {
    console.log('OUTSIDE CLICKED');
  });

  return (
    <div ref={ref} style={{
      width: 200,
      height: 200,
      background: 'red',
    }} />
  );
};

// Reference:
// useClickAway(ref, onMouseEvent)
// useClickAway(ref, onMouseEvent, ['click'])
// useClickAway(ref, onMouseEvent, ['mousedown', 'touchstart'])

// Source: https://github.com/streamich/react-use/blob/master/docs/useClickAway.md

