// Adds multiple event listeners with the same handler to an element.

const addMultipleListeners = (el, types, listener, options, useCapture) => {
  types.forEach(type =>
    el.addEventListener(type, listener, options, useCapture)
  );
};

// Usage

addMultipleListeners(
  document.querySelector('.my-element'),
  ['click', 'mousedown'],
  () => { console.log('hello!') }
);
