onload = () =>{
    var musik = "";

    var audio = document.getElementById("#myAudio");
    if (musik) {
        audio.src = musik;
    }
    document.body.classList.remove("container"); 
};

// Function to play audio
function playAudio() {
    var audio = document.getElementById('myAudio');
    audio.play();
}