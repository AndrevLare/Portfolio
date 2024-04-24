const buttonsLi = document.querySelector(".language__ul");
const textsToChange = document.querySelectorAll("[data-section]");

const defaultLanguage = navigator.language || navigator.userLanguage;

changeLanguage = async (target) => {
  let language = target.dataset.lang;

  //Visual
  switch (language) {
    case "es":
      buttonsLi.classList.add("language-es");
      buttonsLi.classList.remove("language-en");
      break;
    case "en":
      buttonsLi.classList.add("language-en");
      buttonsLi.classList.remove("language-es");
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
