// Runs the callback whenever the user clicks outside of the selected element.

const onClickOutside = (element, callback) => {
  document.addEventListener('click', e => {
    if (!element.contains(e.target)) callback();
  });
};

// Usage
onClickOutside('#my-element', () => console.log('here run your callback'));
