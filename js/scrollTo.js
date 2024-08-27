const nav = document.querySelector("#nav")

const scrollFunc = (e)=>
{
    const element = document.querySelector(`#${e.target.dataset.target}`)
    if(element)
    {
        console.log(element.offsetTop)
        window.scrollTo(0,element.offsetTop - element.clientHeight * 0.07)
    }
}

nav.addEventListener("click",scrollFunc)