// Ternary operator example
var select = document.querySelector('select')
var body = document.querySelector('body');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
    body.style.backgroundColor = bgColor;
    body.style.color = textColor;
}

select.onchange = function () {
    (select.value === 'black') ? update('black', 'red'): update('red', 'black');
}
