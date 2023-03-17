const blockInner = document.querySelector('.ball')
let positionX = 0
let positionY = 0
let move = () =>{
    if(positionX <= 440 && positionY <= 0){
        positionX += 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    }else if(positionX >= 440 && positionY <= 440){
        positionY +=16
        blockInner.style.top = `${positionY}px`
        setTimeout(move, 9)
    } else if(positionY === 448 && positionX !==0){
        positionX -= 16
        blockInner.style.left = `${positionX}px`
        setTimeout(move, 9)
    } else {
        positionY -= 16
        blockInner.style.top = `${positionY}px`
        setTimeout(move,9)
    }

}
move()
//2
const timerElement = document.querySelector(".time");


let timer = 60;

function displayTime() {
    // вычисляем оставшиеся минуты и секунды
    const minutes = Math.floor(timer / 60);
    const seconds = timer % 60;

    timerElement.innerHTML = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

    timer--;

    if (timer < 0) {
        clearInterval(intervalId);
        timerElement.innerHTML = "Время вышло!";
    }
}

const intervalId = setInterval(displayTime, 1000);






