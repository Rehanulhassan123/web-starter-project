let toastContainer = document.querySelector(".toastContainer")
let buttons = document.querySelector(".buttons")
let sucessMsg = ` <i class="fa-solid fa-circle-check" style= "color:green"></i> Successfully Submitted `
let invalidMsg = `<i class="fa-solid fa-circle-xmark" style= "color:red"></i>  Invalid input , Try again! `
let errorMsg = `<i class="fa-solid fa-circle-exclamation" style= "color:purple"></i> Please Fix the Error`

function showToast(msg) {
    let toastBox = document.createElement("div")
    toastBox.classList.add("toast")
    toastBox.innerHTML = msg
    if (msg.includes("Invalid"))
        toastBox.classList.add("inval")
    if (msg.includes("Error"))
        toastBox.classList.add("err")
    toastContainer.appendChild(toastBox)
    setTimeout(() => {
        toastBox.remove()
    }, 5000)
}
buttons.addEventListener("click", (e) => {
    let target = e.target;
    if (target.classList.contains("success"))
        showToast(sucessMsg)
    else if (target.classList.contains("invalid"))
        showToast(invalidMsg)
    else if (target.classList.contains("error"))
        showToast(errorMsg)



})
