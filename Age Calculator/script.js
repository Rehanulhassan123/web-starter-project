let inputBox = document.querySelector(".input");
let calBtn = document.querySelector(".btn")
let result = document.querySelector(".result")
let birthInfo;

inputBox.max = new Date().toISOString().split("T")[0]

function calculateAge ()
{
    
    let birthDate = birthInfo.getDate();
    let birthMonth = birthInfo.getMonth()+1;
    let birthYear = birthInfo.getFullYear()

    let CurrentTime = new Date();
    let currentDate = CurrentTime.getDate()
    let currentMonth = CurrentTime.getMonth()+1;
    let currentYear = CurrentTime.getFullYear()


   let calDate , calMonth ,calYear;
    calYear = currentYear-birthYear;
    if(currentMonth>=birthMonth)
    {
        calMonth = currentMonth - birthMonth
    }
    else 
    {
        calYear --;
        calMonth = 12 + currentMonth - birthMonth;
    }
    if(currentDate >= birthDate )
    {
        calDate = currentDate - birthDate
    }
    else 
    {
        calMonth --; 
         calDate =  getDaysInMonth(birthYear,birthMonth)+currentDate-birthDate
    }   
    if(calMonth < 0)
    {
        calMonth = 11
        currentYear--;
    }
    result.innerHTML = `you are <span>${calYear}</span> Years <span>${calMonth}</span> Months and <span>${calDate}</span> Days old`
}

function getDaysInMonth(year,month)
{
    return new Date(year,month,0).getDate()
}

calBtn.addEventListener("click",()=>{
    birthInfo = new Date(inputBox.value) ;
    if(birthInfo.toString().toLowerCase() != "invalid date")
    {
        console.log(birthInfo);
        calculateAge()
    }
    else
    {
        result.innerHTML = `Please enter valid date`
    }
})