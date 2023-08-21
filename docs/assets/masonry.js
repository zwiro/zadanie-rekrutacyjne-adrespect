const elem = document.querySelector(".masonry-grid"),
  gridItem = document.querySelector(".masonry-grid-item");
imagesLoaded(elem, () => {
  new Masonry(elem, {
    itemSelector: ".masonry-grid-item",
    gutter: Number(getComputedStyle(gridItem).getPropertyValue("--gutter")),
  });
});
