const observer = new IntersectionObserver((e) => {
  e.forEach((es) => {
    console.log(es);
    if (es.isIntersecting) {
      es.target.classList.add("show");
    } else {
      es.target.classList.remove("show");
    }
  });
});

const HiddenEleemt = document.querySelectorAll(".hidden");
HiddenEleemt.forEach((el) => observer.observe(el));
