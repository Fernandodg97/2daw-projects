let buttons: HTMLCollectionOf<HTMLButtonElement> = document.getElementsByTagName("button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
        document.getElementById("box")!.style.backgroundColor = buttons[i].value;
    });
    buttons[i].addEventListener("mouseenter", () =>{
        document.getElementById("box")!.style.backgroundColor = buttons[i].value;
    });
}

