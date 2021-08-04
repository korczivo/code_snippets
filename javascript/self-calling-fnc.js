// Self-calling function is a frequently used pattern, but what it actually is?
// It's a function that executes automatically when you create it, and has the following form:

(function(){
  // private code that will be executed automatically
})();
(function(a,b){
  const sum = a + b;
  return sum;
})(5,5)
