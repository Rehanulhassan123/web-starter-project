let input =document.querySelector("#input");

let buttons = document.querySelectorAll("Button")
 
let str = ""
let arr = Array.from(buttons);

arr.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
    if(e.target.textContent == "=")
    {
        if(str == "")
        {
            input.value = "0"
        }
        else
        {
            str = eval(str)
            input.value = str;  
        }
        
    }
    else if (e.target.textContent == "AC")
    {
        str = ""
        input.value = str;
    }
    else if (e.target.textContent == "DEL")
    {
        str = str.substring(0,str.length-1)
        input.value = str;
    }
    else 
    {
        str += e.target.textContent;
        input.value = str
    }
    })
})