const emailContainer = document.querySelector("#emailContainer")
const emailPlaceholder = document.querySelector("#emailPlaceholder")
const email = document.querySelector("#email")

let emailFocused = false


const containerStylesHandler = ()=>
{
    
    console.log()
    emailContainer.classList.toggle("inputContainerFocused")
    emailPlaceholder.classList.toggle("emailPlaceholderFocused")
}

const inputFocusHandler = (e)=>
{
    if(e.target.tagName != "INPUT")
    {
        if(emailFocused)
            {
                email.blur()
                emailFocused=false
            }
            else
            {
                email.focus()
                emailFocused=true
            }
    }
    
    
}

email.addEventListener("focus",containerStylesHandler)
email.addEventListener("blur", containerStylesHandler)
emailContainer.addEventListener("click",inputFocusHandler)