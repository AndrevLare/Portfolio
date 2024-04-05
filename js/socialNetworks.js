const links = [
  "http://wa.me/573188390682?text=Hola,%20buen%20d%C3%ADa",
  "https://www.instagram.com/andrevlare/",
  "https://www.linkedin.com/in/andrés-oviedo-undefined-387671276/",
];

openSocialNetwork = (social) => {
  window.open(`${links[social]}`);
};
