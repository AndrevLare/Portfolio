//Crear media querys para ver si se ejecuta el codigo
let mediaQuery = matchMedia("(min-width: 1000px) and (orientation: landscape)");

//Codigo
const sections = [
  document.querySelector(".main__about"),
  document.querySelector(".main__contact"),
];
const navElements = [
  document.querySelector(".navElement1"),
  document.querySelector(".navElement2"),
  document.querySelector(".navElement3"),
];

changeSection = (currentSection) => {
  switch (currentSection) {
    case 0:
      sections[0].removeAttribute("hidden");
      sections[1].setAttribute("hidden", " ");

      navElements[0].classList.add("header__nav-desktop__ul--li-Selected");
      navElements[1].classList.remove("header__nav-desktop__ul--li-Selected");
      navElements[2].classList.remove("header__nav-desktop__ul--li-Selected");
      break;
    case 1:
      sections[1].removeAttribute("hidden");
      sections[0].setAttribute("hidden", " ");

      navElements[1].classList.add("header__nav-desktop__ul--li-Selected");
      navElements[0].classList.remove("header__nav-desktop__ul--li-Selected");
      navElements[2].classList.remove("header__nav-desktop__ul--li-Selected");
      break;
    case 2:
      sections[1].setAttribute("hidden", " ");
      sections[0].setAttribute("hidden", " ");

      navElements[2].classList.add("header__nav-desktop__ul--li-Selected");
      navElements[1].classList.remove("header__nav-desktop__ul--li-Selected");
      navElements[0].classList.remove("header__nav-desktop__ul--li-Selected");
      break;
  }
};

// Verificar media Querys
if (mediaQuery.matches === true) {
  changeSection(0);
} else {
  sections[0].removeAttribute("hidden");
  sections[1].removeAttribute("hidden");
}

addEventListener("resize", () => {
  mediaQuery = matchMedia("(min-width: 1000px) and (orientation: landscape)");
});
