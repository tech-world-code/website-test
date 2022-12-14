var exitButton = document.getElementById ("exit-button");
        

var exitButtonOnClick = function () {
    mobileMenu.classList.add ("hidden");
}
var mobileMenuButton = document.getElementById("mobile-menu-enter");
var mobileMenu = document.getElementById("mobile-menu-id");

var mobileMenuButtonOnClick = function() {
mobileMenu.classList.toggle("hidden");
mobileMenuButton.classList.toggle("exit-btn");
mobileMenuButton.innerHTML = "<span class='exit-btn'>X</span>";
if (mobileMenu.classList.contains("hidden")) {
mobileMenuButton.innerHTML = "<div class='line'></div><br><div class='line'></div><br><div class='line'></div>";
}
};

mobileMenuButton.addEventListener("click", mobileMenuButtonOnClick);
mobileMenuButton.addEventListener ("click", mobileMenuButtonOnClick);

var menuOption = document.getElementsByClassName("nav-option")
var pagePath = window.location.pathname;

if (pagePath === "/about.html") {
    menuOption[0].className = "nav-on-page nav-option";
}
else if (pagePath === "/classes.html") {
    menuOption[1].className = "nav-on-page nav-option";
}
else if (pagePath === "/contact.html") {
    menuOption[2].className = "nav-on-page nav-option";
}


