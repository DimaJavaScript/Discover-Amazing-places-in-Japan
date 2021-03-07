// Смена шапки start
const headerTop = document.querySelector('.header__top');
(function () {
  addEventListener('scroll', () => {
    if (pageYOffset >= 100) {
      headerTop.classList.add('header__top--active');
    } else {
      headerTop.classList.remove('header__top--active');
    }
  });
})();
// Смена шапки end

// Плавный скролл start
let linkNav = document.querySelectorAll('[href^="#"]'), //выбираем все ссылки к якорю на странице
  V = 0.7; // скорость, может иметь дробное значение через точку (чем меньше значение - тем больше скорость)
for (let i = 0; i < linkNav.length; i++) {
  linkNav[i].addEventListener(
    'click',
    function (e) {
      //по клику на ссылку
      e.preventDefault(); //отменяем стандартное поведение
      let w = window.pageYOffset, // производим прокрутка прокрутка
        hash = this.href.replace(/[^#]*(.*)/, '$1'); // к id элемента, к которому нужно перейти
      (t = document.querySelector(hash).getBoundingClientRect().top), // отступ от окна браузера до id
        (start = null);
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    },
    false,
  );
}
// Плавный скролл end

// Бургер start
const burgerLines = document.querySelector('.burger__lines');

burgerLines.addEventListener('click', () => {
  burgerLines.classList.toggle('burger__lines--active');

  const headerNavigation = document.querySelector('.header__navigation');
  headerNavigation.classList.toggle('header__navigation--active');

  const headerNavigationItem = document.querySelectorAll('.header__navigation-item');
  for (const item of headerNavigationItem) {
    item.addEventListener('click', () => {
      burgerLines.classList.remove('burger__lines--active');
      headerNavigation.classList.remove('header__navigation--active');
    });
  }
});
// Бургер end

// плавное появление блоков start
const coordinate = (elem, delay = 100) => {
  // Чтобы функция coordinate принимала еще значение,на которое нужно перемещать     |это (чтобы некоторые блоки появлялись немного позднее,потомучто бывает,что им очень быстро даеться клас еще вроди до появления блока)
  return elem.getBoundingClientRect().top - document.documentElement.clientHeight + delay;
};

(function benefitsCardCheked() {
  const benefitsCardBlock = document.querySelector('.benefits__cards');

  const benefitsCardBlockCordinate = coordinate(benefitsCardBlock, 100);

  document.addEventListener('scroll', () => {
    if (pageYOffset >= benefitsCardBlockCordinate) {
      benefitsCardBlock.classList.add('benefits__cards--cheked');
    }
  });
})();

(function tripsCardCheked() {
  const tripCardBlockTop = document.querySelector('.trip__cards-top');
  const tripCardBlockBottom = document.querySelector('.trip__cards-bottom');

  const tripCardBlockTopCordinate = coordinate(tripCardBlockTop, 100);
  const tripCardBlockBottomCordinate = coordinate(tripCardBlockBottom, 250);

  document.addEventListener('scroll', () => {
    if (pageYOffset >= tripCardBlockTopCordinate) {
      tripCardBlockTop.classList.add('trip__cards-top--cheked');
    }
  });

  document.addEventListener('scroll', () => {
    if (pageYOffset >= tripCardBlockBottomCordinate) {
      tripCardBlockBottom.classList.add('trip__cards-bottom--cheked');
    }
  });
})();

(function placesCardCheked() {
  const placesCardBlockTop = document.querySelector('.places__place-first');
  const placesCardBlockBottom = document.querySelector('.places__place-second');

  const placesCardBlockTopCordinate = coordinate(placesCardBlockTop, 120);
  const placesCardBlockBottomCordinate = coordinate(placesCardBlockBottom, 150);

  document.addEventListener('scroll', () => {
    if (pageYOffset >= placesCardBlockTopCordinate) {
      placesCardBlockTop.classList.add('places__place-first--cheked');
    }
  });

  document.addEventListener('scroll', () => {
    if (pageYOffset >= placesCardBlockBottomCordinate) {
      placesCardBlockBottom.classList.add('places__place-second--cheked');
    }
  });
})();

(function visitsCardCheked() {
  const visitsCardBlock = document.querySelector('.visit__cards');

  const visitsCardBlockCordinate = coordinate(visitsCardBlock, 250);

  document.addEventListener('scroll', () => {
    if (pageYOffset >= visitsCardBlockCordinate) {
      visitsCardBlock.classList.add('visit__cards--cheked');
    }
  });
})();
// плавное появление блоков end
