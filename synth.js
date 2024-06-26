const audioContext = new window.AudioContext

// making wavetable
let realNumbers = new Float32Array(5)
realNumbers[0] = 10
realNumbers[1] = 2.1
realNumbers[2] = 0.6
realNumbers[3] = 0
realNumbers[4] = 0.3
let imagNumbers = new Float32Array(5)
for (i in imagNumbers) {
    imagNumbers[i] = 0
}
let wavetable = new PeriodicWave(audioContext, {
    real: realNumbers,
    imag: imagNumbers
})

// gain
let gain = new GainNode(audioContext, {
    gain: 0.2
})

// oscillator
class Oscillator {
    oscillator
    previousNote
    playing = false

    connectToDestination() {
        this.oscillator.connect(gain).connect(audioContext.destination)
    }
    chooseNote(note) {
        this.previousNote = note
        this.oscillator = new OscillatorNode(audioContext, {
            periodicWave: wavetable,
            frequency: note
        })
        this.connectToDestination()
    }
    playNote() {
        this.oscillator.start()
        this.playing = true
    }
    stopNote() {
        this.oscillator.stop()
        this.playing = false
        this.chooseNote(this.previousNote)
    }
}
class IntervalOscillator extends Oscillator {
    #previousInterval

    chooseNote(note, interval) {
        this.previousNote = note
        this.#previousInterval = interval
        this.oscillator = new OscillatorNode(audioContext, {
            periodicWave: wavetable,
            frequency: note,
            detune: interval
        })
        this.connectToDestination()
    }
    stopNote() {
        this.oscillator.stop()
        this.playing = false
        this.chooseNote(this.previousNote, this.#previousInterval)
    }
}