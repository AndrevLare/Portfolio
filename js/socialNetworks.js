const links = [
  "http://wa.me/573197914026?text=Hola,%20buen%20d%C3%ADa",
  "https://www.instagram.com/andrevlare/",
  "https://x.com/Gorje_2022",
  "https://bit.ly/3XQ4QnG",
  "https://www.facebook.com/people/AndrevLare/61565446117582/",
];

openSocialNetwork = (social) => {
  window.open(`${links[social]}`);
};
