/* Active learning: More color choices!
    In this example, you are going to take the ternary operator example we saw earlier 
    and convert the ternary operator into a switch statement that will allow us to 
    apply more choices to the simple website. Look at the <select> — this time you'll 
    see that it has not two theme options, but five. You need to add a 
    switch statement just underneath the // ADD SWITCH STATEMENT comment:

    It should accept the choice variable as its input expression.
    For each case, the choice should equal one of the possible values that can be selected, 
    i.e. white, black, purple, yellow, or psychedelic. Note that the values are case sensitive, 
    and should equal the <option> element value values rather than the visual labels.
    For each case, the update() function should be run, and be passed two color values, 
    the first one for the background color, and the second one for the text color. 
    Remember that color values are strings, so need to be wrapped in quotes. 
    If you make a mistake, you can always reset the example with the "Reset" button. 
    If you get really stuck, press "Show solution" to see a solution.
*/

var select = document.querySelector('select');
var body = document.querySelector('body');

select.onchange = function () {
    var choice = select.value;
    switch (choice) {
        case 'white':
            update('white', 'black');
            break;
        case 'black':
            update('black', 'green');
            break;
        case 'green':
            update('green', 'purple');
            break;
        case 'purple':
            update('purple', 'blue');
            break;
        case 'blue':
            update('blue', 'white');
            break;
    }
}

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}
