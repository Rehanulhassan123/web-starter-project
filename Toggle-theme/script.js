
const body = document.body;
const button = document.querySelector(".container Button");

button.addEventListener("click",(e)=>{
  e.preventDefault()
    if(body.classList.contains("dark"))
    {
        body.classList.remove("dark");
        button.textContent = "Dark Mode"
    }
    else
    {
        body.classList.add("dark")
        button.textContent = "Light Mode"
    }



})