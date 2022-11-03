let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl = document.getElementById("mass")
const inputEl = document.getElementById("input-el")
let btn = document.getElementById("btn")

btn.addEventListener("click",function(){
    let inputVal = inputEl.value
    lengthEl.innerHTML = `${inputVal} meters = ${Number(inputVal*3.281).toFixed(3)} feet | ${inputVal} feet = ${Number(inputVal/3.281).toFixed(3)} meters` 
    volumeEl.innerHTML = `${inputVal} liters = ${Number(inputVal*0.264).toFixed(3)} gallons | ${inputVal} gallons = ${Number(inputVal/0.264).toFixed(3)} liters` 
    massEl.innerHTML = `${inputVal} kilos = ${Number(inputVal*2.204).toFixed(3)} pounds | ${inputVal} pounds = ${Number(inputVal/2.204).toFixed(3)} kilos` 

})




// 20 meters = 65.616 | 20 feet = 6.096