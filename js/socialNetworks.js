const links = [
  "http://wa.me/573502453823?text=Hola,%20buen%20d%C3%ADa",
  "https://www.instagram.com/andrevlare/",
  "https://x.com/Gorje_2022",
  "https://bit.ly/3XQ4QnG",
];

openSocialNetwork = (social) => {
  window.open(`${links[social]}`);
};
