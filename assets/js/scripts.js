let menuBtn = document.getElementById("menu-button"),
    closeBtn = document.getElementById("closeBtn"),
    mobileMenuBtn = document.getElementById("mobile-menu-button")
    mobileMenu = document.getElementById("mobile-menu"),
    mobileMenuHeader = document.getElementById("mobile-menu-header");

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