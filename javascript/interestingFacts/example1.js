// Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.
<script src="myscript.js"></script>

// With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.
// Async is more useful when you really don't care when the script loads and nothing else that is user dependent depends upon that script loading.(for scripts likes Google analytics)
<script async src="myscript.js"></script>

// With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files.
<script defer src="myscript.js"></script>
