// Variables
const button = document.querySelector(".header__nav__menuBars"); //Contenedor barras y boton
const bars = document.querySelectorAll(".header__nav__menuBars--bar"); // lista con las 3 barras
const barsArray = [...bars]; // conversion de la lista bars a array
const menu = document.querySelector(".header__ul"); //objeto de la lista del menu
let active = false; //Bool menu activado
const options = document.querySelectorAll(".header__ul--button"); // array de las 5 opciones
const sections = [
  // array de las 3 secciones (id)
  document.getElementById("main"),
  document.getElementById("contact"),
  document.getElementById("quienSoy"),
  document.getElementById("services"),
  document.getElementById("news"),
];

document.addEventListener("click", (event) => {
  if (active) {
    const currentTarget = event.target;
    let isIn;
    for (Option of options) {
      if (
        Option !== currentTarget &&
        button !== currentTarget &&
        !barsArray.some((bar) => bar === currentTarget)
      )
        isIn = false;
      else isIn = true;
    }
    if (!isIn === true) switchMenu();
    console.log("que putas");
  }
});

button.addEventListener("click", () => {
  switchMenu("boton");
});
switchMenu = () => {
  bars[0].classList.toggle("menuActive0", !active);
  bars[0].classList.toggle("menuInactive0", active);
  bars[1].classList.toggle("menuActive1", !active);
  bars[1].classList.toggle("menuInactive1", active);
  bars[2].classList.toggle("menuActive2", !active);
  bars[2].classList.toggle("menuInactive2", active);
  menu.style.transform = active ? "scale(1, 0)" : "scale(1, 1)";
  active = !active;
};

//scroll
function scrollToSection(section) {
  section.scrollIntoView({ block: "start" });
}
options.forEach((_option, i) => {
  _option.addEventListener("click", () => {
    scrollToSection(sections[i]);
    switchMenu();
  });
});

console.log("watafac");
