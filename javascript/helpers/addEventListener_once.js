const el = document.getElementById("btn");

function myClickHandler(){
  console.log('this click will only fire once')
}

el.addEventListener('click', myClickHandler, {
  once: true,
});
