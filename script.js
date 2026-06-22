const defaultSiteData = {
  title: 'Bar da Curva',
  brand: {
    eyebrow: 'Bar da Curva',
    heading: 'Clima rústico, sabores artesanais',
    logoAlt: 'Logo Bar da Curva',
    logoSrc: 'Logo do Bar da Curva.png'
  },
  hero: {
    eyebrow: 'Bem-vindo ao seu ponto de encontro',
    heading: 'Drink especial, música ao vivo e ambiente acolhedor',
    hint: 'Traga os amigos para uma noite especial.',
    text:
      'No Bar da Curva você encontra petiscos saborosos, cervejas artesanais e uma atmosfera rústica com conforto caseiro.',
    buttonPrimary: 'Ver cardápio',
    buttonSecondary: 'Reservar mesa'
  },
  about: {
    label: 'Sobre o bar',
    heading: 'Um espaço rústico para celebrar com os amigos',
    text:
      'O Bar da Curva é o lugar ideal para quem quer relaxar, provar bebidas especiais e curtir boa música. Aqui, o atendimento é familiar, o ambiente é acolhedor e cada detalhe foi pensado para você se sentir em casa.'
  },
  highlights: [
    'Ambiente rústico e aconchegante',
    'Bebidas artesanais e coquetéis especiais',
    'Petiscos preparados na hora',
    'Eventos com música ao vivo'
  ],
  menu: {
    label: 'Cardápio',
    heading: 'Sabores feitos para compartilhar',
    items: [
      {
        title: 'Tábuas rústicas',
        text: 'Frios selecionados, queijos e pães artesanais para petiscar com a família.'
      },
      {
        title: 'Coquetéis especiais',
        text: 'Drinks autorais preparados com ingredientes frescos e toques rústicos.'
      },
      {
        title: 'Cervejas artesanais',
        text: 'Variedade de rótulos nacionais e importados para acompanhar a noite.'
      },
      {
        title: 'Petiscos clássicos',
        text: 'Bolinho de arroz, fritas temperadas e outras delícias que fazem sucesso.'
      }
    ]
  },
  events: {
    label: 'Eventos',
    heading: 'Programação para os melhores encontros',
    items: [
      {
        title: 'Happy Hour',
        text: 'Todos os dias a partir das 17h com descontos em bebidas selecionadas.'
      },
      {
        title: 'Música ao Vivo',
        text: 'Sextas e sábados com artistas locais e repertório variado.'
      },
      {
        title: 'Noite de jogos',
        text: 'Domingos para jogar, relaxar e aproveitar promoções especiais.'
      }
    ]
  },
  contact: {
    label: 'Contato',
    heading: 'Venha nos visitar',
    hours: 'Aberto de terça a domingo, das 17h às 00h',
    phone0: 'Tel: (33) 9994-7787',
    phone1: 'Tel: (31) 8419-9037',
    cardHeading: 'Reserve sua mesa',
    cardText: 'Envie uma mensagem com a data e o número de pessoas para garantir seu lugar.',
    email: 'contato@barbenrustico.com.br'
  },
  footer: {
    info: 'Bar da Curva • Rua da Curva, 123 • Aberto de terça a domingo'
  }
};

function applySiteData(data) {
  document.title = data.title || defaultSiteData.title;

  const setText = (selector, value) => {
    const el = document.querySelector(selector);
    if (el && value !== undefined && value !== null) {
      el.textContent = value;
    }
  };

  setText('.brand .eyebrow', data.brand.eyebrow);
  setText('#brand-heading', data.brand.heading);
  setText('#hero-eyebrow', data.hero.eyebrow);
  setText('#hero-heading', data.hero.heading);
  setText('#hero-hint', data.hero.hint);
  setText('#hero-text', data.hero.text);
  setText('#hero-primary', data.hero.buttonPrimary);
  setText('#hero-secondary', data.hero.buttonSecondary);
  setText('#about-label', data.about.label);
  setText('#about-heading', data.about.heading);
  setText('#about-text', data.about.text);
  data.highlights.forEach((value, index) => {
    setText(`#highlight-${index + 1}`, value);
  });
  setText('#menu-label', data.menu.label);
  setText('#menu-heading', data.menu.heading);
  data.menu.items.forEach((item, index) => {
    setText(`#menu-title-${index + 1}`, item.title);
    setText(`#menu-text-${index + 1}`, item.text);
  });
  setText('#events-label', data.events.label);
  setText('#events-heading', data.events.heading);
  data.events.items.forEach((item, index) => {
    setText(`#event-title-${index + 1}`, item.title);
    setText(`#event-text-${index + 1}`, item.text);
  });
  setText('#contact-label', data.contact.label);
  setText('#contact-heading', data.contact.heading);
  setText('#contact-address', data.contact.address);
  setText('#contact-hours', data.contact.hours);
  setText('#contact-phone0', data.contact.phone0);
  setText('#contact-phone1', data.contact.phone1);
  setText('#contact-card-heading', data.contact.cardHeading);
  setText('#contact-card-text', data.contact.cardText);
  const emailLink = document.querySelector('#contact-email');
  if (emailLink) {
    emailLink.textContent = data.contact.email;
    emailLink.href = `mailto:${data.contact.email}`;
  }
  setText('#footer-info', data.footer.info);
}

const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (typeof applySiteData === 'function') {
  applySiteData(defaultSiteData);
}

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
    });
  });
}

const currentYear = document.getElementById('currentYear');
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
