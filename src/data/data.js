const pageData = {
  home: {
    sections: [
      {
        component: 'hero',
        title: '¡Hola! Esto es Ser Hábil',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: 'playing.jpg',
            alt: 'playground',
          },
          {
            src: 'childs.png',
            alt: 'kids',
          },
        ],
        backgroundImg: '',
      },
      {
        component: 'scroll-indicator',
        image: {
          src: 'arrow-scroll.png',
          alt: 'scroll page',
        },
        scrollTo: 'scroll',
        text: 'Haz scroll para continuar',
      },
      {
        component: 'programs',
        title: 'Nuestros programas',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: 'medio-acuatico.jpg',
            alt: 'medio acuático',
            text: 'Medio acuático y estimulación terapéutica',
          },
          {
            src: 'iniciacion.jpg',
            alt: 'iniciación al deporte',
            text: 'Iniciación y formación deportiva',
          },
          {
            src: 'estiramiento.jpg',
            alt: 'entrenamiento deportivo',
            text: 'Entrenamiento deportivo y actividad física',
          },
          {
            src: 'padres.jpg',
            alt: 'padres y madres',
            text: 'Grupo de padres y madres',
          },
        ],
      },
      {
        component: 'scenarios',
        title: 'Escenarios que utilizamos',
        images: [
          {
            src: 'basketball.png',
            alt: 'Basketball',
            text: 'CDPD',
          },
          {
            src: 'piscina-escuela.png',
            alt: 'Piscina Escuela',
            text: 'Piscina<br>Escuela 1',
          },
          {
            src: 'piscina-1.png',
            alt: 'Piscina',
            text: 'Piscina de actividades<br>sub&#8211;acuáticas',
          },
        ],
      },
      {
        component: 'events',
        title: 'Evento Destacado',
        subtitle: 'Catalina López Campeona nacional de natación',
        url: 'events.html',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: 'event-1.jpg',
            alt: 'Piscina',
          },
          {
            src: 'event-2.png',
            alt: 'Catalita',
          },
          {
            src: 'event-3.png',
            alt: 'Catalita',
          },
        ],
      },
    ],
  },
  about: {
    sections: [
      {
        component: 'hero',
        title: 'Unete a nosotros',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        aditionalTexts: [
          {
            text:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            bold: true,
          },
          {
            text:
              'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
            bold: false,
          },
        ],
        images: [
          {
            src: '',
            alt: '',
          },
          {
            src: '',
            alt: '',
          },
        ],
      },
      {
        component: 'imageComponent',
        image: {
          src: '',
          alt: '',
        },
      },
    ],
  },
  contact: {
    sections: [
      {
        component: 'hero',
        title: 'Unete a nosotros',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        images: [
          {
            src: '',
            alt: 'girl',
          },
          {
            src: '',
            alt: 'cellphome',
          },
        ],
      },
      {
        component: 'scroll-indicator',
        image: {
          src: 'arrow-scroll.png',
          alt: 'scroll page',
        },
        scrollTo: 'scroll',
        text: 'Haz scroll para continuar',
      },
      {
        component: 'contactForm',
        // TODO: complete info contact form
      },
      {
        component: 'map',
        // TODO: complete map reference info
      },
      {
        component: 'contactUs',
        title: 'Ponte en contacto con nosotros',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        contactInfo: [
          {
            label: 'Dirección',
            texts: ['Carrera 52 No. 67A-15', 'Torre C, Piso 7, Ruta N', 'Medellín, Colombia'],
          },
          {
            label: 'Teléfono',
            texts: ['+57 123 456 7890', '+57 123 456 7890'],
          },
          {
            label: 'Correo electrónico',
            texts: ['hola@serhabil.com', 'hola@serhabil.com'],
          },
        ],
      },
    ],
  },
  events: {
    sections: [
      {
        component: 'featuredEvent',
        title: 'Dia de campo',
        featured: true,
        image: {
          src: 'eventImage.jpg',
          alt: 'event image',
        },
        text:
          'Lorem ipsum dolor sit ame, consectetur adipiscing elit, sed do eiusmod tempor\n incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        moreInfo: [
          {
            text: 'Fecha',
            description: 'Febrero, 12, 2020',
          },
          {
            text: 'Hora',
            description: '3:30 p.m.',
          },
          {
            text: 'Lugar',
            description: 'Fundación Ser Hábil, sala 3',
          },
        ],
        buttonInfo: {
          text: 'Registrarme',
          link: 'https://docs.google.com/forms/u/0/',
        },
      },
      {
        component: 'eventsList',
        events: [
          {
            component: 'event',
            title: 'Curso de pintura con acuarelas',
            image: {
              src: 'eventImage.jpg',
              alt: 'event image',
            },
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            moreInfo: [
              {
                text: 'fecha',
                description: 'Febrero, 12, 2020',
              },
              {
                text: 'Hora',
                description: '3:30 p.m.',
              },
              {
                text: 'place',
                description: 'Fundación Ser Hábil, sala 3',
              },
            ],
            buttonInfo: {
              text: 'Registrarme',
              link: '',
            },
          },
          {
            component: 'event',
            title: 'Curso de pintura con acuarelas',
            image: {
              src: 'eventImage.jpg',
              alt: 'event image',
            },
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            moreInfo: [
              {
                text: 'fecha',
                description: 'Febrero, 12, 2020',
              },
              {
                text: 'Hora',
                description: '3:30 p.m.',
              },
              {
                text: 'place',
                description: 'Fundación Ser Hábil, sala 3',
              },
            ],
            buttonInfo: {
              text: 'Registrarme',
              link: '',
            },
          },
          {
            component: 'event',
            title: 'Curso de pintura con acuarelas',
            image: {
              src: 'eventImage.jpg',
              alt: 'event image',
            },
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            moreInfo: [],
            buttonInfo: {
              text: 'Registrarme',
              link: '',
            },
          },
          {
            component: 'event',
            title: 'Curso de pintura con acuarelas',
            image: {
              src: 'eventImage.jpg',
              alt: 'event image',
            },
            text:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
            moreInfo: [
              {
                text: 'fecha',
                description: 'Febrero, 12, 2020',
              },
            ],
            buttonInfo: {
              text: 'Registrarme',
              link: '',
            },
          },
        ],
      },
    ],
  },
  foundation: {
    sections: [
      {
        component: 'fundacion',
        hero: {
          image1: '',
          image2: '',
          title: 'Acerca de la fundación',
        },
        text1:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
        text2:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
        text3:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        bottomImage: '',
      },
    ],
  },
  common: {
    initalSections: [
      {
        component: 'navigation',
        image: {
          src: 'logo.png',
          alt: 'Logo Ser habil',
        },
        logoUrl: '/',
        navLinks: [
          {
            text: 'inicio',
            url: '/',
          },
          {
            text: 'eventos',
            url: '/events.html',
          },
          {
            text: 'fundación',
            url: '/foundation.html',
          },
          {
            text: 'contacto',
            url: '/contact.html',
          },
        ],
        socialMedia: {
          text: 'Encuéntranos en nuestras redes sociales:',
          socialLinks: [
            {
              image: {
                src: 'facebook-icon.png',
                alt: 'Facebook',
              },
              url: 'https://www.facebook.com',
            },
            {
              image: {
                src: 'instagram-icon.png',
                alt: 'instagram',
              },
              url: 'https://www.instagram.com',
            },
          ],
        },
      },
    ],
    finalSections: [
      {
        component: 'footer',
        logo: {
          href: '/',
          image: {
            src: 'footer-logo.png',
            alt: 'SER HABIL',
          },
        },
        items: [
          {
            text: 'Eventos',
            href: '/events',
          },
          {
            text: 'Fundación',
            href: '/foundation',
          },
          {
            text: 'Contacto',
            href: '/contact',
          },
        ],
        socialText: 'Encuéntranos en nuestras redes sociales:',
        socialLinks: [
          {
            href: 'https://www.facebook.com',
            icon: {
              src: 'facebook-icon.png',
              alt: 'facebook',
            },
          },
          {
            href: 'https://www.instagram.com',
            icon: {
              src: 'instagram-icon.png',
              alt: 'instagram',
            },
          },
        ],
      },
    ],
  },
};

export { pageData };
