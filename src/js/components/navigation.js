const renderLinks = (links) => {
  let linksMarkup = '';
  links.forEach(link => {
    linksMarkup += `<li><a href="${link.url}">${link.text}</a></li>\n` 
  });
  return linksMarkup;
}

const navigationComponent = (data) => {
  const navigation = document.createElement('SECTION');
  const overlayLinks = renderLinks(data.navLinks) 
  let navigationContent = `
  <header>
  <div>
  <a href="${data.logoUrl}">
  <img src="${data.image.src}" alt="${data.image.alt}">
  </a>
  <button>
  <img src="menu.png" alt="menu">
  </button>
  </div>
  <nav class="topnav">
  <button>
  <img src="close.png" alt="close">
  </button>
    <ul class="myLinks">
    ${overlayLinks}
    </ul>
  </nav>
    </header>
  `
  navigation.innerHTML = navigationContent
  return navigation;
}

export { navigationComponent }