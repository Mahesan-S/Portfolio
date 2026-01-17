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

var aboutMe = document.querySelector(".AboutMe");
var index = 0;
var about =
  ` Hi, I’m Mahesan, a Unity Game Developer with hands-on experience in building 
interactive 2D and 3D games using Unity and C#. I focus on creating smooth gameplay mechanics, 
optimized performance, and engaging player experiences. In my free time, 
I explore Blender to enhance my 3D modeling skills and create custom assets for my projects. 
I’m continuously learning new tools and techniques, aiming to blend game design, creativity, 
and technology to deliver meaningful and immersive experiences.`.split("");

strat();

function strat() {
  aboutMe.innerHTML = "";
  for (let i = 0; i < about.length; i++) {
    setTimeout(() => {
      aboutMe.innerHTML += about[i];
    }, i * 10);
  }
}

var skillImg = document.querySelectorAll(".SkillDetailList img");
function getRandom() {
  return Math.floor(Math.random() * 250);
}

skillImg.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.boxShadow = `0px 0px 15px rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`;
    img.innerHTML = img.alt;
  });
  img.addEventListener("mouseout", () => {
    img.style.boxShadow = "none";
  });
});
