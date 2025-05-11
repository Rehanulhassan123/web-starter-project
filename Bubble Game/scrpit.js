console.log("hello world");
let Timer = 60;
let score = 0;
let hit;
let elem = ""

function makeBubble ()
{
  
    for(let i=0; i<96;i++)
    {
    let hit = Math.floor(Math.random()*10)
    elem +=`<div class="bubble">${hit}</div>` 
    }
    document.querySelector(".panel-bottom").innerHTML =elem;
    elem = ""
}

function setTimer()
{
    let timerId = setInterval(() => {
    if(Timer>0)
    {
       Timer --;
       document.querySelector(".timer").textContent = Timer;
    }
    else
    {
        clearInterval(timerId)
        document.querySelector(".panel-bottom").innerHTML = '<div class="gameOver">Game Over</div>'
    }        
    }, 1000);
}
makeBubble()

function GenerateHit()
{
     hit = Math.floor(Math.random()*10)
    document.querySelector(".hit").textContent = hit;
}
function incrementScore()
{
  score += 10;
  document.querySelector(".score").textContent = score;
}

document.querySelector(".panel-bottom").addEventListener("click",(e)=>{

  
    let elem = Number(e.target.textContent);
        if(elem === hit)
        {
            incrementScore()
            makeBubble()
            GenerateHit()
        }
     
})
makeBubble()
setTimer()
GenerateHit()







