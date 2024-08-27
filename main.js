onload = () =>{
    var musik = "";

    var audio = document.getElementById("#myAudio");
    if (musik) {
        audio.src = musik;
    }
    document.body.classList.remove("container"); 
};