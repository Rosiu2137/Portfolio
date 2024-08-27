import { sendMessage } from "./sendMessage.js"

const button = document.querySelector("#sendBtn")
const email = document.querySelector("#email")
const message = document.querySelector("#message")
const form = document.querySelector("#form")
const error = {
    email:false,
    message:false,
}

const emailRegex = (email)=>
{
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
    return regex.test(email)
}


const emailValidate = ()=>
{
    if(email.value.trim() && emailRegex(email.value))
    {
        error.email = false
    }
    else
    {
        if(!email.value.trim())
        {
            error.email = `Wpisz Adres Email`

        }
        else
        {
            error.email = `Niepoprawny Adres Email`

        }
        
    }
}

const messageValidate = ()=>
{
    message.value?error.message = false:error.message = 'Twoja wiadomość jest pusta'
}

const setErrors = ()=>
{
    const emailErrorDiv = document.querySelector("#emailErrorDiv")
    const messageError = document.querySelector("#messageError")
    const emailForm = document.querySelector(".emailForm")
    if(error.email || error.message)
    {
        emailForm.style.gap = `0.8rem`
    }
    else
    {
         emailForm.style.gap = `2rem`
    }
    if(error.email)
    {
        emailErrorDiv.innerHTML = error.email
        emailErrorDiv.style.display = 'flex'
        
    }
    else
    {
        emailErrorDiv.innerHTML = ''
        emailErrorDiv.style.display = 'none'
    }
    if(error.message)
    {
        messageError.innerHTML = error.message
        messageError.style.display = 'flex'
    }
    else
    {
        messageError.innerHTML = ''
        messageError.style.display = 'none'
    }
}

const validate = (e)=>
{
    e.preventDefault()
    emailValidate()
    messageValidate()

    if(!error.email && !error.message)
    {
        button.disabled = true
        button.classList.add("buttonDisabled")
        setErrors()
        sendMessage(email.value,message.value)
    }
    else
    {
        setErrors()
    }

}

form.addEventListener("submit",validate)
