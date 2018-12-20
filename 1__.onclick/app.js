// document.querySelector('html').onclick = function () {
//     alert('Ouch! Stop poking me!');
// }

// var myHTML = document.querySelector('html');
// myHTML.onclick = function () {
//     alert('Ouch! Stop poking me!');
// };


var myImage = document.querySelector('img');
var myLink = document.querySelector('a');

myLink.onclick = function () {
    var mySrc = myImage.getAttribute('src');

    if (mySrc === 'img/car-1.jpg') {
        myImage.setAttribute('src', 'img/car-2.jpg');
    } else if (mySrc === 'img/car-2.jpg') {
        myImage.setAttribute('src', 'img/car-3.jpg');
    } else if (mySrc === 'img/car-3.jpg') {
        myImage.setAttribute('src', 'img/car-4.jpg');
    } else if (mySrc === 'img/car-4.jpg') {
        myImage.setAttribute('src', 'img/car-5.jpg');
    } else if (mySrc === 'img/car-5.jpg') {
        myImage.setAttribute('src', 'img/car-6.jpg');
    } else {
        myImage.setAttribute('src', 'img/car-1.jpg');
    }
}
