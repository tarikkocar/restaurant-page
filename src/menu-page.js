import Icon from "./donut-logo.svg";
import Berliner from "./berliner.png";
import Strawberry from "./strawberry.png";
import Chocolate from "./chocolate.png";
import Coconut from "./coconut.png";

const menuPageElements = () => {
  // Creating DOM elements
  const content = document.querySelector("#content");
  const header = document.createElement("div");
  const footer = document.createElement("div");
  const headerContent = document.createElement("div");
  const logoField = document.createElement("div");
  const restaurantName = document.createTextNode("Glazed Delights");
  const logo = document.createElement("img");
  const navItems = document.createElement("ul");
  const addressField = document.createElement("div");
  const address = document.createTextNode(
    "375 Saint-Catherine St W, Montreal, H3B 1A4, Quebec"
  );
  const addressIcon = document.createElement("span");
  const addressIconText = document.createTextNode("location_on");
  const scheduleField = document.createElement("div");
  const schedule = document.createTextNode(
    "Weekdays: 08.00 - 20.00 Weekend: 10.00-22.00"
  );
  const scheduleIcon = document.createElement("span");
  const scheduleIconText = document.createTextNode("schedule");
  const menu = document.createElement("div");
  const berliner = document.createElement("img");
  const strawberry = document.createElement("img");
  const chocolate = document.createElement("img");
  const coconut = document.createElement("img");
  const berlinerText = document.createTextNode("Caramel Berliner");
  const strawberryText = document.createTextNode("Strawberry Rainbow");
  const chocolateText = document.createTextNode("Chocolate Dream");
  const coconutText = document.createTextNode("Coconut Frost");

  // Assigning classes and other attributes
  header.classList.add("header");
  footer.classList.add("footer");
  headerContent.classList.add("header-content");
  logoField.classList.add("logo-field");
  logo.setAttribute("src", Icon);
  addressField.classList.add("address-field");
  addressIcon.classList.add("material-symbols-outlined");
  scheduleField.classList.add("schedule-field");
  scheduleIcon.classList.add("material-symbols-outlined");
  menu.classList.add("menu");
  berliner.setAttribute("src", Berliner);
  strawberry.setAttribute("src", Strawberry);
  chocolate.setAttribute("src", Chocolate);
  coconut.setAttribute("src", Coconut);
  berliner.classList.add("donut-img");
  strawberry.classList.add("donut-img");
  chocolate.classList.add("donut-img");
  coconut.classList.add("donut-img");

  // Appending DOM elements to their parents
  content.appendChild(header);
  content.appendChild(menu);
  content.appendChild(footer);
  header.appendChild(headerContent);
  logoField.appendChild(logo);
  logoField.appendChild(restaurantName);
  headerContent.appendChild(logoField);
  menu.appendChild(berliner);
  menu.append(berlinerText);
  menu.appendChild(strawberry);
  menu.appendChild(strawberryText);
  menu.appendChild(chocolate);
  menu.appendChild(chocolateText);
  menu.appendChild(coconut);
  menu.appendChild(coconutText);
  footer.appendChild(addressField);
  addressField.appendChild(addressIcon);
  addressIcon.appendChild(addressIconText);
  addressField.appendChild(address);
  footer.appendChild(scheduleField);
  scheduleField.appendChild(scheduleIcon);
  scheduleIcon.appendChild(scheduleIconText);
  scheduleField.appendChild(schedule);

  let navLinks = ["Home", "Menu", "Contact Us"];

  navLinks.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    li.className = item.toLowerCase().replace(/\s/g, "-") + "-btn";
    navItems.appendChild(li);
  });

  headerContent.appendChild(navItems);
};

export { menuPageElements };
