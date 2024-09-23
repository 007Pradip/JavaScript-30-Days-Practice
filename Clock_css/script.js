
// function setDate() {
//     const now = new Date();
//     const seconds = now.getSeconds();
//     const secondsDegrees = ((seconds / 60) * 360) + 90;
//     document.querySelector('.second-hand').style.transform = `rotate(${secondsDegrees}deg)`;

//     const mins = now.getMinutes();
//     const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
//     document.querySelector('.min-hand').style.transform = `rotate(${minsDegrees}deg)`;

//     const hours = now.getHours();
//     const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
//     document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegrees}deg)`;
// }

// setInterval(setDate, 1000);




// By tutorials
const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
    
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // console.log(secondsDegrees, minsDegrees, hoursDegrees);

}

setInterval(setDate, 1000);