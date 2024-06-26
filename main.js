const baseToneOnButton = document.querySelector('input#base-on')
const baseToneOffButton = document.querySelector('input#base-off')
const intervalToneOnButton = document.querySelector('input#interval-on')
const intervalToneOffButton = document.querySelector('input#interval-off')
const nextButton = document.querySelector('input#next')
const answerSpace = document.querySelector('p#answer')

baseToneOnButton.addEventListener('click', (e) => {
    baseTone.playNote()
})
baseToneOffButton.addEventListener('click', (e) => {
    baseTone.stopNote()
})
intervalToneOnButton.addEventListener('click', (e) => {
    intervalTone.playNote()
})
intervalToneOffButton.addEventListener('click', (e) => {
    intervalTone.stopNote()
})
nextButton.addEventListener('click', (e) => {
    if (baseTone.playing) {
        baseTone.stopNote()
    }
    if (intervalTone.playing) {
        intervalTone.stopNote()
    }
    pickBaseNote()
    pickInterval()
})
pickBaseNote()
pickInterval()