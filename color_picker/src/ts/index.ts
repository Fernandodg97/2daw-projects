function switchBg(color: string){
    let chosenColor: string = "white";
    switch (color) {
        case "redBt":
            chosenColor = "red";
            break;
        case "yellowBt":
            chosenColor = "yellow";
            break;
        case "greenBt":
            chosenColor = "green";
            break;
        case "blueBt":
            chosenColor = "blue";
            break;
        default:
            break;
    }
    document.body.style.backgroundColor = chosenColor;
}

// let redButton: HTMLButtonElement = document.getElementById('redBt') as HTMLButtonElement;
// redButton.addEventListener("click", () => switchBg('R'));

let buttons: HTMLCollection = document.getElementsByTagName("button") as HTMLCollection;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => switchBg(buttons[i].id));
}