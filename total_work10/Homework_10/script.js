const menuActive = document.querySelector(".menu-active"); // Найти меню, console.log(menuActive);
const headerMenu = document.querySelector(".site-navi"); // найти кнопку бургера
const menuClose = document.querySelector(".menu-close"); // найти кнопку крестика

function toggleMenu() {
  menuActive.classList.toggle("hidden"); // ф-я удаляет или устанавливает класс с названием 'hidden" В div с классом .menu-active
}

headerMenu.addEventListener("click", toggleMenu); // по клику на бургер срабатывает ф-я
menuClose.addEventListener("click", toggleMenu); // по клику на крестик срабатывает ф-я
