const hours = document.querySelector('#hour-hand')
const minute = document.querySelector('#minute-hand')
const second = document.querySelector('#second-hand')

const clock = setInterval(function time(){
    let dateToday = new Date()
    let hrs = dateToday.getHours()
    let min = dateToday.getMinutes()
    let sec = dateToday.getSeconds()

    second.style.transform = `translate(0, -50%) rotate(${sec * 6}deg)`
    minute.style.transform = `translate(0, -50%) rotate(${min * 6}deg)`
    hours.style.transform = `translate(0, -50%) rotate(${hrs * 30}deg)`
}, 1000)

