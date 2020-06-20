const menuBar = document.querySelector('.move__menu'),
    burgerBtn = document.querySelector('.fa-bars'),
    closeBtn = document.querySelector('.close'),
    tagMane = document.querySelector('main'),
    mainPage = document.querySelector('.main__page__content'),
    locationPath = document.querySelector('.location');

const articlesMainContainer = document.createElement('div'),
   aboutContainer = document.createElement('div'),
   settingsContainer = document.createElement('div');

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

const showSettingsPage = () => {
  if (!settingsContainer.classList.contains('active')) {
    mainPage.classList.add('hide');

    articlesMainContainer.classList.add('hide');
    articlesMainContainer.classList.remove('active');
    articlesMainContainer.innerHTML = '';

    aboutContainer.classList.remove('active');
    aboutContainer.style.display = 'none';
    aboutContainer.innerHTML = '';

    locationPath.textContent = 'Настройки';

    toggleBar();

    settingsContainer.className = 'settings__container';

    const settings = document.createElement('div');
    settings.className = 'settings';
    settings.insertAdjacentHTML('beforeend', `
        <div class="theme__settings">
          <h2>Цветовая тема</h2>
          <div class="dark__container">
            <h3>Тёмная тема</h3>
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
          </div>
          <div class="colorized__container">
            <h3>Выберите цвет темы</h3>
            <div class="colors">
                <button data-color="#880015" class="color__1"></button>
                <button data-color="#ED1C24" class="color__2"></button>
                <button data-color="#FF7F27" class="color__3"></button>
                <button data-color="#FFF200" class="color__4"></button>
                <button data-color="#22B14C" class="color__5"></button>
                <button data-color="#00A2E8" class="color__6"></button>
                <button data-color="#3F48CC" class="color__7"></button>
                <button data-color="#A349A4" class="color__8"></button>
                <button data-color="#B97A57" class="color__9"></button>
                <button data-color="#FFAEC9" class="color__10"></button>
                <button data-color="#FFC90E" class="color__11"></button>
                <button data-color="#EFE4B0" class="color__12"></button>
                <button data-color="#99D9EA" class="color__13"></button>
            </div>
          </div>
        </div>
        <div class="language__settings">
            <h2>Выберите язык</h2>
            <ul>
                <li class="ru">Русский</li>
                <li class="en">English</li>
            </ul>
        </div>
    `);

    tagMane.insertAdjacentElement('beforeend', settingsContainer);

    settingsContainer.insertAdjacentElement('beforeend', settings);
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

    if (target.closest('.settings')) {
        showSettingsPage();
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
