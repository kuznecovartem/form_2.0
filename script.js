let myButton = document.querySelector('#myButton');
let nameinput = document.querySelector('#nameinput');
const list = document.querySelector('#list');

myButton.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('тест');
})