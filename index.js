// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function(){
    return drivers.splice(0,2);
}

const returnLastTwoDrivers = function() {
    return drivers.splice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(x) {
    return function fareMultiplier(){
        let y = (x * 5)
        return y
    }
}

function fareDoubler(){
    let x = 2;
    return (createFareMultiplier(x) * 2);
}