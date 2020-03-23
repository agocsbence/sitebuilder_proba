let menuBtn = document.getElementById("menu-button"),
    closeBtn = document.getElementById("closeBtn"),
    mobileMenuBtn = document.getElementById("mobile-menu-button")
    mobileMenu = document.getElementById("mobile-menu")
    mobileMenuContent = document.getElementById("mobile-menu-content"),
    mobileMenuHeader = document.getElementById("mobile-menu-header"),
    langSelect = document.getElementById("languageSelector"),
    body = document.getElementsByTagName("body")[0],
    loginBtnMobile = document.getElementById("loginBtnMobile"),
    loginBtn = document.getElementById("loginBtn"),
    loginBtnWrapper = document.getElementById("login-button"),
    logOut = document.getElementById("logOut"),
    outsideMenu = document.getElementById("tablet-menu-outside"),
    userAvatar = document.getElementById("user-avatar");

var loggedIn = "";

function logInCheck() {
    event.preventDefault();
    if( loggedIn == false) {
        loggedIn = true;
        mobileMenuContent.classList.toggle("logged-in");
        body.classList.toggle("logged-in");
    } else {
        loggedIn = false;
        mobileMenuContent.classList.toggle("logged-in");
        body.classList.toggle("logged-in");
    }
    console.log("logged in: " + loggedIn);
    if (loggedIn == true) {
        userAvatar.classList.toggle("show");
        loginBtnWrapper.classList.toggle("hide");
    } else {
        userAvatar.classList.toggle("show");
        loginBtnWrapper.classList.toggle("hide");
    }
};

loginBtnMobile.addEventListener("click", logInCheck);
loginBtn.addEventListener("click", logInCheck);
logOut.addEventListener("click", logInCheck);

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

