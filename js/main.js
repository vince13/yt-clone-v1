const menu = document.querySelector("#menu")
const sidebar = document.querySelector(".sidebar")

const dropDown = document.querySelector("#account")
const drop_down = document.querySelector(".dropdown-content-background")

console.log(sidebar)
console.log(menu)
console.log(dropDown)

menu.addEventListener("click", function() {
    sidebar.classList.toggle("show-sidebar")
})

dropDown.addEventListener("click", function() {
    drop_down.classList.toggle("show-dropdown")
})