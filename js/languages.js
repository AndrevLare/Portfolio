const buttonsLi = document.querySelector(".language__ul");
const mobileButtonsLi = document.querySelector(".mobile-div__language");
const textsToChange = document.querySelectorAll("[data-section]");

const defaultLanguage = navigator.language || navigator.userLanguage;

changeLanguage = async (target) => {
  let language = target.dataset.lang;

  //Visual
  switch (language) {
    case "es":
      //Desktop
      buttonsLi.classList.add("language-es");
      buttonsLi.classList.remove("language-en");
      //mobile
      mobileButtonsLi.classList.add("mobile-language-es");
      mobileButtonsLi.classList.remove("mobile-language-en");
      break;
    case "en":
      // Desktop
      buttonsLi.classList.add("language-en");
      buttonsLi.classList.remove("language-es");
      //mobile
      mobileButtonsLi.classList.add("mobile-language-en");
      mobileButtonsLi.classList.remove("mobile-language-es");
      break;
  }

  //Funcional
  const requestJson = await fetch(`./languages/${language}.json`);
  const texts = await requestJson.json();

  for (const textToChange of textsToChange) {
    const section = textToChange.dataset.section;
    const value = textToChange.dataset.value;
    textToChange.innerHTML = texts[section][value];
  }
};

//cambiar idioma al predeterminado del navegador
if (defaultLanguage.startsWith("es")) {
  changeLanguage(document.querySelector(`[data-lang="es"]`));
} else if (defaultLanguage.startsWith("en")) {
  changeLanguage(document.querySelector(`[data-lang="en"]`));
} else {
  changeLanguage(document.querySelector(`[data-lang="en"]`));
}
