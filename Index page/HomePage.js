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
  `👋 Hi, I’m Mahesan — a passionate Unity Game Developer and 3D Artist 
who loves turning imagination into interactive experiences.

🎮 As a game developer, I specialize in designing and building engaging 2D and 3D games using Unity and C#, 
focusing on smooth gameplay mechanics and immersive player experiences.

🎨 As a 3D artist, I enjoy bringing ideas to life through modeling, texturing, and rigging, 
using tools like Blender and Substance Painter to craft detailed assets and environments.

🚀 I’m always learning new techniques, exploring creative ideas, 
and pushing my skills further to build projects that blend art, design, and technology seamlessly.`.split(
    ""
  );

strat();

function strat() {
  aboutMe.innerHTML = "";
  for (let i = 0; i < about.length; i++) {
    setTimeout(() => {
      aboutMe.innerHTML += about[i];
    },i * 10);
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
