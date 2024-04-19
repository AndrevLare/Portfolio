const cursorShadow = document.querySelector(".cursor-shadow");

addEventListener("mousemove", (e) => {
  cursorShadow.style.left = `${e.clientX}px`;
  cursorShadow.style.top = `${e.clientY}px`;
});
