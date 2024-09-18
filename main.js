import getNoteFromKey from './noteUtil';
import './style.css'
import * as Tone from "tone";

//const synth = new Tone.Synth().toDestination();

const synth = new Tone.Sampler({
	urls: {
		C4: "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		A4: "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",//va a internet si no lo encuentra
}).toDestination();

let keys = document.querySelectorAll(".key");



for (let key of keys) {
    let noteToPlay = key.getAttribute('data-note');
    key.addEventListener('mousedown', () => playNote(noteToPlay))
    key.addEventListener('mouseup', stopNote)
    key.addEventListener('mouseleave', stopNote)

}



document.addEventListener('keypress',ctrlTeclado)
document.addEventListener('keyup',stopNote)


function ctrlTeclado(event){
    let keyName=event.key
    //console.log(key)
    //if(keyName=='a') playNote('C4')
    note=getNoteFromKeyKey[keyName]
    playNote(note)
}

function playNote(note) {
    synth.triggerAttackRelease(note);
}
function stopNote() {
    synth.triggerRelease();
}


