// utils

function toggleMultipleClasses(element, ...classes) {
  classes.forEach((className) => {
    element.classList.toggle(className);
  });
}

// expand images
const expandImagesBtn = document.querySelector("#expand-images-btn");
const collapseImagesBtn = document.querySelector("#collapse-images-btn");
const imagesOverlay = document.querySelector("#images-overlay");
const images = document.querySelectorAll(".masonry-grid-item");

function checkIfFocusable() {
  images.forEach((image) => {
    if (
      image.getBoundingClientRect().top >
      imagesOverlay.getBoundingClientRect().top
    ) {
      image.tabIndex = "-1";
    }
  });
}

checkIfFocusable(); // to prevent focusing images that are not visible

function expandCollapseImagesSection(action = "expand") {
  const imagesContainer = document.querySelector("#realizacje");
  if (action === "expand") {
    expandImagesBtn.classList.replace("flex", "hidden");
    collapseImagesBtn.classList.replace("hidden", "flex");
    imagesContainer.classList.replace("max-h-[214vh]", "max-h-[1000vh]");
    images.forEach((image) => (image.tabIndex = "0"));
  } else if (action === "collapse") {
    expandImagesBtn.classList.replace("hidden", "flex");
    collapseImagesBtn.classList.replace("flex", "hidden");
    imagesContainer.classList.replace("max-h-[1000vh]", "max-h-[214vh]");
    checkIfFocusable();
  }
  toggleMultipleClasses(imagesOverlay, "opacity-0", "pointer-events-none");
}

expandImagesBtn.addEventListener("click", () =>
  expandCollapseImagesSection("expand"),
);
collapseImagesBtn.addEventListener("click", () =>
  expandCollapseImagesSection("collapse"),
);
imagesOverlay.addEventListener("click", () =>
  expandCollapseImagesSection("expand"),
);

// burger mobile menu

const burgerMenuBtn = document.querySelector("#burger-menu-btn");
const menu = document.querySelector("#menu");
let isMenuOpened = false;

function toggleBurgerMenu() {
  if (window.innerWidth > 768) return;
  if (menu.classList.contains("opacity-0")) {
    menu.classList.remove("invisible");
    menu.classList.replace("opacity-0", "opacity-100");
    burgerMenuBtn.setAttribute("aria-expanded", "true");
    isMenuOpened = true;
  } else {
    menu.classList.replace("opacity-100", "opacity-0");
    burgerMenuBtn.setAttribute("aria-expanded", "false");
    isMenuOpened = false;
    setTimeout(() => {
      menu.classList.add("invisible");
    }, 300);
  }

  toggleMultipleClasses(menu, "translate-x-0", "translate-x-full");
  toggleMultipleClasses(
    burgerMenuBtn,
    "rotate-45",
    "before:translate-y-2",
    "before:rotate-90",
    "after:-translate-y-2",
    "after:-rotate-90",
  );
}

burgerMenuBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleBurgerMenu();
});
window.addEventListener("click", (e) => {
  if (isMenuOpened && e.target !== menu && !menu.contains(e.target))
    toggleBurgerMenu();
});

// open searchbar

const openSearchbarBtn = document.querySelector("#open-searchbar-btn");

function openSearchbar() {
  const searchbar = document.querySelector("#searchbar");

  toggleMultipleClasses(
    searchbar,
    "md:invisible",
    "md:w-0",
    "md:px-0",
    "lg:w-48",
    "md:w-32",
  );
}

openSearchbarBtn.addEventListener("click", openSearchbar);

// hero slider

const nextHeroBtn = document.querySelector("#hero-next-btn");
const prevHeroBtn = document.querySelector("#hero-prev-btn");
const heroSections = document.querySelectorAll(".hero-section");
let isSliding = false;

function changeHero(direction = "next") {
  if (isSliding) return;
  isSliding = true;
  if (direction === "next") {
    heroSections.forEach((section) => {
      const buttons = section.querySelectorAll("a");
      if (section.classList.contains("translate-x-0")) {
        buttons.forEach((button) => (button.tabIndex = "-1")); // to prevent focusing button on section that is sliding out
        section.classList.replace("translate-x-0", "translate-x-full");
        setTimeout(() => {
          section.classList.toggle("invisible");
        }, 1000);
      } else if (section.classList.contains("-translate-x-full")) {
        buttons.forEach((button) => (button.tabIndex = ""));
        section.classList.replace("-translate-x-full", "translate-x-0");
        section.classList.toggle("invisible");
      } else if (section.classList.contains("translate-x-full")) {
        buttons.forEach((button) => (button.tabIndex = ""));
        section.classList.replace("translate-x-full", "-translate-x-full");
      }
    });
  } else {
    heroSections.forEach((section) => {
      const buttons = section.querySelectorAll("a");
      if (section.classList.contains("translate-x-0")) {
        buttons.forEach((button) => (button.tabIndex = "-1"));
        section.classList.replace("translate-x-0", "-translate-x-full");
        setTimeout(() => {
          section.classList.toggle("invisible");
        }, 1000);
      } else if (section.classList.contains("-translate-x-full")) {
        buttons.forEach((button) => (button.tabIndex = ""));
        section.classList.replace("-translate-x-full", "translate-x-full");
      } else if (section.classList.contains("translate-x-full")) {
        buttons.forEach((button) => (button.tabIndex = ""));
        section.classList.replace("translate-x-full", "translate-x-0");
        section.classList.toggle("invisible");
      }
    });
  }
  setTimeout(() => {
    isSliding = false;
  }, 1000);
}

