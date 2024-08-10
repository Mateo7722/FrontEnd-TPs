//Lo convierto en un array para poder recorrerlo despues
const buttons = [...document.getElementsByTagName("button")];

console.log(buttons);

let selected1 = "";
let selected2 = "";

let successes = [];

//Guarda los 2 botones seleccionados
const checkSelected = (button) => {
  if (!selected1) {
    selected1 = button.value;
  } else if (!selected2) {
    selected2 = button.value;
  }

  //Si revisa si los seleccionados coinciden o no coinciden
  if (selected1 != "" && selected2 != "") {
    if (selected1 == selected2) {
      //Los agrego a los acertados
      successes.push(buttons.filter((button) => button.value === selected1)[0]);
      successes.push(buttons.filter((button) => button.value === selected1)[1]);
    } else {
      //Les agrego hidden despues de un segundo a los no acertados
      setTimeout(() => {
        allMistakesHidden();
      }, 100);
    }

    selected1 = "";
    selected2 = "";
  }
};

//Le doy hidden
const addHidden = (button) => {
  button.classList.add("hidden");
};

//Le quito hidden
const removeHidden = (button) => {
  button.classList.remove("hidden");
};

//Agrego hidden a todos menos los acertados y desactivo los acertados
const allMistakesHidden = () => {
  // Desactivo los botones acertados
  successes.forEach((success) => (success.disabled = true));

  // Oculto los otros botones
  buttons.forEach((button) => {
    if (!successes.includes(button)) {
      addHidden(button);
    }
  });
};

//Reviso hidden
const checkHidden = (button) => {
  if (button.classList.contains("hidden")) {
    removeHidden(button);
  } else {
    addHidden(button);
  }
};

//Activa todos los botones otra vez
const activateAllButtons = () => {
  buttons.forEach((button) => (button.disabled = false));
};

//Revisa si se gano la partida
const checkWin = () => {
  if (buttons.length === successes.length) {
    alert("HAS GANADO LA PARTIDA!!!!");
    successes = [];
    selected1 = "";
    selected2 = "";
    allMistakesHidden();
    activateAllButtons();
  }
};

//Funcionalidad del boton
const buttonEvent = (e) => {
  const button = e.target;

  checkSelected(button);
  checkHidden(button);

  //Si se gana la partida, se necesita un pequeño delay para que se vea el ultimo boton
  setTimeout(() => {
    checkWin();
  }, 50);
};

buttons.forEach((button) => {
  button.addEventListener("click", buttonEvent);
});
