var drumButtons = document.querySelectorAll(".drum")

for (var i = 0; i < drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function (){
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case "w":     
                var audioButton = document.querySelector("audio#tom-1").play();
                break;
            case "a":
                var audioButton = document.querySelector("audio#tom-2").play();
                break;
            case "s":
                var audioButton = document.querySelector("audio#tom-3").play();
                break;
            case "d":
                var audioButton = document.querySelector("audio#tom-4").play();
                break;
            case "j":
                var audioButton = document.querySelector("audio#snare").play();
                break;
            case "k":
                var audioButton = document.querySelector("audio#crash").play();
                break;
            case "l": 
                var audioButton = document.querySelector("audio#kick-bass").play();
                break;
            default:
                console.log(buttonInnerHTML);
                break;
        }
    
    });
}


