const counterDisplay = document.getElementsByClassName('counter')
const increase = document.getElementsByClassName('increase')
const reset = document.getElementsByClassName('reset')
const alertContainer = document.getElementsByClassName('alert-container')[0]
const alertDisplay = document.getElementsByClassName('alert')[0]
const yes = document.getElementsByClassName('yes')[0]
const no = document.getElementsByClassName('no')[0]

for(let i = 0; i < counterDisplay.length; i++) {

    increase[i].addEventListener('click', () => {
        let num = counterDisplay[i].textContent
        if(num != 0) counterDisplay[i].textContent =  parseInt(num) - 1

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


