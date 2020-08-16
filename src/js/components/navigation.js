import { newContainer, newMultimedia, newText } from './helpers';

const renderLinks = (links, type) => {
  const linkNodes = links.map((link) => {
    const menuLink = newContainer('a', [], ['nav__overlay-link']);
    menuLink.href = link.url;

    if (type === 'image') {
      const icon = newMultimedia('img', link.image);
      menuLink.appendChild(icon);
    } else {
      menuLink.innerText = link.text;
    }
    const menuItem = newContainer('li', [menuLink]);

    return menuItem;
  });

  return linkNodes;
};

const navigationComponent = (data) => {
  // Header logo and expand menu.
  const imageLogo = newMultimedia('img', data.image);

  const logoLink = newContainer('a', [imageLogo], ['nav__image']);
  logoLink.href = data.logoUrl;

  const imageMenu = newMultimedia('img', { src: 'menu.png', alt: 'menu icon' });

  const menuButton = newContainer('button', [imageMenu], ['nav__icon']);

  const collapsedMenuContainer = newContainer('div', [logoLink, menuButton], ['nav__main']);

  // Overlay
  const imageClose = newMultimedia('img', {
    src: 'close.png',
    alt: 'close button',
  });

  const overlayLinks = renderLinks(data.navLinks, 'text');
  const menuList = newContainer('ul', overlayLinks, ['nav__overlay-list']);
  const overlayButton = newContainer('button', [imageClose], ['nav__icon', 'nav__icon--close']);

  const copyText = newText('p', data.socialMedia.text, ['nav__overlay-text']);
  const socialIcons = renderLinks(data.socialMedia.socialLinks, 'image');
  const socialList = newContainer('ul', socialIcons, ['nav__overlay-social']);

  const socialMedia = newContainer('div', [copyText, socialList], []);
  const overlay = newContainer('nav', [overlayButton, menuList, socialMedia], ['nav__overlay']);

  const header = newContainer('header', [collapsedMenuContainer, overlay], ['nav']);

  menuButton.addEventListener('click', () => {
    overlay.classList.add('nav__overlay--active');
  });
  overlayButton.addEventListener('click', () => {
    overlay.classList.remove('nav__overlay--active');
  });

  return header;
};

export { navigationComponent };
