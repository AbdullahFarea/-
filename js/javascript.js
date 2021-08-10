const counterDisplay = document.getElementsByClassName('counter')
const increase = document.getElementsByClassName('increase')
const reset = document.getElementsByClassName('reset')
const alertContainer = document.getElementsByClassName('alert-container')[0]
const alertDisplay = document.getElementsByClassName('alert')[0]
const yes = document.getElementsByClassName('yes')[0]
const no = document.getElementsByClassName('no')[0]
const clickSound = new Audio('./sounds/click.mp3')
const soundIcon = document.getElementById('soundIcon')
const soundBtn = document.querySelector('.sound')
let SoundPerference = localStorage.getItem('sound')

function Sound() {
    SoundPerference = localStorage.getItem('sound')
    if (SoundPerference == "vibrate") return navigator.vibrate(130)
    if (SoundPerference == "none") return "";
    return clickSound.play()
}

function changeIcon() {
    SoundPerference = localStorage.getItem('sound')
    if (SoundPerference == "vibrate") {
        soundIcon.classList.remove('fa-volume-up')
        soundIcon.classList.remove('fa-volume-mute')
        return soundIcon.classList.add('fa-wave-square')
    }
     if (SoundPerference == "none") {
        soundIcon.classList.remove('fa-volume-up')
        soundIcon.classList.remove('fa-wave-square')
        return soundIcon.classList.add('fa-volume-mute')
    }
    soundIcon.classList.remove('fa-volume-mute')
    soundIcon.classList.remove('fa-wave-square')
    return soundIcon.classList.add('fa-volume-up')
}

changeIcon()

function changeSound() {
    if (SoundPerference == "vibrate") {
        localStorage.setItem("sound", "none")
    }else if(SoundPerference == "none") {
        localStorage.setItem("sound", "click")
    }else {
        localStorage.setItem("sound", "vibrate")
    }
    SoundPerference = localStorage.getItem('sound')
    changeIcon()
}

soundBtn.addEventListener("click", () => {
    changeSound();
    Sound()
})

for(let i = 0; i < counterDisplay.length; i++) {
    counterDisplay[i].textContent = counterDisplay[i].dataset.start

    increase[i].addEventListener('click', () => {
        let num = counterDisplay[i].textContent
        if(num != 0) {
            counterDisplay[i].textContent =  parseInt(num) - 1
            Sound()
        }
    })

    reset[i].addEventListener('click', () => {
        alertContainer.style.display = "flex"
        alertDisplay.style.display = "flex"
        yes.addEventListener('click', () => {
        counterDisplay[i].textContent = counterDisplay[i].dataset.start
        alertContainer.style.display = "none"
        alertDisplay.style.display = "none"
    })
    })

    alertContainer.addEventListener('click', () => {
        alertContainer.style.display = "none"
        alertDisplay.style.display = "none"
    })
    no.addEventListener('click', () => {
        alertContainer.style.display = "none"
        alertDisplay.style.display = "none"
    })

}


