// React lifecycle hook that runs an effect only once.

import {useEffectOnce} from 'react-use';

const Demo = () => {
  useEffectOnce(() => {
    console.log('Running effect once on mount')

    return () => {
      console.log('Running clean-up of effect on unmount')
    }
  });

  return null;
};

// Source: https://github.com/streamich/react-use/blob/master/docs/useEffectOnce.md
