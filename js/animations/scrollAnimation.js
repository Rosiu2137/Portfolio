const header = document.querySelector(".header")
const image = document.querySelector(".image")
const nav = document.querySelector('nav')
const description = document.querySelector('.description')
const blockquote = document.querySelector("#blockquote")
const author = document.querySelector(".author")
let blockquoteAnimation

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
}

startAnimation()


window.addEventListener("scroll",windowScroll)