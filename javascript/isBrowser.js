// If you working with server-side rendering this is really helpful function!

const isBrowser = () => ![typeof window, typeof document].includes('undefined');

// Usage
isBrowser(); // true (browser)
isBrowser(); // false (Node)
