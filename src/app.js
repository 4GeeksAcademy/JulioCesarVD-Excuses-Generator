/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let who = ["Mi novia", "Mi abuela", "El cartero", "Mi vecina"];

  let personalActions = ["llegó", "tropezó", "me llamó"];
  let externalActions = ["se perdió", "tocó el timbre", "estaba esperando"];

  let what = [
    "en la puerta de casa",
    "en la acera",
    "en el pasillo",
    "en el jardín"
  ];

  let when = [
    "mientras llovía",
    "justo después del almuerzo",
    "antes de ir al trabajo",
    "mientras estaba cocinando",
    "mientras veía televisión"
  ];

  let whoIndx = Math.floor(Math.random() * who.length);
  let actionIndx =
    Math.random() < 0.5
      ? Math.floor(Math.random() * personalActions.length)
      : Math.floor(Math.random() * externalActions.length);
  let whatIndx = Math.floor(Math.random() * what.length);
  let whenIndx = Math.floor(Math.random() * when.length);

  let selectedAction =
    actionIndx < personalActions.length
      ? personalActions[actionIndx]
      : externalActions[actionIndx - personalActions.length];

  return (
    who[whoIndx] +
    " " +
    selectedAction +
    " " +
    what[whatIndx] +
    " " +
    when[whenIndx]
  );
};
