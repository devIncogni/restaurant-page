import "./styles.css";
import "./home-styles.css";
import generateHome from "./homePage.js";

console.log("Hello World");

const holder = document.querySelector(".holder");
const homeBtn = document.querySelector(".homeButton");

homeBtn.addEventListener("click", (event) => {
  generateHome(holder);
});

window.addEventListener("load", () => {
  generateHome(holder);
});
