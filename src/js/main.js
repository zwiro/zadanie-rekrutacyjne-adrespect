function toggleMultipleClasses(element, ...classes) {
  classes.forEach((className) => {
    element.classList.toggle(className);
  });
}

function toggleMultipleElements(className, ...elements) {
  elements.forEach((element) => {
    element.classList.toggle(className);
  });
}

// expand images

const expandImagesBtn = document.querySelector("#expand-images-btn");

function expandImagesSection() {
  const imagesContainer = document.querySelector("#realizacje");
  const imagesOverlay = document.querySelector("#images-overlay");
  if (imagesContainer.classList.contains("max-h-[1000vh]")) {
    expandImagesBtn.innerHTML =
      'Rozwiń <img src="./assets/arrow-down-black.svg" alt="" />';
    imagesContainer.classList.add("max-h-[200vh]");
  } else {
    expandImagesBtn.innerHTML =
      'Zwiń <img src="./assets/arrow-down-black.svg" alt="" class="rotate-180" />';
    imagesContainer.classList.remove("max-h-[200vh]");
  }
  expandImagesBtn.classList.toggle("bg-gray/50");
  imagesOverlay.classList.toggle("opacity-0");
  imagesContainer.classList.toggle("max-h-[1000vh]");
}

expandImagesBtn.addEventListener("click", expandImagesSection);

// burger menu

const burgerMenuBtn = document.querySelector("#burger-menu-btn");

function toggleBurgerMenu() {
  if (window.innerWidth > 768) return;
  const menu = document.querySelector("#menu");
  if (menu.classList.contains("invisible")) {
    menu.classList.add("translate-x-0");
    menu.classList.remove("translate-x-full");
    menu.classList.toggle("invisible");
  } else {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
    setTimeout(() => {
      menu.classList.toggle("invisible");
    }, 300);
  }
  toggleMultipleClasses(
    burgerMenuBtn,
    "rotate-45",
    "before:translate-y-2",
    "before:rotate-90",
    "after:-translate-y-2",
    "after:-rotate-90",
    "before:xl:translate-y-3",
    "after:xl:-translate-y-3",
  );
}

burgerMenuBtn.addEventListener("click", toggleBurgerMenu);

// open searchbar

const openSearchbarBtn = document.querySelector("#open-searchbar-btn");

function openSearchbar() {
  const searchbar = document.querySelector("#searchbar");
  toggleMultipleClasses(
    searchbar,
    "md:invisible",
    "md:w-0",
    "lg:w-48",
    "md:w-32",
  );
}

openSearchbarBtn.addEventListener("click", openSearchbar);

// hero slider

const nextHeroBtn = document.querySelector("#hero-next-btn");
const prevHeroBtn = document.querySelector("#hero-prev-btn");
const heroSection1 = document.querySelector("#hero-section-1");
const heroSection2 = document.querySelector("#hero-section-2");
const heroSection3 = document.querySelector("#hero-section-3");

function prevHero() {
  if (heroSection1.classList.contains("translate-x-0")) {
    heroSection1.classList.replace("translate-x-0", "translate-x-full");
    heroSection1.classList.add("invisible");
    heroSection2.classList.replace("-translate-x-full", "translate-x-0");
    heroSection2.classList.remove("invisible");
    heroSection3.classList.replace("translate-x-full", "-translate-x-full");
  } else if (heroSection2.classList.contains("translate-x-0")) {
    heroSection2.classList.replace("translate-x-0", "translate-x-full");
    heroSection2.classList.add("invisible");
    heroSection3.classList.replace("-translate-x-full", "translate-x-0");
    heroSection3.classList.remove("invisible");
    heroSection1.classList.replace("translate-x-full", "-translate-x-full");
  } else {
    heroSection3.classList.replace("translate-x-0", "translate-x-full");
    heroSection3.classList.add("invisible");
    heroSection1.classList.replace("-translate-x-full", "translate-x-0");
    heroSection1.classList.remove("invisible");
    heroSection2.classList.replace("translate-x-full", "-translate-x-full");
  }
}

function nextHero() {
  if (heroSection1.classList.contains("translate-x-0")) {
    heroSection1.classList.replace("translate-x-0", "-translate-x-full");
    heroSection1.classList.add("invisible");
    heroSection2.classList.replace("-translate-x-full", "translate-x-full");
    heroSection3.classList.replace("translate-x-full", "translate-x-0");
    heroSection3.classList.remove("invisible");
  } else if (heroSection2.classList.contains("translate-x-0")) {
    heroSection2.classList.replace("translate-x-0", "-translate-x-full");
    heroSection2.classList.add("invisible");
    heroSection3.classList.replace("-translate-x-full", "translate-x-full");
    heroSection1.classList.replace("translate-x-full", "translate-x-0");
    heroSection1.classList.remove("invisible");
  } else {
    heroSection3.classList.replace("translate-x-0", "-translate-x-full");
    heroSection3.classList.add("invisible");
    heroSection1.classList.replace("-translate-x-full", "translate-x-full");
    heroSection2.classList.replace("translate-x-full", "translate-x-0");
    heroSection2.classList.remove("invisible");
  }
}

let autoSlide = setInterval(nextHero, 5000);
nextHeroBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  nextHero();
  autoSlide = setInterval(nextHero, 5000);
});
prevHeroBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  prevHero();
  autoSlide = setInterval(nextHero, 5000);
});

// popup image gallery

const images = document.querySelectorAll(".masonry-grid-item");
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
  popupGallery.animate([{ opacity: "0" }, { opacity: "1" }], { duration: 300 });
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

  popupImage.animate([{ opacity: "0" }, { opacity: "1" }], {
    duration: 500,
  });
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
  popupImage.animate([{ opacity: "0" }, { opacity: "1" }], {
    duration: 500,
  });
}

popupGalleryThumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", changeImageByThumbnail);
});
