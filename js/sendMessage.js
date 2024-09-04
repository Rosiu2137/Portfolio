import database from './database.js'
import { sentAnimation, clearSentAnimation } from './animations/sentAnimation.js'


const button = document.querySelector("#sendBtn")
const sendAgain = document.querySelector("#sendAgain")
const successMessage = document.querySelector(".sendSuccess")

const sendSuccess = ()=>
{
    button.innerHTML = 'Wyślij'
    successMessage.classList.add("sendSuccessDisplay")
    button.classList.remove("buttonDisabled")
    button.disabled = false
    sentAnimation()
}

const sendError = ()=>
{
    const emailForm = document.querySelector(".emailForm")
    const errorPlace = document.querySelector("#messageError")
    button.innerHTML = 'Wyślij'
    button.classList.remove("buttonDisabled")
    button.disabled = false
    errorPlace.innerHTML = 'Wystąpił bład serwera. Spróbuj ponownie później'
    errorPlace.classList.add('backendError')
    
    emailForm.style.gap = window.innerWidth > 445?`0.8rem`:`2rem`
}

export const sendMessage = async(email,message)=>
{
    button.innerHTML = `...`
    try
    {
        await fetch(`${database}.json`,{
            method:"POST",
            body:JSON.stringify({email:email,message:message})
        })
        sendSuccess()
    }
    catch(ex)
    {
       sendError()
    }
}

sendAgain.addEventListener("click",()=>{
    document.querySelector("#email").value = ''
    document.querySelector("#message").value = ''
    clearSentAnimation()
    setTimeout(()=>{
        successMessage.classList.remove("sendSuccessDisplay")

    },500)
})