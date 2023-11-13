// JavaScript Document
const toggleMenu = document.querySelector(".toggle-menu")
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleMenu.onclick = function () {
	dropDownMenu.classList.toggle("open")
	const isOpen = dropDownMenu.classList.contains("open")