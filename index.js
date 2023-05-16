import "regenerator-runtime"; /* for async await transpile */
import "../styles/main.css";
import "../styles/responsive.css";
import App from "./view/app";
// eslint-disable-next-line import/extensions
import "./component/restaurant-footer.js";

document.addEventListener("DOMContentLoaded", async () => {
  const jsonData = await import("../DATA.json");
  const datas = jsonData.default.restaurants;
  let dataCard = "";
  datas.forEach((data) => {
    dataCard += `
      <div class="card">
          <img class="card_thumb" src="${data.pictureId}" alt="${
      data.name
    }" title="${data.name}">
          <div class="kota">${data.city}</div>
          <div class="card_content">
              <p class="card_rating">
                  Rating : 
                  <a href="#" class="card_rating_number">${data.rating}</a>
              </p>
              <h1 class="card_title"><a href="#">${data.name}</a></h1>
              <div class="card_desc">${data.description.slice(0, 150)}...</div>
          </div>
      </div>
      `;
  });
  document.querySelector("#tes").innerHTML = dataCard;
});

const app = new App({
  button: document.querySelector("#menu"),
  drawer: document.querySelector("#drawer"),
  content: document.querySelector("#mainContent"),
});

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const drawer = document.querySelector('#drawer');

// menu.addEventListener('click', (event) => {
//   drawer.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   drawer.classList.remove('open');
// });

const menuButton = document.querySelector("#menu");
const navigationMenu = document.querySelector(".header");

menuButton.addEventListener("keydown", (event) => {
  if (event.code === "Enter" || event.code === "Space") {
    event.preventDefault();
    navigationMenu.classList.toggle("active");
  }
});
