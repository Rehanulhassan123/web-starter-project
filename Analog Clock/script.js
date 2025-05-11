
setInterval(()=>{
  let date = new Date()
 
  let h = date.getHours()*30+date.getMinutes()/2
  let s = date.getSeconds()*6
  let m = date.getMinutes()*6

 

  hour.style.transform = `rotate(${h}deg)`
  min.style.transform = `rotate(${s}deg)`

  sec.style.transform = `rotate(${m}deg)`
 


},1000)