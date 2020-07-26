// import images from '../../static/assets/*.png';

const navigationComponent = (data) => {

  const navigation = document.createElement('SECTION');
  const image = import(`../../static/assets/${data.image}`)
  let navigationContent = `
  <header>
  <img src="${image}" alt="ser habil logo" href="#">
  <nav class:"topnav" src="" alt="Menu icon">
    <ul id="myLinks" >
      <li><a href="#inicio"></a>inicio</li>
      <li><a href="#eventos"></a>eventos</li>
      <li><a href="#fundacion"></a>fundacion</li>
      <li><a href="#contacto"></a>contacto</li>
    </ul>
  </nav>
    </header>
  `
  navigation.innerHTML = navigationContent
  return navigation;
}

export { navigationComponent }