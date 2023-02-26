window.addEventListener("load", () => {
  if (
    /MSIE 9/i.test(navigator.userAgent) ||
    /rv:11.0/i.test(navigator.userAgent) ||
    /rv:10.0/i.test(navigator.userAgent)
  ) {
    document.body.className = "ie";
    window.location = "/ie.html";
  }

  setGlobalCssVar();

  lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
  });
});

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);

  resizeTimer = setTimeout(() => {
    resizeFunction([setGlobalCssVar]);
  }, 250);
});


// document.addEventListener("click", (e) => {
//
//   const eTarget = e.target.closest(`[${DATA_ACTION}]`);
//   let actionList = [];
//
//   if (eTarget) {
//     const actiones = eTarget.getAttribute(DATA_ACTION);
//     actionList = actiones.split(" ");
//     actionList.map((item) => {
//       console.log(item, 'item');
//       if (item === BURGER_MENU_SWITCHER) {
//         const burgerMenu = document.querySelector("[data-burger-menu]");
//         eTarget.classList.toggle(ACTIVE_CLASS);
//         if (burgerMenu) {
//           scrollToggle();
//           menuBgOverlayToggle();
//           burgerMenu.classList.toggle(ACTIVE_CLASS);
//         }
//       }
//
//       if (item === "accordion-switcher") {
//         const DROPDOWN_SELECTOR = "[data-accordion-dropdown]";
//         const acc = eTarget.closest("[data-accordion]");
//         const dropDown = acc.querySelector(DROPDOWN_SELECTOR);
//
//         acc.classList.toggle(ACTIVE_CLASS);
//         dropDown.slideToggle();
//
//         getSiblings(acc).map((item) => {
//           item.classList.remove(ACTIVE_CLASS);
//
//           const itemDropDown = item.querySelector(DROPDOWN_SELECTOR);
//           if (itemDropDown) {
//             itemDropDown.slideUp();
//           }
//         });
//       }
//
//       if (item === "load-youtube-iframe") {
//         onYouTubeIframeAPIReady(eTarget, eTarget.getAttribute("data-id"));
//       }
//
//       if (item === "tabs-button") {
//         const TABS_BTN_SELECTOR = "data-tab-btn";
//         const TABS_CONTENT_SELECTOR = "data-tab-content";
//         const dataTabSelector = eTarget.getAttribute(TABS_BTN_SELECTOR);
//
//         eTarget.classList.add(ACTIVE_CLASS);
//
//         getSiblings(eTarget.closest("li")).forEach((item) => {
//           item.querySelector(`[${TABS_BTN_SELECTOR}]`).classList.remove(ACTIVE_CLASS);
//         });
//
//         const targetContent = document.querySelectorAll(
//           `[${TABS_CONTENT_SELECTOR}="${dataTabSelector}"]`
//         );
//
//         if (targetContent.length) {
//           targetContent.forEach((item) => {
//             getSiblings(item).forEach((itemInner) => {
//               itemInner.classList.remove(ACTIVE_CLASS);
//             });
//
//             item.classList.add(ACTIVE_CLASS);
//           });
//         }
//       }
//     });
//   }
// });



// burger


const menuBtn = document.querySelector('.header-burger')
const menu = document.querySelector('.menu__body')
const menuTwo = document.querySelector('.system-rights')

const body = document.body;

if (menu && menuBtn && menuTwo) {
  menuBtn.addEventListener('click', e => {
    menu.classList.toggle('_active')
    menuBtn.classList.toggle('_active')
    menuTwo.classList.toggle('_active')
    body.classList.toggle('lock')
  })

  menu.addEventListener('click', e => {
    if (e.target.classList.contains('menu__body')) {
      menu.classList.remove('_active')
      menuBtn.classList.remove('_active')
      body.classList.remove('lock')
    }
  })

  menu.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('_active')
      menuBtn.classList.remove('_active')
      body.classList.remove('lock')
    })
  })
}



const setGlobalCssVar = () => {
  // setCssVariable("--viewport-width", `${window.innerWidth}px`);
  // setCssVariable("--viewport-height", `${window.innerHeight}px`);
  // setCssVariable("--header-height", getNodeCssValue(document.querySelector(".header"), "height"));
};

// slider

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
});

// sliderTwo


const swiperTwo = new Swiper(".mySwiper-two", {
  spaceBetween: 30,
  slidesPerView: document.body.clientWidth <= 1024 ? 3 : 1,
  pagination: {
    el: ".swiper-pagination-two",
    clickable: true
  }
});

// swiperScroll

const swiperScroll = new Swiper(".mySwiper-scroll", {
  slidesPerView: 3,
  spaceBetween: 30,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true
  },
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    785: {
      slidesPerView: 2
    },
    1166: {
      slidesPerView: 3
    }
  }
});


