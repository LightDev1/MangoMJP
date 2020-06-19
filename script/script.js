const menuBar = document.querySelector('.move__menu'),
    burgerBtn = document.querySelector('.fa-bars'),
    closeBtn = document.querySelector('.close'),
    tagMane = document.querySelector('main'),
    mainPage = document.querySelector('.main__page__content'),
    locationPath = document.querySelector('.location');

const articlesMainContainer = document.createElement('div');
const aboutContainer = document.createElement('div');

const toggleBar = () => {
    menuBar.classList.toggle('move__menu__active');
};

const showMainPage = () => {
    mainPage.classList.remove('hide');

    locationPath.textContent = 'Главная';

    toggleBar();

    articlesMainContainer.classList.add('hide');
    articlesMainContainer.classList.remove('active');
    articlesMainContainer.innerHTML = '';

    
    aboutContainer.classList.remove('active');
    aboutContainer.style.display = 'none';
    aboutContainer.innerHTML = '';
};

const showArticlesPage = () => {
    if (!articlesMainContainer.classList.contains('active')) {
      mainPage.classList.add('hide');
      aboutContainer.classList.remove('active');
      aboutContainer.style.display = 'none';
      aboutContainer.innerHTML = '';

      locationPath.textContent = 'Статьи';

      toggleBar();

      articlesMainContainer.className = 'articles__container';
      articlesMainContainer.classList.add('active');
  
      let articlesHeader = document.createElement('div');
      articlesHeader.classList.add('articles__header');
      articlesHeader.innerHTML = `
          <h2>Все статьи</h2>
          <h2>Избранное</h2>
      `;
  
      const articlesContainer = document.createElement('div');
      articlesContainer.className = 'articles';
  
      tagMane.insertAdjacentElement('afterbegin', articlesMainContainer);
      
      articlesMainContainer.insertAdjacentElement('afterbegin', articlesHeader);
      articlesMainContainer.insertAdjacentElement('beforeend', articlesContainer);
  
      createArticle(articlesContainer);
      createArticle(articlesContainer);
      createArticle(articlesContainer);
      createArticle(articlesContainer);
    }
};

const createArticle = (container) => {
    const article = document.createElement('a');
    article.className = 'article';

    article.insertAdjacentHTML('beforeend', `
        <img src="./images/article-img.jpg" alt="article">
        <h4>Название статьи</h4>
        <p>Описание статьи</p>
    `);

    container.insertAdjacentElement('beforeend',article);
};

const showAboutPage = () => {
  if (!aboutContainer.classList.contains('active')) {
      mainPage.classList.add('hide');
      aboutContainer.style.display = 'flex';
      articlesMainContainer.classList.add('hide');
      articlesMainContainer.classList.remove('active');
      articlesMainContainer.innerHTML = '';

      locationPath.textContent = 'О приложении';

      toggleBar();

      aboutContainer.className = 'about__container';
      aboutContainer.classList.add('active');

      tagMane.insertAdjacentElement('beforeend', aboutContainer);

      let aboutContent = document.createElement('div');
      aboutContent.className = 'about__content';
      aboutContent.insertAdjacentHTML('beforeend', `
            <h1>Логотип</h1>
            <h2>Mango MJP</h2>
            <p>0.0.0</p>
      `);

      aboutContainer.insertAdjacentElement('beforeend', aboutContent);
  }
};

const clickManger = (event) => {
    let target = event.target;

    if (target.closest('.main__page')) {
      showMainPage();
  }

    if (target.closest('.articles__page')) {
        showArticlesPage();
    }

    if (target.closest('.about')) {
      showAboutPage();
  }
};
document.addEventListener('swipe', () => {
    menuBar.classList.add('move__menu__active');
});

document.addEventListener('click', (event) => {
    let target = event.target;

    if (!target.closest('.move__menu') && !target.classList.contains('fa-bars')) {
      menuBar.classList.remove('move__menu__active');
    }
});

menuBar.addEventListener('unswipe', () => {
  menuBar.classList.remove('move__menu__active');
});

burgerBtn.addEventListener('click', toggleBar);
closeBtn.addEventListener('click', toggleBar);
menuBar.addEventListener('click', clickManger);

new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 5000
    },
  });
