
let btn = document.querySelector("#btn")
let imageBox = document.querySelector(".imageBox")
const Url = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

btn.addEventListener("click",()=>{
    if(input.value.length>0)
    {
    img.src  = `${Url}${input.value}`;
    imageBox.classList.add("showimage")
    }
    else
    {
        input.classList.add("error")
        setTimeout(()=>{
        input.classList.remove("error")
        },1000)
    }
})