const links = [
  "http://wa.me/573197914026?text=Hola,%20buen%20d%C3%ADa",
  "https://www.instagram.com/andrevlare/",
  "https://x.com/Gorje_2022",
  "https://bit.ly/3w3DVKb",
];

openSocialNetwork = (social) => {
  window.open(`${links[social]}`);
};
