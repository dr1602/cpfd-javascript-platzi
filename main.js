// vamos a funcionar los distintos elementos

const navEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

navEmail.addEventListener("click",toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log("click");
    desktopMenu.classList.toggle("inactive");
}

console.log("JS funcionando");