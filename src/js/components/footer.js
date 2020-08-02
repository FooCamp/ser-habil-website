import { newText, newMultimedia, newLink, newContainer } from './helpers';

const createlinks = (datalinks) =>{
  const arraylinks = datalinks.map((link)=>{
    const linksitems = newLink(link.href,link.text,['footer__data-links']);
    const listlink = newContainer('li',[linksitems],['footer__items-list']);
    return listlink;
  });
  return arraylinks;
}

const createicons = (dataicons) => {
  const arrayicons = dataicons.map((icons)=>{
    const iconsimages = newMultimedia('img',icons.icon.src,icons.icon.alt,['footer__icons']);
    const iconslinks = newLink(icons.href,'',['footer__icons-links']);
    iconslinks.target = '_blank';
    iconslinks.appendChild(iconsimages);
    return iconsLinks
  });
  return arrayicons;
}


const footerComp = (data) => {

  const logofooter = newMultimedia('img', data.logo.image.src, data.logo.image.alt,['footer__logo']);
  const linklogo = newLink(data.logo.href,'',['footer__link-logo']);
  const listlink = createLinks(data.items);
  const items = newContainer('ul',listlink,['footer__items']);
  const socialtext = newText('p',data.socialtext,['footer__social-text']);
  const socialicons = createIcons(data.sociallinks);
  linklogo.appendChild(logofooter);
  const footer = newContainer('footer',[linklogo,items,socialtext,...socialicons],['footer']);

  return footer;

};



export { footerComp };
