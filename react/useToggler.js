import React, { ReactDOM } from 'react';

const useToggle = init => {
  const [state, setState] = React.useState(init);

  const toggleValue = React.useCallback(() => setState(prevState => !prevState), []);

  return [state, toggleValue];
};

// Usage
const Switch = () => {
  const [val, toggleVal] = useToggle(false);

  return <button onClick={toggleVal}>{val ? 'ON' : 'OFF'}</button>;
};

ReactDOM.render(<Switch />, document.getElementById('root'));
