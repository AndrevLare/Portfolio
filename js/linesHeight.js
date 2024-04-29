let htmlHeight = getComputedStyle(document.body).getPropertyValue("height");
const lines = document.querySelector(".lines");
const line = document.querySelector(".line");

reziseLines = () => {
  htmlHeight = getComputedStyle(document.body).getPropertyValue("height");
  let linesWantedHeight;
  let topHeight;

  // Calcular lo que hay que quitar a lines para que tenga la altura del contenedor
  // Mobiles
  if (
    getComputedStyle(document.querySelector(".mobile-div")).getPropertyValue(
      "display"
    ) === "flex"
  ) {
    console.log("si");
    topHeight = getComputedStyle(
      document.querySelector(".mobile-div")
    ).getPropertyValue("height");
    lines.style.margin = `${topHeight} auto auto auto`;
  }
  // Desktop
  else {
    topHeight = 16;
    lines.style.margin = `1rem auto auto auto`;
  }

  // Adaptar tamaño de las lineas al container
  linesWantedHeight = parseFloat(htmlHeight) - 16 - parseFloat(topHeight);
  lines.style.height = `${linesWantedHeight}px`;
  line.style.height = `${linesWantedHeight}px`;

  console.clear();
  console.log(
    getComputedStyle(document.querySelector(".mobile-div")).getPropertyValue(
      "display"
    )
  );
  console.log(`Top Height: ${topHeight}`);
  console.log(`Lines Wanted Height: ${linesWantedHeight}`);
  console.log(`Lines: ${getComputedStyle(lines).getPropertyValue("height")}`);
  console.log(`Html: ${htmlHeight}`);
};

addEventListener("resize", reziseLines);
reziseLines();
