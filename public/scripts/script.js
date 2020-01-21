// Navbar scroll colour change
$(window).scroll(function(){
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

// Makes the menu background-color darker when menu icon is clicked
var menuIcon = document.querySelector(".navbar-toggler");
var transparentMenu = document.querySelector("#navbar");
menuIcon.addEventListener("click",function(){
	transparentMenu.classList.toggle("darkMenu");
});

// Transforms menu icon to X
function menuFunction(x) {
	x.classList.toggle("menuChange");
  }

// Dynamic footer year
document.getElementById("year").innerHTML = new Date().getFullYear();