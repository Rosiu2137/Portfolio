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
const projects = document.querySelector("#projects")
const otherProjects = document.querySelector('.otherProjects')
const contact = document.querySelector("#contact")
const contactHeader = document.querySelector("#contactHeader")
const contactDescription = document.querySelector('#contactDescription')
const form = document.querySelector("#form")
const mail = document.querySelector(".mail")
const socialsLine = document.querySelector(".socialsLine")
const githubIcon = document.querySelector('#githubIcon')
const facebookIcon = document.querySelector("#facebookIcon")
const devItems = [...document.querySelectorAll(".devItem")]
const projectsItem = [...document.querySelectorAll(".projectsItem")]
let blockquoteAnimation, additionalSkillsAnimation, devItemsAnimation0, devItemsAnimation1, devItemsAnimation2, projectsAnimation, otherProjectsAnimation,contactAnimation

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
    if(devItems[0].getBoundingClientRect().top / window.innerHeight < 0.6 && !devItemsAnimation0)
    {
        devItems[0].classList.add("descriptionAnimation")
        devItemsAnimation0 = true
    }
    if(devItems[1].getBoundingClientRect().top / window.innerHeight < 0.6 && !devItemsAnimation1)
    {
        devItems[1].classList.add("descriptionAnimation")
        devItemsAnimation1 = true
    }
    if(devItems[2].getBoundingClientRect().top / window.innerHeight < 0.6 && !devItemsAnimation2)
    {
        devItems[2].classList.add("descriptionAnimation")
        devItemsAnimation2 = true
    }
    if(projects.getBoundingClientRect().top / window.innerHeight < 0.85 && !projectsAnimation)
    {
        projects.classList.add("projectsScale")
        projectsAnimation = true
    }
    if(otherProjects.getBoundingClientRect().top / window.innerHeight < 0.4 && !otherProjectsAnimation)
    {
        projectsItem[0].classList.add('projectsScale')
        setTimeout(() => {
            projectsItem[1].classList.add('projectsScale')
        }, 300);
        setTimeout(() => {
            projectsItem[2].classList.add('projectsScale')
        }, 600);
        setTimeout(() => {
            projectsItem[3].classList.add('projectsScale')
        }, 900);
        otherProjectsAnimation = true
    }
    if(contact.getBoundingClientRect().top / window.innerHeight < 0.7 && !contactAnimation)
    {
        contactHeader.classList.add('additionalSkillsOpacity')
        setTimeout(() => {
            contactDescription.classList.add('contactDescription')
        }, 200);
        setTimeout(() => {
            form.classList.add('contactDescription')
        }, 400);

        setTimeout(() => {
            mail.classList.add('opacityClass')
        }, 800);
        setTimeout(() => {
            githubIcon.classList.add('projectsScale')
        }, 1200);
        setTimeout(() => {
            socialsLine.classList.add('opacityClass')
        }, 1400);
        setTimeout(() => {
            facebookIcon.classList.add('projectsScale')
        }, 1600);
        contactAnimation = true
    }
}

startAnimation()


window.addEventListener("scroll",windowScroll)