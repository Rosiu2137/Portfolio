import { loadingIcon } from "./loadingIcon.js"

const button = document.querySelector("#sendBtn")


export const sendMessage = (email,message)=>
{
    console.log("jd")
    let loading = true

    button.innerHTML = loadingIcon
}