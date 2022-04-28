const wakingUp = () => 'Acordando!!';
const breakfast = () => 'Bora tomar café!!';
const sleepingTime = () => 'Partiu dormir!!';
const doingThings = (func) => func();
console.log(doingThings(wakingUp)); 
console.log(doingThings(breakfast)); 
console.log(doingThings(sleepingTime));