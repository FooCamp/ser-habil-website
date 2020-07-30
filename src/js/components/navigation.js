import {newContainer} from './helpers'

const renderLinks = (links, type) => {
  const linkNodes = links.map(link => {
    const menuLink = newContainer('a');
    menuLink.href = link.url;

    if (type === 'image'){
      const icon = newContainer('img')
      icon.src = link.image.src;
      icon.alt = link.image.alt;
      menuLink.appendChild(icon)
    } else {
      menuLink.innerText = link.text;
    }
    const menuItem = newContainer('li',[menuLink]);
    return menuItem;
  })
  return linkNodes;
}
const navigationComponent = (data) => {
  //Header logo and expand menu.
  const imageLogo = newContainer('img');
  imageLogo.src = data.image.src;
  imageLogo.alt = data.image.alt;

  const logoLink = newContainer('a',[imageLogo],['nav__image']) 
  logoLink.href = data.logoUrl;

  const imageMenu = newContainer('img')
  imageMenu.src = 'menu.png';
  imageMenu.alt = 'menu icon';

  const menuButton = newContainer('button',[imageMenu],['nav__icon'])
  
  const collapsedMenuContainer = newContainer('div',[logoLink, menuButton],['nav__main'])
  // Overlay
  const imageClose = newContainer('img');
  imageClose.src = 'close.png';
  imageClose.alt = 'close button';

  const overlayLinks = renderLinks(data.navLinks,'text');
  const menuList = newContainer('ul', overlayLinks, ['nav__overlay-list']);
  const overlayButton = newContainer('button',[imageClose],['nav__icon','nav__icon--close']);
  
  const copyText = newContainer('p',copyText,['nav__overlay-text']);
  copyText.innerText = data.socialMedia.text;
  const socialIcons = renderLinks(data.socialMedia.socialLinks, 'image')
  const socialList = newContainer('ul',socialIcons,['nav__overlay-social']);
  

  const socialMedia = newContainer('div',[copyText, socialList ],[]);
  const overlay = newContainer('nav',[overlayButton, menuList, socialMedia],['nav__overlay'])
  

  const header = newContainer('header',[collapsedMenuContainer, overlay],['nav']);
  menuButton.addEventListener('click',()=>{
    overlay.classList.add('nav__overlay--active')
  })
  overlayButton.addEventListener('click', ()=>{
    overlay.classList.remove('nav__overlay--active')
  })
  return header;
}

export { navigationComponent }