
setInterval(() => {
    
let date = new Date()
let h= date.getHours()
hrs.textContent =  (date.getHours()<10?"0":"")+ date.getHours()
min.textContent =  (date.getMinutes()<10?"0":"")+ date.getMinutes()
sec.textContent = (date.getSeconds()<10?"0":"")+ date.getSeconds()

}, 1000);