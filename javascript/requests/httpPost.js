// Function for http requests in vanilla JavaScript
// This is old school approach, but good to know that!

const requestPost = (url, data, callback, err = console.error) => {
  const request = new XMLHttpRequest();
  request.open('POST', url, true);
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.onload = () => callback(request.responseText);
  request.onerror = () => err(request);
  request.send(data);
};

const data = {
  id: 1,
  userName: 'John',
  age: 28
};

requestPost(
  'https://jsonplaceholder.typicode.com/posts',
  JSON.stringify(data),
  console.log
);
