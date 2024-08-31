const header = document.querySelector(".header")
const nav = document.querySelector("nav")
const logo = document.querySelector(".logo")
const upperShadow = document.querySelector(".upperShadow")

let addStylesToNavBar = false


const stylesToggle = (addStyles) =>
{
    if(addStyles)
    {
        addStylesToNavBar = true
        nav.classList.add("navStyles")
        logo.classList.add("logoDisplay")
        upperShadow.classList.remove("upperShadowDisplay")
    }
    else
    {
        addStylesToNavBar = false
        nav.classList.remove("navStyles")
        logo.classList.remove("logoDisplay")
        upperShadow.classList.add("upperShadowDisplay")
    }
}

const windowScrollFunction = (e)=>
{
    if(!addStylesToNavBar && (header.getBoundingClientRect().top *-1 > header.clientHeight * 0.6))
        {
            stylesToggle(true)
        }
        if(addStylesToNavBar && (header.getBoundingClientRect().top *-1 <= header.clientHeight * 0.6))
        {
            stylesToggle(false)
        }
}

window.addEventListener("scroll",windowScrollFunction)

windowScrollFunction()

