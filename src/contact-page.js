import Icon from "./donut-logo.svg";
import GitHub from "./github-gray.svg";

const contactPageElements = () => {
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
  const contactField = document.createElement("div");
  const titleField = document.createElement("span");
  const title = document.createTextNode("Contact us");
  const map = document.createElement("iframe");
  const creditField = document.createElement("div");
  const credits = document.createElement("span");
  const creditDetails = document.createTextNode("tarikkocar © 2023");
  const githubLink = document.createElement("a");
  const githubIcon = document.createElement("img");

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
  contactField.classList.add("contact-field");
  map.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44739.29462095626!2d-73.63335371017457!3d45.50593334945705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91b8f00b3c7b1%3A0x51f2748cf7f4e48a!2sKrispy%20Kreme%20Caf%C3%A9!5e0!3m2!1str!2str!4v1680610139581!5m2!1str!2str"
  );
  map.setAttribute("width", "500");
  map.setAttribute("height", "400");
  map.setAttribute("style", "border:0;");
  map.setAttribute("allowfullscreen", "");
  map.setAttribute("loading", "lazy");
  map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  creditField.classList.add("credit-field");
  credits.classList.add("credits");
  githubLink.setAttribute("href", "https://github.com/tarikkocar");
  githubLink.setAttribute("target", "_blank");
  githubIcon.setAttribute("src", GitHub);

  // Appending DOM elements to their parents
  content.appendChild(header);
  titleField.appendChild(title);
  contactField.appendChild(titleField);
  content.appendChild(contactField);
  header.appendChild(headerContent);
  logoField.appendChild(logo);
  logoField.appendChild(restaurantName);
  headerContent.appendChild(logoField);
  content.appendChild(footer);
  contactField.appendChild(addressField);
  addressField.appendChild(addressIcon);
  addressIcon.appendChild(addressIconText);
  addressField.appendChild(address);
  contactField.appendChild(scheduleField);
  scheduleField.appendChild(scheduleIcon);
  scheduleIcon.appendChild(scheduleIconText);
  scheduleField.appendChild(schedule);
  contactField.appendChild(map);
  credits.appendChild(creditDetails);
  creditField.appendChild(credits);
  githubLink.appendChild(githubIcon);
  creditField.appendChild(githubLink);
  footer.appendChild(creditField);

  let navLinks = ["Home", "Menu", "Contact Us"];

  navLinks.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    li.className = item.toLowerCase().replace(/\s/g, "-") + "-btn";
    navItems.appendChild(li);
  });

  headerContent.appendChild(navItems);
};

export { contactPageElements };
