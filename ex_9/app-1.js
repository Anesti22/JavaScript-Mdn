/* Active learning: More Pet choices!
    In this example, you are going to take the ternary operator example we saw earlier 
    and convert the ternary operator into a switch statement that will allow us to 
    apply more choices to the simple website. Look at the <select> — this time you'll 
    see that it has not two theme options, but six.

    It should accept the choice variable as its input expression.
    For each case, the choice should equal one of the possible values that can be selected, 
    i.e. dog, cat, hamster, parrot, spider or goldfish. Note that the values are case sensitive, 
    and should equal the <option> element value values rather than the visual labels.
    For each case, the update().
*/

var select = document.querySelector('select');
var body = document.querySelector('body');

select.onchange = function () {
    var choice = select.value;
    switch (choice) {
        case 'dog':
            update('dog', 'cat');
            break;
        case 'cat':
            update('cat', 'hamster');
            break;
        case 'hamster':
            update('hamster', 'parrot');
            break;
        case 'parrot':
            update('parrot', 'spider');
            break;
        case 'spider':
            update('spider', 'goldfish');
            break;
        case 'goldfish':
            update('goldfish', 'dog');
            break;
    }
}


function update(actualPet, nextPet) {
    var choice = select.value;

    if (choice == 'dog') {
        document.body.className = ('output-1');
    } else if (choice == 'cat') {
        document.body.className = ('output-2');
    } else if (choice == 'hamster') {
        document.body.className = ('output-3');
    } else if (choice == 'parrot') {
        document.body.className = ('output-4');
    } else if (choice == 'spider') {
        document.body.className = ('output-5');
    } else if (choice == 'goldfish') {
        document.body.className = ('output-6');
    } else {
        document.body.className = ('output-6');
    }
}
