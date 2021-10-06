import React, { useState, useEffect, useMemo } from 'react';

const isDOMavailable = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

const useSSR = () => {
  const [inBrowser, setInBrowser] = useState(isDOMavailable);

  useEffect(() => {
    setInBrowser(isDOMavailable);
    return () => {
      setInBrowser(false);
    };
  }, []);

  const useSSRObject = useMemo(
    () => ({
      isBrowser: inBrowser,
      isServer: !inBrowser,
      canUseWorkers: typeof Worker !== 'undefined',
      canUseEventListeners: inBrowser && !!window.addEventListener,
      canUseViewport: inBrowser && !!window.screen
    }),
    [inBrowser]
  );

  return useMemo(
    () => Object.assign(Object.values(useSSRObject), useSSRObject),
    [inBrowser]
  );
};
const SSRChecker = props => {
  let { isBrowser, isServer } = useSSR();

  return <p>{isBrowser ? 'Running on browser' : 'Running on server'}</p>;
};

ReactDOM.render(<SSRChecker />, document.getElementById('root'));

// Source: https://www.30secondsofcode.org/react/s/use-ssr
