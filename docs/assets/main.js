function toggleMultipleClasses(e, ...a) {
  a.forEach((a) => {
    e.classList.toggle(a);
  });
}
const expandImagesBtn = document.querySelector("#expand-images-btn"),
  collapseImagesBtn = document.querySelector("#collapse-images-btn"),
  imagesOverlay = document.querySelector("#images-overlay"),
  images = document.querySelectorAll(".masonry-grid-item");
function checkIfFocusable() {
  images.forEach((e) => {
    e.getBoundingClientRect().top > imagesOverlay.getBoundingClientRect().top &&
      (e.tabIndex = "-1");
  });
}
function expandCollapseImagesSection(e = "expand") {
  let a = document.querySelector("#realizacje");
  "expand" === e
    ? (expandImagesBtn.classList.replace("flex", "hidden"),
      collapseImagesBtn.classList.replace("hidden", "flex"),
      a.classList.replace("max-h-[214vh]", "max-h-[1000vh]"),
      images.forEach((e) => (e.tabIndex = "0")))
    : "collapse" === e &&
      (expandImagesBtn.classList.replace("hidden", "flex"),
      collapseImagesBtn.classList.replace("flex", "hidden"),
      a.classList.replace("max-h-[1000vh]", "max-h-[214vh]"),
      checkIfFocusable()),
    toggleMultipleClasses(imagesOverlay, "opacity-0", "pointer-events-none");
}
checkIfFocusable(),
  expandImagesBtn.addEventListener("click", () =>
    expandCollapseImagesSection("expand"),
  ),
  collapseImagesBtn.addEventListener("click", () =>
    expandCollapseImagesSection("collapse"),
  ),
  imagesOverlay.addEventListener("click", () =>
    expandCollapseImagesSection("expand"),
  );
const burgerMenuBtn = document.querySelector("#burger-menu-btn"),
  menu = document.querySelector("#menu");
let isMenuOpened = !1;
function toggleBurgerMenu() {
  window.innerWidth > 768 ||
    (menu.classList.contains("opacity-0")
      ? (menu.classList.remove("invisible"),
        menu.classList.replace("opacity-0", "opacity-100"),
        burgerMenuBtn.setAttribute("aria-expanded", "true"),
        (isMenuOpened = !0))
      : (menu.classList.replace("opacity-100", "opacity-0"),
        burgerMenuBtn.setAttribute("aria-expanded", "false"),
        (isMenuOpened = !1),
        setTimeout(() => {
          menu.classList.add("invisible");
        }, 300)),
    toggleMultipleClasses(menu, "translate-x-0", "translate-x-full"),
    toggleMultipleClasses(
      burgerMenuBtn,
      "rotate-45",
      "before:translate-y-2",
      "before:rotate-90",
      "after:-translate-y-2",
      "after:-rotate-90",
    ));
}
burgerMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation(), toggleBurgerMenu();
}),
  window.addEventListener("click", (e) => {
    isMenuOpened &&
      e.target !== menu &&
      !menu.contains(e.target) &&
      toggleBurgerMenu();
  });
const openSearchbarBtn = document.querySelector("#open-searchbar-btn");
function openSearchbar() {
  let e = document.querySelector("#searchbar");
  toggleMultipleClasses(
    e,
    "md:invisible",
    "md:w-0",
    "md:px-0",
    "lg:w-48",
    "md:w-32",
  );
}
openSearchbarBtn.addEventListener("click", openSearchbar);
const nextHeroBtn = document.querySelector("#hero-next-btn"),
  prevHeroBtn = document.querySelector("#hero-prev-btn"),
  heroSections = document.querySelectorAll(".hero-section");