let autoSlide = setInterval(changeHero, 10000);

nextHeroBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  changeHero();
  autoSlide = setInterval(changeHero, 10000);
});

prevHeroBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  changeHero("prev");
  autoSlide = setInterval(changeHero, 10000);
});

// popup image gallery

const popupGallery = document.querySelector("#popup-gallery");
const popupImage = document.querySelector("#popup-image");
const popupGalleryThumbnails = document.querySelectorAll(".popup-thumbnail");

// // open popup gallery

function openPopupGallery(image) {
  popupGallery.classList.toggle("invisible");
  popupGallery.classList.replace("opacity-0", "opacity-100");

  popupImage.src = image.target.src;
  popupGalleryThumbnails.forEach((thumbnail) => {
    if (thumbnail.src === image.target.src) {
      thumbnail.classList.add("ring");
    } else thumbnail.classList.remove("ring");
  });
}

images.forEach((image) => image.addEventListener("click", openPopupGallery));

// // close popup gallery

const closePopupGalleryBtn = document.querySelector("#popup-close-btn");

function closePopupGallery() {
  popupGallery.classList.replace("opacity-100", "opacity-0");
  setTimeout(() => {
    popupGallery.classList.add("invisible");
  }, 300);
}

closePopupGalleryBtn.addEventListener("click", closePopupGallery);

window.addEventListener("click", (e) => {
  if (e.target !== popupImage && e.target.contains(popupImage))
    closePopupGallery();
});

// // change popup image

const popupPrevBtn = document.querySelector("#popup-prev-btn");
const popupNextBtn = document.querySelector("#popup-next-btn");

function changePopupImage(direction) {
  const currentImage = popupImage.src;
  let currentImageIndex = 0;
  popupGalleryThumbnails.forEach((thumbnail, index) => {
    if (thumbnail.src === currentImage) currentImageIndex = index;
  });
  if (direction === "prev") {
    if (currentImageIndex === 0) {
      popupImage.src =
        popupGalleryThumbnails[popupGalleryThumbnails.length - 1].src;
      popupGalleryThumbnails[popupGalleryThumbnails.length - 1].classList.add(
        "ring",
      );
      popupGalleryThumbnails[currentImageIndex].classList.remove("ring");
    } else {
      popupImage.src = popupGalleryThumbnails[currentImageIndex - 1].src;
      popupGalleryThumbnails[currentImageIndex - 1].classList.add("ring");
      popupGalleryThumbnails[currentImageIndex].classList.remove("ring");
    }
  } else {
    if (currentImageIndex === popupGalleryThumbnails.length - 1) {
      popupImage.src = popupGalleryThumbnails[0].src;
      popupGalleryThumbnails[0].classList.add("ring");
      popupGalleryThumbnails[currentImageIndex].classList.remove("ring");
    } else {
      popupImage.src = popupGalleryThumbnails[currentImageIndex + 1].src;
      popupGalleryThumbnails[currentImageIndex + 1].classList.add("ring");
      popupGalleryThumbnails[currentImageIndex].classList.remove("ring");
    }
  }
  popupImage.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
}

popupPrevBtn.addEventListener("click", () => changePopupImage("prev"));
popupNextBtn.addEventListener("click", () => changePopupImage("next"));

// // change image by thumbnail

function changeImageByThumbnail(thumbnail) {
  popupImage.src = thumbnail.target.src;
  popupGalleryThumbnails.forEach((thumbnail) => {
    if (thumbnail.src === popupImage.src) {
      thumbnail.classList.add("ring");
    } else thumbnail.classList.remove("ring");
  });
  popupImage.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 500 });
}

popupGalleryThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changeImageByThumbnail);
});

// mouse tracking blob

const mouseTracker = document.querySelector("#mouse-tracker");

window.addEventListener("mousemove", (event) => {
  const Xpercentage = (event.clientX / window.innerWidth) * 100;
  const Ypercentage = (event.clientY / window.innerHeight) * 100;
  mouseTracker.style.left = `${Xpercentage}%`;
  mouseTracker.style.top = `${Ypercentage}%`;
});
