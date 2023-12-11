// JavaScript Document
const hamburger = document.querySelector(".hamburger")
const dropDownMenu = document.querySelector(".dropdown-menu")


if (hamburger && dropDownMenu) {
    console.log("Script loaded");
 
    hamburger.addEventListener("click", function () {
       console.log("Hamburger clicked");
       hamburger.classList.toggle("open");
       dropDownMenu.classList.toggle("open");
    });
 
    // Close dropdown when clicking outside
    document.addEventListener("click", function (event) {
       if (!dropDownMenu.contains(event.target) && !hamburger.contains(event.target)) {
          console.log("Clicked outside, closing dropdown");
          hamburger.classList.remove("open");
          dropDownMenu.classList.remove("open");
       }
    });
 } else {
    console.error("Hamburger or dropdown not found. Check your class names.");
 }
