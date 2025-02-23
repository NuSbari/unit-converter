const meters = document.getElementById("meters-result-el")
const volume = document.getElementById("volume-result-el")
const mass = document.getElementById("mass-result-el")
const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")

convertBtn.addEventListener("click", function() {
    meters.textContent = `${inputEl.value} meters = ${(inputEl.value * 3.281).toFixed(3)} feet | ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meters`
    volume.textContent = `${inputEl.value} liters = ${(inputEl.value * 0.264).toFixed(3)} gallons | ${inputEl.value} gallons = ${(inputEl.value / 0.264).toFixed(3)} liters`
    mass.textContent = `${inputEl.value} kilos = ${(inputEl.value * 2.204).toFixed(3)} pounds | ${inputEl.value} pounds = ${(inputEl.value / 2.204).toFixed(3)} kilos`
})