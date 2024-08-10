//Lo transformo en array para poder recorrerlo
const images = [...document.getElementsByTagName("img")];

images.map((image) => {
  image.classList.add("animation");
});
