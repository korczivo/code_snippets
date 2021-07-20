// Helper function returns an array of all the sibling of the given element.
const getSiblings = el => [...el.parentNode.childNodes].filter(node => node !== el);

// Examples
getSiblings(document.querySelector('head')); // returns ['body']
