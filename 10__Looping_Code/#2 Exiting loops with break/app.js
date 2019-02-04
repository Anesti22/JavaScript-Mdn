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


// Exiting loops with break

const contacts = ['Chris:03497326', 'John:345525', 'Sarah:098765467', 'Bill:77665432', 'Mary:9765323', 'Diamme:567823445'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');


btn.addEventListener('click', function () {
    let searchName = input.value;
    input.value = '';
    input.focus();

    for (i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0] === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        } else {
            para.textContent = 'Contact Not Found';
        }
    }

    let num = input.value;

    for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }

        para.textContent += i + ' ';
    }

});

