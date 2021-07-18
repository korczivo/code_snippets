// Fetches all images from within an element and puts them into an array.

const getImages = (parent, duplicated = false) => {
  const images = [...parent.getElementsByTagName('img')].map(img =>
    img.getAttribute('src')
  );
  return duplicated ? images : [...new Set(images)];
};

// Usage
getImages(document, true); // ['img1.jpg', 'img2.png', 'img1.png', '...']
getImages(document, false); // ['img1.jpg', 'img2.png', '...']
