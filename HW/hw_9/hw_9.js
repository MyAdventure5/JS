console.log('_______________task-1_______________')
// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let formContainer = document.getElementById('formContainer');
let outputContainer = document.getElementById('outputContainer');

let form = document.createElement('form');
form.id = 'myForm';

let nameLabel = document.createElement('label');
nameLabel.textContent = 'Name:';
form.appendChild(nameLabel);

let nameInput = document.createElement('input');
nameInput.type = 'text';
nameInput.id = 'name';
nameInput.name = 'name';
form.appendChild(nameInput);

form.appendChild(document.createElement('br'));

let surnameLabel = document.createElement('label');
surnameLabel.textContent = 'Surname:';
form.appendChild(surnameLabel);

let surnameInput = document.createElement('input');
surnameInput.type = 'text';
surnameInput.id = 'surname';
surnameInput.name = 'surname';
form.appendChild(surnameInput);

form.appendChild(document.createElement('br'));

let ageLabel = document.createElement('label');
ageLabel.textContent = 'Age:';
form.appendChild(ageLabel);

let ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.id = 'age';
ageInput.name = 'age';
form.appendChild(ageInput);

form.appendChild(document.createElement('br'));
form.appendChild(document.createElement('br'));

let submitButton = document.createElement('button');
submitButton.type = 'button';
submitButton.textContent = 'Submit';
submitButton.addEventListener('click', submitForm);
form.appendChild(submitButton);

formContainer.appendChild(form);


function submitForm() {

    let name = document.getElementById('name').value;
    let surname = document.getElementById('surname').value;
    let age = document.getElementById('age').value;

    // Виводимо дані у блок для виведення
    outputContainer.textContent = `Name: ${name} , Surname: ${surname} , Age: ${age}`;
}




console.log('_______________task-2_______________')
// є сторінка, на якій є блок, я кому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number = localStorage.getItem('number') || 0;


document.getElementById('numberBlock').textContent = number;


number++;
localStorage.setItem('number', number);




console.log('_______________task-3_______________')
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна),
// при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


let currentDate = new Date();
let dateString = currentDate.toLocaleString();

let sessions = localStorage.getItem('sessions') ? JSON.parse(localStorage.getItem('sessions')) : [];

sessions.push(dateString);

localStorage.setItem('sessions', JSON.stringify(sessions));




console.log('_______________task-4_______________')
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів





console.log('_______________task-5_______________')
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let textElement = document.getElementById('text');
let hideButton = document.getElementById('hideButton');
hideButton.addEventListener('click', function() {
    textElement.style.display = 'none';
});



console.log('_______________task-6_______________')
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні
//     на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let agesInput = document.getElementById('ageInput');
let checkButton = document.getElementById('checkButton');

checkButton.addEventListener('click', function() {

    let age = parseInt(agesInput.value);

    if (age < 18) {
        alert('Ne Ok');
    } else {
        alert('Ok');
    }
});

console.log('_______________task-7_______________')
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк,
// третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка,
//     з відповідним вмістом.
// (Додатковачастина для завдання)




// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним
// блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження,
//     які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд -
//     нічого не відбувається