var drumButtons = document.querySelectorAll(".drum")

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSounds(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event){
    makeSounds(event.key);
});

function makeSounds(key){
    switch (key) {
        case "w":     
            document.querySelector("audio#tom-1").play();
            break;
        case "a":
            document.querySelector("audio#tom-2").play();
            break;
        case "s":
            document.querySelector("audio#tom-3").play();
            break;
        case "d":
            document.querySelector("audio#tom-4").play();
            break;
        case "j":
            document.querySelector("audio#snare").play();
            break;
        case "k":
            document.querySelector("audio#crash").play();
            break;
        case "l": 
            document.querySelector("audio#kick-bass").play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 10);
}