const swiperProjects = new Swiper(".projects-slider", {
  pagination: {
    el: ".swiper-pagination-project"
  }
});

const partnersSlider = new Swiper(".partners-slider", {
  slidesPerView: 8,
  // slidesPerView: document.body.clientWidth <= 1024 ? 3 : 8,
  spaceBetween: 10,
  freeMode: true,
  autoplay: true,
  autoplaySpeed: 1000,
  breakpoints: {
    320: {
      slidesPerView: 2.5
    },
    785: {
      slidesPerView: 4.5
    },
    1600: {
      slidesPerView: 8.5
    }

  }

});
let _slideToggle = (target, duration = 500) => {
  if (target.hidden) {
    return _slideDown(target, duration);
  } else {
    return _slideUp(target, duration);
  }
};
let _slideDown = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.hidden = target.hidden ? false : null;
    showmore ? target.style.removeProperty("height") : null;
    let height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(() => {
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};
let _slideUp = (target, duration = 500, showmore = 0) => {
  if (!target.classList.contains("_slide")) {
    target.classList.add("_slide");
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = `${target.offsetHeight}px`;
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = showmore ? `${showmore}px` : `0px`;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
      target.hidden = !showmore ? true : false;
      !showmore ? target.style.removeProperty("height") : null;
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      !showmore ? target.style.removeProperty("overflow") : null;
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
      target.classList.remove("_slide");
    }, duration);
  }
};

const spollers = () => {
  const spollersArray = document.querySelectorAll("[data-spollers]");
  if (spollersArray.length > 0) {
    // Получение обычных слойлеров
    const spollersRegular = Array.from(spollersArray).filter(function(item, index, self) {
      return !item.dataset.spollers.split(",")[0];
    });
    // Инициализация обычных слойлеров
    if (spollersRegular.length) {
      initSpollers(spollersRegular);
    }
    // Получение слойлеров с медиа запросами
    let mdQueriesArray = dataMediaQueries(spollersArray, "spollers");
    if (mdQueriesArray && mdQueriesArray.length) {
      mdQueriesArray.forEach(mdQueriesItem => {
        // Событие
        mdQueriesItem.matchMedia.addEventListener("change", function () {
          initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
        });
       initSpollers(mdQueriesItem.itemsArray, mdQueriesItem.matchMedia);
      });
    }

    // Инициализация
    function initSpollers(spollersArray, matchMedia = false) {
      spollersArray.forEach(spollersBlock => {
        spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;
        if (matchMedia.matches || !matchMedia) {
          spollersBlock.classList.add("_spoller-init");
          initSpollerBody(spollersBlock);
          spollersBlock.addEventListener("click", setSpollerAction);
        } else {
          spollersBlock.classList.remove("_spoller-init");
          initSpollerBody(spollersBlock, false);
          spollersBlock.removeEventListener("click", setSpollerAction);
        }
      });
    }

    // Работа с контентом
    function initSpollerBody(spollersBlock, hideSpollerBody = true) {
      let spollerTitles = spollersBlock.querySelectorAll("[data-spoller]");
      if (spollerTitles.length) {
        spollerTitles = Array.from(spollerTitles).filter(item => item.closest("[data-spollers]") === spollersBlock);
        spollerTitles.forEach(spollerTitle => {
          if (hideSpollerBody) {
            spollerTitle.removeAttribute("tabindex");
            if (!spollerTitle.classList.contains("_spoller-active")) {
              spollerTitle.nextElementSibling.hidden = true;
            }
          } else {
            spollerTitle.setAttribute("tabindex", "-1");
            spollerTitle.nextElementSibling.hidden = false;
          }
        });
      }
    }

    function setSpollerAction(e) {
      const el = e.target;
      if (el.closest("[data-spoller]")) {
        const spollerTitle = el.closest("[data-spoller]");
        const spollersBlock = spollerTitle.closest("[data-spollers]");
        const oneSpoller = spollersBlock.hasAttribute("data-one-spoller") ? true : false;
        if (!spollersBlock.querySelectorAll("._slide").length) {
          if (oneSpoller && !spollerTitle.classList.contains("_spoller-active")) {
            hideSpollersBody(spollersBlock);
          }
          spollerTitle.classList.toggle("_spoller-active");
          _slideToggle(spollerTitle.nextElementSibling, 500);
        }
        e.preventDefault();
      }
    }

    function hideSpollersBody(spollersBlock) {
      const spollerActiveTitle = spollersBlock.querySelector("[data-spoller]._spoller-active");
      if (spollerActiveTitle) {
        spollerActiveTitle.classList.remove("_spoller-active");
        _slideUp(spollerActiveTitle.nextElementSibling, 500);
      }
    }
  }
};

spollers();

