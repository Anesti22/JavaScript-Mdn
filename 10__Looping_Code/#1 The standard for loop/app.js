/*
    loop(food = 0; foodNeeded = 10) {
    if (food >= foodNeeded) {
        exit loop;
        // We have enough food; let's go home
    } else {
        food += 2; // Spend an hour collecting 2 more food
        // loop will then run again
    }
    }
*/

/*  loops are all to do with doing the same thing over and over again,
    which is great for rapidly completing repetitive tasks.
*/

/*

    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
    }

*/

// The standard for loop
/*

    for (initializer; exit-condition; final-expression) {
    // code to run
    }

*/


const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = "My cats are Called ";
const para = document.querySelector('p');

for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        info += cats[i] + '.';
    } else {
        info += cats[i] + ', ';

    }
}

para.textContent = info;
