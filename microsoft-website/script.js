var menuBtn = document.querySelector(".menubtn");
const drawerMenu = document.querySelector(".drawer-menu");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active")
    drawerMenu.classList.toggle("active")

    if (menuBtn.className.includes("active")) {
        console.log("active")
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
    else {
        console.log("inactive")
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    }
});
