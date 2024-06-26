const baseTone = new Oscillator()
const intervalTone = new IntervalOscillator()
let baseToneRandomNumber
let intervalToneRandomNumber
let baseNoteName
let baseNoteFrequency
let intervalName
let intervalInCents

const possibleBaseTones = { // 8
    "D": 149.5,
    "Db/C#": 141.6,
    "C": 133.4,
    "B": 126.2,
    "Bb/A#": 119.5,
    "A": 112.4,
    "Ab/G#": 106,
    "G": 100.2
}
const possibleIntervals = { // 12
    "m2": 100,
    "M2": 200,
    "m3": 300,
    "M3": 400,
    "P4": 500,
    "Tritone": 600,
    "P5": 700,
    "m6": 800,
    "M6": 900,
    "m7": 1000,
    "M7": 1100,
    "Oct.": 1200
}

function pickBaseNote() {
    baseToneRandomNumber = Math.floor(Math.random() * 9)
    if (baseToneRandomNumber == 9) {
        baseToneRandomNumber -= 7
    }
    baseNoteName = Object.keys(possibleBaseTones)[baseToneRandomNumber]
    baseNoteFrequency = Object.values(possibleBaseTones)[baseToneRandomNumber]
    baseTone.chooseNote(baseNoteFrequency)
}

function pickInterval() {
    intervalToneRandomNumber = Math.floor(Math.random() * 13)
    if (intervalToneRandomNumber == 13) {
        intervalToneRandomNumber -= 11 
    }
    intervalName = Object.keys(possibleIntervals)[intervalToneRandomNumber]
    intervalInCents = Object.values(possibleIntervals)[intervalToneRandomNumber]
    intervalTone.chooseNote(baseNoteFrequency, intervalInCents)
    answerSpace.textContent = intervalName
}