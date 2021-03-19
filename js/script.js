const hamburger = document.querySelector(".hamb");
const navLinks = document.querySelector(".nav-list");

hamburger.addEventListener("click", function() {
	navLinks.classList.toggle("active");
	hamburger.classList.toggle("click");
})