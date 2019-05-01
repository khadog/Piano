
window.addEventListener('keyup', playSound);
function playSound(e){
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio){
        return; // Stop the function from running all together
    }else{
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    key.classList.add('madeTransition');
    }
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return; // Skip it if it's not a transform
    this.classList.remove('madeTransition');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
