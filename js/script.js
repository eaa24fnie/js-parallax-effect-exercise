"use strict";

let text = document.getElementById("text");
let leaf = document.getElementById("leaf");
let hill1 = document.getElementById("hill1");
let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");
let hill4 = document.getElementById("hill4");
let hill5 = document.getElementById("hill5");
let tree = document.getElementById("tree");
let plant = document.getElementById("plant");
let tree4 = document.getElementById("tree4");
let content = document.getElementById("content");


window.addEventListener("scroll", () => {
    let value = window.scrollY;
    text.style.marginTop = `${value*2.5}px`;
    // tree4.style.transform = `rotate(${value * 0.1}deg)`;
    tree.style.transform = `scale(${1})`;
    leaf.style.top = `${value*-1}px`;
    plant.style.top = `${value*-1}px`;
    hill5.style.top = `${value*-0.8}px`;
    hill4.style.top = `${value*-0.6}px`;
    hill3.style.top = `${value*-0.4}px`;
    hill2.style.top = `${value*-0.2}px`;
    hill1.style.top = `${value*-0}px`;
    content.style.top = `${value*-1.2}px`;
})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 