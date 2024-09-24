const header = document.querySelector(".header")
const image = document.querySelector(".image")
const nav = document.querySelector('nav')
const description = document.querySelector('.description')
const blockquote = document.querySelector("#blockquote")
const author = document.querySelector(".author")
const additionalSkills = document.querySelector(".additionalSkills")
const gitItem = document.querySelector("#gitItem")
const bootstrapItem = document.querySelector("#bootstrapItem")
const firebaseItem = document.querySelector("#firebaseItem")
const devItems = [...document.querySelectorAll(".devItem")]
let blockquoteAnimation, additionalSkillsAnimation, devItemsAnimation0, devItemsAnimation1, devItemsAnimation2

const startAnimation = ()=>
{
    window.scrollTo(0,0)
    setTimeout(() => {
        nav.classList.add('opacityClass')
    }, 200);
    setTimeout(() => {
        header.classList.add("opacityClass")
    }, 500);
    setTimeout(() => {
        image.classList.add("opacityClass")
    }, 1000);
    setTimeout(() => {
        description.classList.add("descriptionAnimation")
    }, 1300);
}

const windowScroll = (e)=>
{
    if(blockquote.getBoundingClientRect().top / window.innerHeight < 0.75 && !blockquoteAnimation)
    {
        blockquote.style.opacity = `1`
        console.log(author)
        setTimeout(() => {
            author.style.opacity = `1`
            
        }, 500);
        
        blockquoteAnimation = true
    }
    if(additionalSkills.getBoundingClientRect().top / window.innerHeight < 0.4 && !additionalSkillsAnimation)
    {
        gitItem.classList.add("additionalSkillsOpacity")
        setTimeout(() => {
            bootstrapItem.classList.add("additionalSkillsOpacity")
        }, 500)
        setTimeout(() => {
            firebaseItem.classList.add("additionalSkillsOpacity")
        }, 1000);
        additionalSkillsAnimation = true
    }
    if(devItems[0].getBoundingClientRect().top / window.innerHeight < 0.4 && !devItemsAnimation0)
    {
        devItems[0].classList.add("descriptionAnimation")
        devItemsAnimation0 = true
        console.log("0")
    }
    if(devItems[1].getBoundingClientRect().top / window.innerHeight < 0.4 && !devItemsAnimation1)
    {
        devItems[1].classList.add("descriptionAnimation")
        devItemsAnimation1 = true
        console.log("1")
    }
    if(devItems[2].getBoundingClientRect().top / window.innerHeight < 0.4 && !devItemsAnimation2)
    {
        devItems[2].classList.add("descriptionAnimation")
        devItemsAnimation2 = true
        console.log("2")
    }
}

startAnimation()


window.addEventListener("scroll",windowScroll)