const navItems = document.querySelector(".nav_items");
const openNavBtn = document.querySelector("#open_nav-btn");
const closeNavBtn = document.querySelector("#close_nav-btn");

const open_Nav = () => {
  navItems.style.display = "flex";
  openNavBtn.style.display = "none";
  closeNavBtn.style.display = "inline-block";
};

const close_Nav = () => {
  navItems.style.display = "none";
  openNavBtn.style.display = "inline-block";
  closeNavBtn.style.display = "none";
};

openNavBtn.addEventListener("click", open_Nav);
closeNavBtn.addEventListener("click", close_Nav);
alert();
