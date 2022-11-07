// vamos a funcionar los distintos elementos

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const menuIcon = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetail = document.querySelector(".product-detail");

navEmail.addEventListener("click",toggleDesktopMenu);
menuIcon.addEventListener("click",toggleMobileMenu);
shoppingCart.addEventListener("click",toggleProductDetail);

//enable & disable desktop menu while also desibling the other menus
function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

//enable & disable mobile menu while also desibling the other menus
function toggleMobileMenu() {
    console.log("click");
    mobileMenu.classList.toggle("inactive");
    productDetail.classList.add("inactive");
}

//enable & disable product detail while also desibling the other menus
function toggleProductDetail() {
    console.log("click");
    productDetail.classList.toggle("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

console.log("JS funcionando");