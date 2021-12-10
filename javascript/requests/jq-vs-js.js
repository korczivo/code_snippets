// With jQuery
$.ajax({
  url: "/api-route"
}).done(function(data) {
  // ...
}).fail(function() {
  // Handle error
});

// Without jQuery ✅
fetch("/api-route")
  .then(data => {
    // Handle data
  }).catch(error => {
  // Handle error
});
