let menuBtn = document.getElementById("menu-button"),
    closeBtn = document.getElementById("closeBtn"),
    mobileMenuBtn = document.getElementById("mobile-menu-button")
    mobileMenu = document.getElementById("mobile-menu"),
    mobileMenuHeader = document.getElementById("mobile-menu-header"),
    langSelect = document.getElementById("languageSelector"),
    body = document.getElementsByTagName("body")[0];

menuBtn.addEventListener("click", function() {
    console.log("#menu-button clicked!");
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
});

closeBtn.addEventListener("click", function() {
    console.log("#closeBtn clicked!");
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
});

mobileMenuBtn.addEventListener("click", function() {
    console.log("#menu-button clicked!");
    mobileMenu.classList.toggle("opened");
    mobileMenuHeader.classList.toggle("opened");
});

langSelect.addEventListener("click", function() {
    body.classList.toggle("lang-hu");
    if( body.classList.contains("lang-hu")) {
        langSelect.innerHTML = "Magyar";
    } else {
        langSelect.innerHTML = "English";
    }
});