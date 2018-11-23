var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'MDN is cool, ' + myName;
}

var storedName = localStorage.getItem('name');
if (!storedName) {
    setUsername();
} else {
    myHeading.textContent = 'MDN is cool, ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
