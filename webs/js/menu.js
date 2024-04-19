let active = false;
const button = document.querySelector(".nav__button");
const menu = document.querySelector(".header__ul");
const buttonLines = document.querySelectorAll(".nav__button--span");

menuSwitch = () => {
  menu.classList.toggle("menuActive", !active);
  menu.classList.toggle("menuInactive", active);

  buttonLines[0].classList.toggle("line1A", !active);
  buttonLines[0].classList.toggle("line1I", active);
  buttonLines[1].classList.toggle("line2A", !active);
  buttonLines[1].classList.toggle("line2I", active);
  buttonLines[2].classList.toggle("line3A", !active);
  buttonLines[2].classList.toggle("line3I", active);

  active = !active;
};
