import images from '../../static/assets/*.png';

const navigationComponent = (data) => {

  const navigation = document.createElement('SECTION');
  const image = import(`../../static/assets/${data.image}`)
  let navigationContent = `
    <header>
  <img src="${images['logo']}" alt="ser habil logo" href="#">
  <nav>
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
  console.log(images)
  return navigation;
}

export { navigationComponent }