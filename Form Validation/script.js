let nameError = document.querySelector(".nameError")
let phoneError = document.querySelector(".phoneError")
let mailError = document.querySelector(".mailError")
let msgError = document.querySelector(".msgError")
let submitError = document.querySelector(".submitError")

function validateName()
{
    let name = document.querySelector("#name").value;
    if((name.length <= 0) || name.trim().length <= 0)
    {
        nameError.textContent = "Name is Required"
        return false
    }
    else
    {
      nameError.innerHTML = `<li class= "fas fa-check-circle bg-green" ></li>`
      return true
    }
}
function validatePhone()
{
    let phone = document.querySelector("#phone").value;
    if(phone.length === 0)
    {
        phoneError.textContent = "phone is Required"
        return false
    }
    else if(phone.length !== 11)
    {
        phoneError.textContent = "phone no should be 11 digit"
        return false
    }
    else if(!phone.match(/^[0-9]{11}$/))
    {
        phoneError.textContent = "only digit please"
        return false
    }
    else 
    {
      phoneError.innerHTML = `<li class= "fas fa-check-circle bg-green" ></li>`
      return true
    }
}
function validateMail()
{
    let mail = document.querySelector("#mail").value;
    if(mail.length === 0)
    {
        mailError.textContent = "Mail is Required"
        return false
    }
    
else if(!mail.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    {
    mailError.textContent = "Invalid Email"
        return false
    }
    else 
    {
      mailError.innerHTML = `<li class= "fas fa-check-circle bg-green" ></li>`
      return true
    }
}
function validateMsg()
{
    let msg =  document.querySelector("#message").value;
    console.log(msg);
    let msgLength = 30;
    var left = msgLength-msg.length
    if(left >0 )
    {
          msgError.textContent = `${left} more characters required`
          return false 
    }

    
        console.log(msg.length);
        msgError.innerHTML = `<li class= "fas fa-check-circle bg-green " ></li>`
        return true  
    

}

function validateForm()
{

    if(!validateName() || !validatePhone() || !validateMail() || !validateMsg())
    {
        submitError.textContent = "please Fix Error";
        submitError.style.display = "block"
        setTimeout(()=>{submitError.style.display = "none"},3000)
        return false
    }

}
