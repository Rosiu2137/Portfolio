const navPointer = document.querySelector(".navPointer")
const nav = document.querySelector("#nav")
const about = document.querySelector("#about")
const experience = document.querySelector("#experience")
const development = document.querySelector("#development")
const projects = document.querySelector("#projects")
const contact = document.querySelector("#contact")


const navPointerPosition=(element)=>
{
    const width = nav.children[element].clientWidth * 1.1
    const left = nav.children[element].offsetLeft - width * 0.05
    
    navPointer.style.left = `${left}px`
    navPointer.style.width = `${width}px`
    navPointer.style.opacity = '1'
}

const scrollFunc = (e)=>
{

    if(contact.getBoundingClientRect().top - contact.clientHeight * 0.5 < 0)
    {
        navPointerPosition(4)
    }
    else if(projects.getBoundingClientRect().top - projects.clientHeight * 0.3 < 0)
    {
        navPointerPosition(3)
    }
    else if(development.getBoundingClientRect().top - development.clientHeight * 0.25 < 0)
    {
        navPointerPosition(2)
    }
    else if(experience.getBoundingClientRect().top - experience.clientHeight * 0.1 < 0)
    {
        navPointerPosition(1)
    }
    else if(about.getBoundingClientRect().top - about.clientHeight * 0.2 < 0)
    {
        
        navPointerPosition(0)
    }
    else
    {
        navPointer.style.opacity = '0'
    }

}

window.addEventListener("resize",scrollFunc)
window.addEventListener("scroll",scrollFunc)

scrollFunc()