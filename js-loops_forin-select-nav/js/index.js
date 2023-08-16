console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const key in languages) {
  const optionelm = document.createElement("option");
  optionelm.value = languages[key];
  optionelm.textContent = languages[key];
  select.append(optionelm);
}

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write/change code here --v--

// --^-- write/change code here --^--

for (const key in nav) {
  const liitem = document.createElement("li");
  const aelm = document.createElement("a");

  aelm.setAttribute("href", nav[key].href);
  aelm.textContent = nav[key].text;

  liitem.append(aelm);
  ul.append(liitem);
}
