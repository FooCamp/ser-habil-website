const scrollIndicatorMethods = () => {
  const button = document.querySelector('.scroll__button');
  const scrollFunction = () => {
    const scrollAnimation = document.getElementById('scroll');
    const position = scrollAnimation.offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  };
  button.addEventListener('click', scrollFunction);
};

export { scrollIndicatorMethods };
