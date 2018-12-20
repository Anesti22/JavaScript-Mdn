var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}

select.onchange = function () {
    (select.value === 'black') ? update('black', 'black'):
        (select.value === 'white') ? update('white', 'white') :
        (select.value === 'red') ? update('red', 'purple') :
        (select.value === 'purple') ? update('purple', 'red') :
        (select.value === 'red') ? update('red', 'purple') :
        update('black', 'white');
}
