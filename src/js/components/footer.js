const footerComp = (footerData) => {
  const footer = document.createElement('FOOTER');
  const logoFooter = document.createElement('IMG');
  const  linkLogo = document.createElement('A');

  logoFooter.setAttribute('src', footerData.component.logo.image.src);
  logoFooter.appendChild(footer);

  footer.classList.add('footer');
  logoFooter.classList.add('logo-footer');




  return footer;


};

export { footerComp };
