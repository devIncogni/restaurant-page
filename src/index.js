import "./styles.css";
import "./home-styles.css";
import "./about-styles.css";
import "./menu-styles.css";

import generateHome from "./homePage.js";
import generateAbout from "./aboutPage.js";
import generateMenu from "./menuPage.js";

console.log("Hello World");

const holder = document.querySelector(".holder");
const homeBtn = document.querySelector(".homeButton");

homeBtn.addEventListener("click", (event) => {
  generateHome(holder);
});

window.addEventListener("load", () => {
  generateHome(holder);
});

const abtBtn = document.querySelector(".aboutButton");

abtBtn.addEventListener("click", () => {
  generateAbout(holder);
});

const menuBtn = document.querySelector(".menuButton");

menuBtn.addEventListener("click", () => {
  generateMenu(holder);
});
