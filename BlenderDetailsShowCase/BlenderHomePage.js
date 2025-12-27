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

const HiddenEleemtLeft = document.querySelectorAll(".hiddenleft");
const HiddenEleemtRight = document.querySelectorAll(".hiddenRight");
HiddenEleemtLeft.forEach((el) => observer.observe(el));
HiddenEleemtRight.forEach((el) => observer.observe(el));