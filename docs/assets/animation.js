const elementsToAnimate = document.querySelectorAll(".scroll-animation"),
  observer = new IntersectionObserver(
    (t) => {
      t.forEach((t) => {
        t.isIntersecting &&
          (t.target.classList.contains("opacity-0")
            ? (t.target.classList.add("animate-fadeIn"),
              setTimeout(() => {
                t.target.classList.remove("opacity-0");
              }, 1e3))
            : t.target.classList.contains("scroll-animation--slideFromLeft")
            ? t.target.classList.add("lg:animate-slideFromLeft")
            : t.target.classList.contains("scroll-animation--slideFromRight")
            ? t.target.classList.add("lg:animate-slideFromRight")
            : t.target.classList.contains(
                "scroll-animation--slideFromBottom",
              ) && t.target.classList.add("lg:animate-slideFromBottom"));
      });
    },
    { threshold: 0.5 },
  );
for (let i = 0; i < elementsToAnimate.length; i++) {
  let t = elementsToAnimate[i];
  observer.observe(t);
}
