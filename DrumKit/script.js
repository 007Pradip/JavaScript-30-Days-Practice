

// window.addEventListener('keydown', function(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//     //stop function if there is no audio for that key or if the audio is not in the document yet (when the page loads) 
//     if (!audio) return;
//     audio.currentTime = 0; //rewind to the start of the sound 
//     audio.play();
//     key.classList.add('playing');
// });
// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return; //skip it if it's not a transform
//     this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//this is the code from the tutorials javascript 30 days drum kit
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //stop function if there is no audio for that key or if the audio is not in the document yet (when the page loads) 
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start of the sound 
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
