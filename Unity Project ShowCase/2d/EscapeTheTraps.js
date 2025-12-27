const observer = new IntersectionObserver((e) => {
  e.forEach((es) => {
    if (es.isIntersecting) {
      es.target.classList.add("Fade");
    //   CurrentPara(es.target);
    } else {
      es.target.classList.remove("Fade");
    }
  });
});

const HiddenEleemt = document.querySelectorAll(".Para");
HiddenEleemt.forEach((el) => observer.observe(el));

function CurrentPara(para) {
  let data = para.innerHTML.split("");
  para.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      para.innerHTML += data[i];
    },10);
  }
}
