// React hook that returns the current value of a cookie, a callback to update the cookie and a callback to delete the cookie.
import React, { useEffect, useState } from 'react'
import { useCookie } from "react-use";

const Demo = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter(c => c + 1);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};

// Source:
// https://github.com/streamich/react-use/blob/master/docs/useCookie.md

