export const downloadFileFromUrl = (url) => fetch(url)
  .then(response => response.blob())
  .then(imageBlob => {
    const imageObjectURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');

    link.href = imageObjectURL;
    link.setAttribute('download', url);
    document.body.appendChild(link);

    link.click();
  });

downloadFileFromUrl('file url');
