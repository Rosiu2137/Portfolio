const image = document.querySelector(".image")
const header = document.querySelector(".header")

const windowScroll = (e)=>
{
    if(header.getBoundingClientRect().top>=-(header.clientHeight * 0.15))
    {
        image.classList.add("imageTop")
    }
    else
    {
        image.classList.remove("imageTop")
    }
}

window.addEventListener("scroll",windowScroll)