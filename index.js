// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
    const scuberHq = 42;
    return Math.abs(blocks - scuberHq);
}
distanceFromHqInBlocks()

// function distanceFromHqInBlocks(blocks) {
//     const scuberHq = 49;
//     return (scuberHq - blocks);
// }
// distanceFromHqInBlocks()

// function distanceFromHqInFeet(blocks) {
//     const scuberHq = 42 * 64;

//     return Math.abs(blocks - scuberHq * 264);
// }
// distanceFromHqInFeet()

let hq = 42;

function distanceFromHqInFeet(someValue) {
    if (someValue < hq) {
        return (hq - someValue) * 264
    }
    else {
        return (someValue - hq) * 264
    }
}
distanceFromHqInBlocks(someValue)


function distanceTravelledInFeet(start, destination) {
    if (destination < hq) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264;
    }
}
distanceTravelledInFeet()


function calculatesFarePrice(start, destination) {
    if (destination < hq) {
        return (start - destination) * 264;
    }
    else {
        return (destination - start) * 264
    }
}
calculatesFarePrice()

function calculatesFarePrice(destination, start) {
    let distance = distanceTravelledInFeet(destination, start);
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance <= 2000) {
        return ((distance - 400) * 2) / 100;
    }
    else if (distance > 2500) {
        return "cannot travel that far";
    }

    else {
        return 25;
    }
}
calculatesFarePrice()