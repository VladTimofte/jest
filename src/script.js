import { greet } from "../utils/utils.js";

function loadGreet(name) {
  const doomGreet = document.getElementById("greeting");
  doomGreet.innerHTML = greet(name);
}

loadGreet("Costi");
