let menuBtn = document.getElementById("menu-button"),
    closeBtn = document.getElementById("closeBtn"),
    mobileMenuBtn = document.getElementById("mobile-menu-button")
    mobileMenu = document.getElementById("mobile-menu")
    mobileMenuContent = document.getElementById("mobile-menu-content"),
    mobileMenuHeader = document.getElementById("mobile-menu-header"),
    langSelect = document.getElementById("languageSelector"),
    body = document.getElementsByTagName("body")[0],
    loginBtn = document.getElementById("loginBtn"),
    outsideMenu = document.getElementById("tablet-menu-outside");

var loggedIn = false;

menuBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
    outsideMenu.classList.toggle("opened");
});

closeBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
    outsideMenu.classList.toggle("opened");
});

mobileMenuBtn.addEventListener("click", function() {
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
    outsideMenu.classList.toggle("opened");
});

outsideMenu.addEventListener("click", function(){
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
    outsideMenu.classList.toggle("opened");
});

langSelect.addEventListener("click", function() {
    body.classList.toggle("lang-hu");
    if( body.classList.contains("lang-hu")) {
        langSelect.innerHTML = "Magyar";
    } else {
        langSelect.innerHTML = "English";
    }
});

loginBtn.addEventListener("click", function() {
    event.preventDefault();
    if( loggedIn == false) {
        loggedIn = true;
        mobileMenuContent.classList.toggle("logged-in");
    } else {
        loggedIn = false;
        mobileMenuContent.classList.toggle("logged-in");
    }
    console.log(loggedIn);
});

