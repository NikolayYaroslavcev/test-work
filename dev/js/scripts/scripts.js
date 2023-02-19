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

document.addEventListener("click", (e) => {
  const eTarget = e.target.closest(`[${DATA_ACTION}]`);
  let actionList = [];

  if (eTarget) {
    const actiones = eTarget.getAttribute(DATA_ACTION);
    actionList = actiones.split(" ");

    actionList.map((item) => {
      if (item === BURGER_MENU_SWITCHER) {
        const burgerMenu = document.querySelector("[data-burger-menu]");

        eTarget.classList.toggle(ACTIVE_CLASS);

        if (burgerMenu) {
          scrollToggle();
          menuBgOverlayToggle();
          burgerMenu.classList.toggle(ACTIVE_CLASS);
        }
      }

      if (item === "accordion-switcher") {
        const DROPDOWN_SELECTOR = "[data-accordion-dropdown]";
        const acc = eTarget.closest("[data-accordion]");
        const dropDown = acc.querySelector(DROPDOWN_SELECTOR);

        acc.classList.toggle(ACTIVE_CLASS);
        dropDown.slideToggle();

        getSiblings(acc).map((item) => {
          item.classList.remove(ACTIVE_CLASS);

          const itemDropDown = item.querySelector(DROPDOWN_SELECTOR);

          if (itemDropDown) {
            itemDropDown.slideUp();
          }
        });
      }

      if (item === "load-youtube-iframe") {
        onYouTubeIframeAPIReady(eTarget, eTarget.getAttribute("data-id"));
      }

      if (item === "tabs-button") {
        const TABS_BTN_SELECTOR = "data-tab-btn";
        const TABS_CONTENT_SELECTOR = "data-tab-content";
        const dataTabSelector = eTarget.getAttribute(TABS_BTN_SELECTOR);

        eTarget.classList.add(ACTIVE_CLASS);

        getSiblings(eTarget.closest("li")).forEach((item) => {
          item.querySelector(`[${TABS_BTN_SELECTOR}]`).classList.remove(ACTIVE_CLASS);
        });

        const targetContent = document.querySelectorAll(
          `[${TABS_CONTENT_SELECTOR}="${dataTabSelector}"]`
        );

        if (targetContent.length) {
          targetContent.forEach((item) => {
            getSiblings(item).forEach((itemInner) => {
              itemInner.classList.remove(ACTIVE_CLASS);
            });

            item.classList.add(ACTIVE_CLASS);
          });
        }
      }
    });
  }
});

document.addEventListener("change", (e) => {
  const eTarget = e.target.closest(`[${DATA_ACTION}]`);
  let actionList = [];

  if (eTarget) {
    const actiones = eTarget.getAttribute(DATA_ACTION);
    actionList = actiones.split(" ");

    actionList.map((item) => {
      // if (item === SIDEBAR_ACTION_STRING) {
      // }
    });
  }
});

const setGlobalCssVar = () => {
  // setCssVariable("--viewport-width", `${window.innerWidth}px`);
  // setCssVariable("--viewport-height", `${window.innerHeight}px`);
  // setCssVariable("--header-height", getNodeCssValue(document.querySelector(".header"), "height"));
};


//////////////////////

// search
// ---- ---- Const ---- ---- //
let inputBox = document.querySelector(".input-box"),
  searchIcon = document.querySelector(".search"),
  closeIcon = document.querySelector(".close-icon");

// ---- ---- Open Input ---- ---- //
searchIcon.addEventListener("click", () => {
  inputBox.classList.add("open");
});
// ---- ---- Close Input ---- ---- //
closeIcon.addEventListener("click", () => {
  inputBox.classList.remove("open");
});

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
  }
});


const swiperProjects = new Swiper(".projects-slider", {
  pagination: {
    el: ".swiper-pagination-project"
  }
});

const partnersSlider = new Swiper(".partners-slider", {
  slidesPerView: 8,
  spaceBetween: 10,
  freeMode: true,
  autoplay: true,
  autoplaySpeed: 1000
});