let isSliding = !1;
function changeHero(e = "next") {
  isSliding ||
    ((isSliding = !0),
    "next" === e
      ? heroSections.forEach((e) => {
          let a = e.querySelectorAll("a");
          e.classList.contains("translate-x-0")
            ? (a.forEach((e) => (e.tabIndex = "-1")),
              e.classList.replace("translate-x-0", "translate-x-full"),
              setTimeout(() => {
                e.classList.toggle("invisible");
              }, 1e3))
            : e.classList.contains("-translate-x-full")
            ? (a.forEach((e) => (e.tabIndex = "")),
              e.classList.replace("-translate-x-full", "translate-x-0"),
              e.classList.toggle("invisible"))
            : e.classList.contains("translate-x-full") &&
              (a.forEach((e) => (e.tabIndex = "")),
              e.classList.replace("translate-x-full", "-translate-x-full"));
        })
      : heroSections.forEach((e) => {
          let a = e.querySelectorAll("a");
          e.classList.contains("translate-x-0")
            ? (a.forEach((e) => (e.tabIndex = "-1")),
              e.classList.replace("translate-x-0", "-translate-x-full"),
              setTimeout(() => {
                e.classList.toggle("invisible");
              }, 1e3))
            : e.classList.contains("-translate-x-full")
            ? (a.forEach((e) => (e.tabIndex = "")),
              e.classList.replace("-translate-x-full", "translate-x-full"))
            : e.classList.contains("translate-x-full") &&
              (a.forEach((e) => (e.tabIndex = "")),
              e.classList.replace("translate-x-full", "translate-x-0"),
              e.classList.toggle("invisible"));
        }),
    setTimeout(() => {
      isSliding = !1;
    }, 1e3));
}
let autoSlide = setInterval(changeHero, 1e4);
nextHeroBtn.addEventListener("click", () => {
  clearInterval(autoSlide),
    changeHero(),
    (autoSlide = setInterval(changeHero, 1e4));
}),
  prevHeroBtn.addEventListener("click", () => {
    clearInterval(autoSlide),
      changeHero("prev"),
      (autoSlide = setInterval(changeHero, 1e4));
  });
const popupGallery = document.querySelector("#popup-gallery"),
  popupImage = document.querySelector("#popup-image"),
  popupGalleryThumbnails = document.querySelectorAll(".popup-thumbnail");
function openPopupGallery(e) {
  popupGallery.classList.toggle("invisible"),
    popupGallery.classList.replace("opacity-0", "opacity-100"),
    (popupImage.src = e.target.src),
    popupGalleryThumbnails.forEach((a) => {
      a.src === e.target.src
        ? a.classList.add("ring")
        : a.classList.remove("ring");
    });
}
images.forEach((e) => e.addEventListener("click", openPopupGallery));
const closePopupGalleryBtn = document.querySelector("#popup-close-btn");
function closePopupGallery() {
  popupGallery.classList.replace("opacity-100", "opacity-0"),
    setTimeout(() => {
      popupGallery.classList.add("invisible");
    }, 300);
}
closePopupGalleryBtn.addEventListener("click", closePopupGallery),
  window.addEventListener("click", (e) => {
    e.target !== popupImage &&
      e.target.contains(popupImage) &&
      closePopupGallery();
  });
const popupPrevBtn = document.querySelector("#popup-prev-btn"),
  popupNextBtn = document.querySelector("#popup-next-btn");
function changePopupImage(e) {
  let a = popupImage.src,
    l = 0;
  popupGalleryThumbnails.forEach((e, t) => {
    e.src === a && (l = t);
  }),
    "prev" === e
      ? 0 === l
        ? ((popupImage.src =
            popupGalleryThumbnails[popupGalleryThumbnails.length - 1].src),
          popupGalleryThumbnails[
            popupGalleryThumbnails.length - 1
          ].classList.add("ring"),
          popupGalleryThumbnails[l].classList.remove("ring"))
        : ((popupImage.src = popupGalleryThumbnails[l - 1].src),
          popupGalleryThumbnails[l - 1].classList.add("ring"),
          popupGalleryThumbnails[l].classList.remove("ring"))
      : l === popupGalleryThumbnails.length - 1
      ? ((popupImage.src = popupGalleryThumbnails[0].src),
        popupGalleryThumbnails[0].classList.add("ring"),
        popupGalleryThumbnails[l].classList.remove("ring"))
      : ((popupImage.src = popupGalleryThumbnails[l + 1].src),
        popupGalleryThumbnails[l + 1].classList.add("ring"),
        popupGalleryThumbnails[l].classList.remove("ring")),
    popupImage.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
}
function changeImageByThumbnail(e) {
  (popupImage.src = e.target.src),
    popupGalleryThumbnails.forEach((e) => {
      e.src === popupImage.src
        ? e.classList.add("ring")
        : e.classList.remove("ring");
    }),
    popupImage.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
}
popupPrevBtn.addEventListener("click", () => changePopupImage("prev")),
  popupNextBtn.addEventListener("click", () => changePopupImage("next")),
  popupGalleryThumbnails.forEach((e) => {
    e.addEventListener("click", changeImageByThumbnail);
  });
const mouseTracker = document.querySelector("#mouse-tracker");
window.addEventListener("mousemove", (e) => {
  let a = (e.clientX / window.innerWidth) * 100,
    l = (e.clientY / window.innerHeight) * 100;
  (mouseTracker.style.left = `${a}%`), (mouseTracker.style.top = `${l}%`);
});
