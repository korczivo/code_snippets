// React sensor hook that tracks state of a CSS media query.

import React from 'react';
import { useMedia } from 'react-use';

const DemoComponent = () => {
  const isWide = useMedia('(min-width: 480px)');

  return (
    <div>
      Screen is wide: {isWide ? 'Yes' : 'No'}
    </div>
  );
}

// Reference:
// useMedia(query: string, defaultState: boolean = false): boolean;


// Source: https://github.com/streamich/react-use/blob/master/docs/useMedia.md
