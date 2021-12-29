window.oncontextmenu = () => {
  console.log('right click');
  return false; // cancel default menu
};
//or

window.addEventListener(
  'contextmenu',
  () => {
    console.log('right click');
    return false; // cancel default menu
  },
  false
);
