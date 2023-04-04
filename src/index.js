import { mainPageElements } from "./main-page.js";
import { menuPageElements } from "./menu-page.js";
import { contactPageElements } from "./contact-page.js";
import "./style.css";

mainPageElements();

const content = document.querySelector("#content");
const home = document.querySelector(".home-btn");
const menu = document.querySelector(".menu-btn");
const contactUs = document.querySelector(".contact-us-btn");
const orderButton = document.querySelector(".order-button");

home.classList.add("active");

// Function to create home page
function homePage() {
  content.replaceChildren();
  mainPageElements();
  const menu = document.querySelector(".menu-btn");
  const contactUs = document.querySelector(".contact-us-btn");
  const orderButton = document.querySelector(".order-button");
  const home = document.querySelector(".home-btn");
  menu.addEventListener("click", menuPage);
  contactUs.addEventListener("click", contactPage);
  orderButton.addEventListener("click", menuPage);
  home.classList.add("active");
}

// Function to create menu page
function menuPage() {
  content.replaceChildren();
  menuPageElements();
  const home = document.querySelector(".home-btn");
  const contactUs = document.querySelector(".contact-us-btn");
  const menu = document.querySelector(".menu-btn");
  home.addEventListener("click", homePage);
  contactUs.addEventListener("click", contactPage);
  menu.classList.add("active");
}

// Function to create contact page
function contactPage() {
  content.replaceChildren();
  contactPageElements();
  const menu = document.querySelector(".menu-btn");
  const home = document.querySelector(".home-btn");
  const contactUs = document.querySelector(".contact-us-btn");
  menu.addEventListener("click", menuPage);
  home.addEventListener("click", homePage);
  contactUs.classList.add("active");
}

menu.addEventListener("click", menuPage);
home.addEventListener("click", homePage);
contactUs.addEventListener("click", contactPage);
orderButton.addEventListener("click", menuPage);
