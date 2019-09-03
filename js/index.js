// Your code goes here
// * [ ] `mouseover`
// 	* [ ] `keydown`
// 	* [ ] `wheel`
// 	* [ ] `drag / drop`
// 	* [ ] `load`
// 	* [ ] `focus`
// 	* [ ] `resize`
// 	* [ ] `scroll`
// 	* [ ] `select`
//     * [ ] `dblclick`

// load
window.addEventListener("load", event => {
  alert("page is fully loaded");
});

// keydown & keyup
function changeColor(command) {
  let logo = document.querySelector(".logo-heading");
  if (command === "keydown") {
    logo.style.color = "green";
  } else if (command === "keyup") {
    logo.style.color = "black";
  }
}

document.addEventListener("keydown", () => changeColor("keydown"));
document.addEventListener("keyup", () => changeColor("keyup"));

// resize

function changeLogo() {
  let logo = document.querySelector(".logo-heading");
  logo.textContent = "Fun Fun Bus";
}

window.addEventListener("resize", changeLogo);

//  click
let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link =>
  link.addEventListener("click", event => {
    event.preventDefault();
    event.target.style.backgroundColor = "red";
    event.stopPropagation();
  })
);

// click
let navContainer = document.querySelector(".nav-container");
navContainer.addEventListener("click", event => {
  event.target.style.backgroundColor = "salmon";
});

//  dblclick
navLinks.forEach(link =>
  link.addEventListener(
    "dblclick",
    event => (event.target.style.backgroundColor = "green")
  )
);

// mouseover
let introImage = document.querySelector(".intro img");
introImage.addEventListener("mouseover", event => {
  (event.target.style.transform = `scale(1.1)`),
    (event.target.style.transition = `transform 1s`);
});

// mouseenter
let h2El = document.querySelectorAll("h2");
h2El.forEach(title =>
  title.addEventListener(
    "mouseenter",
    event => (event.target.style.fontSize = "5em")
  )
);

//  mouseleave
h2El.forEach(title =>
  title.addEventListener(
    "mouseleave",
    event => (event.target.style.fontSize = "3em")
  )
);

//  copy
let pEl = document.querySelectorAll("p");
pEl.forEach(p =>
  p.addEventListener(
    "copy",
    event => (event.target.style.backgroundColor = "yellow")
  )
);

// paste
pEl.forEach(p =>
  p.addEventListener(
    "paste",
    event => (event.target.style.backgroundColor = "white")
  )
);
