import { greet } from "../utils/utils";

function loadGreet(name) {
  const doomGreet = document.getElementById("greeting");
  doomGreet.innerHTML = greet(name);
}

loadGreet("Costi");
