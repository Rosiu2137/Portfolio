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
const footer = document.querySelector("footer")
const htmlLogo = document.querySelector("#htmlLogo")
const cssLogo = document.querySelector("#cssLogo")
const jsLogo = document.querySelector("#jsLogo")
const reactLogo = document.querySelector("#reactLogo")
const socials = document.querySelector(".socials")
const devItems = [...document.querySelectorAll(".devItem")]
const projectsItem = [...document.querySelectorAll(".projectsItem")]
let blockquoteAnimation, additionalSkillsAnimation, devItemsAnimation0, devItemsAnimation1, devItemsAnimation2, projectsAnimation, otherProjectsAnimation,contactAnimation,footerAnimation, socialsAnimation

const startAnimation = ()=>
{
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


const itemAnimation = (item)=>
{
    item.children[1].classList.add("additionalSkillsOpacity")
    setTimeout(() => {
        item.children[2].classList.add("additionalSkillsOpacity")
    }, 200);
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
    if(projects.getBoundingClientRect().top / window.innerHeight < 0.7 && !projectsAnimation)
    {
        projects.classList.add("projectsScale")
        projectsAnimation = true
    }





    if(window.innerWidth <= 445)
    {
        if(htmlLogo.getBoundingClientRect().top / window.innerHeight < 0.45 && !htmlLogo.classList.contains("additionalSkillsOpacity"))
        {
            itemAnimation(htmlLogo)
        }
        if(cssLogo.getBoundingClientRect().top / window.innerHeight < 0.45 && !cssLogo.classList.contains("additionalSkillsOpacity"))
        {
            itemAnimation(cssLogo)
        }
        if(jsLogo.getBoundingClientRect().top / window.innerHeight < 0.45 && !jsLogo.classList.contains("additionalSkillsOpacity"))
        {
            itemAnimation(jsLogo)
        }
        if(reactLogo.getBoundingClientRect().top / window.innerHeight < 0.45 && !reactLogo.classList.contains("additionalSkillsOpacity"))
        {
            itemAnimation(reactLogo)
        }
        if(gitItem.getBoundingClientRect().top / window.innerHeight < 0.45 && !gitItem.classList.contains("additionalSkillsOpacity"))
        {
            gitItem.classList.add("additionalSkillsOpacity")
        }
        if(bootstrapItem.getBoundingClientRect().top / window.innerHeight < 0.45 && !bootstrapItem.classList.contains("additionalSkillsOpacity"))
        {
            bootstrapItem.classList.add("additionalSkillsOpacity")
        }
        if(firebaseItem.getBoundingClientRect().top / window.innerHeight < 0.45 && !firebaseItem.classList.contains("additionalSkillsOpacity"))
        {
            firebaseItem.classList.add("additionalSkillsOpacity")
        }
        if(projectsItem[0].getBoundingClientRect().top / window.innerHeight < 0.7 && !projectsItem[0].classList.contains("projectsScale"))
        {
            projectsItem[0].classList.add("projectsScale")
        }
        if(projectsItem[1].getBoundingClientRect().top / window.innerHeight < 0.7 && !projectsItem[1].classList.contains("projectsScale"))
        {
            projectsItem[1].classList.add("projectsScale")
        }
        if(projectsItem[2].getBoundingClientRect().top / window.innerHeight < 0.7 && !projectsItem[2].classList.contains("projectsScale"))
        {
            projectsItem[2].classList.add("projectsScale")
        }
        if(projectsItem[3].getBoundingClientRect().top / window.innerHeight < 0.7 && !projectsItem[3].classList.contains("projectsScale"))
        {
            projectsItem[3].classList.add("projectsScale")
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
            contactAnimation = true
        }
        if(socials.getBoundingClientRect().top / window.innerHeight < 0.9 && !socialsAnimation)
        {
            setTimeout(() => {
                mail.classList.add('opacityClass')
            }, 400);
            setTimeout(() => {
                githubIcon.classList.add('projectsScale')
            }, 800);
            setTimeout(() => {
                socialsLine.classList.add('opacityClass')
            }, 1200);
            setTimeout(() => {
                facebookIcon.classList.add('projectsScale')
            }, 1400);
        }
        if(footer.getBoundingClientRect().top / window.innerHeight < 1 && !footerAnimation)
        {
            footer.classList.add("opacityClass")
            footerAnimation = true
        }
    }
    else
    {
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
        if(footer.getBoundingClientRect().top / window.innerHeight < 0.8 && !footerAnimation)
        {
            footer.classList.add("opacityClass")
            footerAnimation = true
        }
    }
}

startAnimation()


window.addEventListener("scroll",windowScroll)