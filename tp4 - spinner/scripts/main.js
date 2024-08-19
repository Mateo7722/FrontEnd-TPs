const button = document.querySelector("button");
const img = document.querySelector("img");

const spinnerFunction = () => {
  img.classList.add("spinner");
  button.remove();
};

button.addEventListener("click", spinnerFunction);
