axios({
  url: 'http://api.dev/file-download', // your url
  method: 'GET',
  responseType: 'blob', // important
}).then((response) => {
  const url = window.URL.createObjectURL(new Blob([response.data]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'file.pdf'); // or any other extension
  document.body.appendChild(link);
  link.click();
});
