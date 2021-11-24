const timeLeft = document.getElementById('time-left')
const Birthday = new Date('04/28/2022')
const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24
let timerId
countDown = () => {
    const today = new Date()
    const timeSpan = Birthday - today

    if(timeSpan <= -day) {
        timeLeft.innerHTML = 'Happy Belated Birthday ;0'
        clearInterval(timerId)
        return
    }    
    if(timeSpan <= 0){
        timeLeft.innerHTML = 'Happy Birthday to you!'
        clearInterval(timerId)
        return
    }

const days = Math.floor(timeSpan/day)
const hours = Math.floor((timeSpan % day) / hour)
const minutes = Math.floor((timeSpan % hour ) / minute)
const seconds = Math.floor((timeSpan % minute) /second)

timeLeft.innerHTML = days + ' days ' + hours + ' hours ' + minutes + ' min ' + seconds + ' seconds 🥳'
}

timerId = setInterval(countDown,second)

