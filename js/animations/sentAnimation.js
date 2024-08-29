const svg = document.querySelector(".svgOk")
const sendSuccessMessage = document.querySelector("#sendSuccessMessage")
const sendAgainBtn = document.querySelector("#sendAgain")

export const sentAnimation = ()=>
{

    setTimeout(() => {
        svg.style.opacity = `1`
    }, 400);
    setTimeout(() => {
        sendSuccessMessage.style.opacity = `1`
    }, 600);
    setTimeout(() => {
        sendAgainBtn.style.opacity = `1`
    }, 800);
}

export const clearSentAnimation = ()=>
{
    svg.style.opacity = `0`
    sendSuccessMessage.style.opacity = `0`
    sendAgainBtn.style.opacity = `0`
    setTimeout(() => {
    }, 200);
    setTimeout(() => {
    }, 400);
}