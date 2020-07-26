const test = (data) => {
  const section = document.createElement('section');
  const image = document.createElement('img');
  image.src = data.image.src;
  image.alt = data.image.alt;
  section.appendChild(image);

  return section;
};

export { test };
