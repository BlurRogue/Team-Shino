// JavaScript Document
const Hamburger = document.querySelector(".hamburger")
const dropDownMenu = document.querySelector(".dropdown-menu")

Hamburger.onclick = function () {
	dropDownMenu.classList.toggle("open")
	const isOpen = dropDownMenu.classList.contains("open")