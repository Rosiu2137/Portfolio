const header = document.querySelector("header")
const nav = document.querySelector("nav")
const logo = document.querySelector(".logo")

let addStylesToNavBar = false


const stylesToggle = (addStyles) =>
{
    if(addStyles)
    {
        addStylesToNavBar = true
        nav.classList.add("navStyles")
        logo.classList.add("logoDisplay")
    }
    else
    {
        addStylesToNavBar = false
        nav.classList.remove("navStyles")
        logo.classList.remove("logoDisplay")
    }
}

window.addEventListener("scroll",()=>{
    if(!addStylesToNavBar && (header.getBoundingClientRect().top *-1 > header.clientHeight * 0.6))
    {
        stylesToggle(true)
    }
    if(addStylesToNavBar && (header.getBoundingClientRect().top *-1 <= header.clientHeight * 0.6))
    {
        stylesToggle(false)
    }
})