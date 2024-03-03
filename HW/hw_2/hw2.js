// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
console.log('_______________task1_1_______________')
let phoneList = [
    {
        id: 395460636,
        class: 'Phone',
        brand: 'Apple',
        model: 'iPhone 15',
        color: 'pink',
        memory: 128,
        vendorCode: 'MTP13RX/A',
        price: 36999,
        currency: 'UAH',
        availability: true,

    }
]
console.log(phoneList)
console.log(phoneList[0])
console.log(phoneList[0].id)
console.log(phoneList[0].class)
console.log(phoneList[0].brand)
console.log(phoneList[0].model)
console.log(phoneList[0].color)
console.log(phoneList[0].memory)
console.log(phoneList[0].vendorCode)
console.log(phoneList[0].price)
console.log(phoneList[0].currency)
console.log(phoneList[0].availability)

console.log('_______________else_______________')

let list = [
    395460636,
    'Phone',
    'Apple',
    'iPhone 15',
    'pink',
    128,
    'MTP13RX/A',
    36999,
    'UAH',
    true,
]
console.log(list)
console.log(list[0])
console.log(list[1])
console.log(list[2])
console.log(list[3])
console.log(list[4])
console.log(list[5])
console.log(list[6])
console.log(list[7])
console.log(list[8])
console.log(list[9])


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

    console.log('_______________task1_2_______________')
    let bookOne = {
        title: 'Witcher',
        pageCount: 255,
        genre: 'fantastic',
    }
    let bookTwo = {
        title: 'The Adventure of Tom Sawyer',
        pageCount: 168,
        genre: 'Novel',
    }
    let bookThree = {
        title: 'The Art of War',
        pageCount: 68,
        genre: 'treatise',
    }
console.log(bookOne, bookTwo, bookThree)

// Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

console.log('_______________task1_3_______________')

    let authorsFirst = [
        {
            name: 'Andrzej Sapkowski',
            age: 75
        }
    ]
    let authorsSecond = [
        {
            name: 'Mark Twain',
            age: 74
        }
    ]
    let authorsThird = [
        {
            name: 'Sun Tzu',
            age: 48
        }
    ]
    let bookFirst = {
        title: 'Witcher',
        pageCount: 255,
        genre: 'fantastic',
        authorsFirst
    }
    let bookSecon = {
        title: 'The Adventure of Tom Sawyer',
        pageCount: 168,
        genre: 'Novel',
        authorsSecond
    }
    let bookThird = {
        title: 'The Art of War',
        pageCount: 68,
        genre: 'treatise',
        authorsThird
    }
    console.log(bookFirst, bookSecon, bookThird)

// Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

console.log('_______________task1_4_______________')


let userArr = [
    {name: 'Andrey', username: 'Andy', password: 'EHcckx28'},
    {name: 'Sergey', username: 'GreySer', password: 'Q6Cokp2q'},
    {name: 'Matvey', username: 'MataM', password: 'KNi6wG6p'},
    {name: 'Alex', username: 'Lux', password: '0n7Wmc13'},
    {name: 'Gurgen', username: 'Argonium', password: '8vNB8ZKj'},
    {name: 'Albert', username: 'NotEinstein', password: 'TMcGejnt'},
    {name: 'Micha', username: 'Matcha', password: 'uCuodNEW'},
    {name: 'Mark', username: '2turbo', password: 'uxFEZQnx'},
    {name: 'Lion', username: 'Kitty', password: 'AfzDJS9A'},
    {name: 'Adler', username: 'HellDiver', password: 'R0uUPTGd'},
    {name: 'Conor', username: 'IBB', password: 'U%~HgSy[mLN#Kg2<8QDo'}
];
    console.log(userArr[0].password)
    console.log(userArr[1].password)
    console.log(userArr[2].password)
    console.log(userArr[3].password)
    console.log(userArr[4].password)
    console.log(userArr[5].password)
    console.log(userArr[6].password)
    console.log(userArr[7].password)
    console.log(userArr[8].password)
    console.log(userArr[9].password)

// Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
//  Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// - Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.

console.log('_______________task2_1_______________')

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

    let x  = 1;
    if (x !== 0 ){
        document.write('<h1>Вірно</h1>')
    }
    else {
        document.write('<h1>Хиба</h1>')
    }

console.log('_______________task2_2_______________')

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).

    let time = +prompt('Enter time from 0 to 59');
        if (time>= 0 && time <15 ){
            alert('1 quoter');
        }
        else if (time>= 15 && time< 30 ){
            alert('2 quoter');
        }
        else if (time >= 30 && time < 45){
            alert('3 quoter');
        }
        else if (time >= 45 && time <= 59 ){
            alert('4 quoter');
        }
        else {
            alert('Щось не те клацнув');
        }


console.log('_______________task2_3_______________')

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

    let day = +prompt('Enter day from 1 to 31');
        if (day >= 1 && day <11 ){
            alert('1 decade');
        }
        else if (day >= 11 && day< 20 ){
            alert('2 decade');
        }
        else if (day >= 20 && day < 31){
            alert('3 decade');
        }
        else {
            alert('Щось не те клацнув');
        }


console.log('_______________task2_4_______________')

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані
// відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

    let week =  +prompt('Enter day from 1 to 7');

        switch (week) {
            case 1:
                alert('Monday')
                break;
            case 2:
                alert('Tuesday')
                break;
            case 3:
                alert('Wednesday')
                break;
            case 4:
                alert('Thursday')
                break;
            case 5:
                alert('Friday')
                break;
            case 6:
                alert('Saturday')
                break;
            case 7:
                alert('Sunday')
                break;
            default:
                alert('Щось не те клацнув');

        }

console.log('_______________task2_5_______________')

// - Користувач вводить або має два числа.
//    Потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.

    let numFirst =  +prompt('Your first number');
    let numSecond =  +prompt('Your second number');

        if (numFirst > numSecond) {
            alert(numFirst + ' ' + 'Більше')
        }
        else if (numFirst < numSecond){
            alert(numFirst+ ' ' + 'Більше')
        }
        else if (numFirst === numSecond){
            alert('Введені числа рівні')
        }
        else {
            alert('Щось не те клацнув');
        }

console.log('_______________task2_6_______________')

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//     (хибноподібні, тобто приводиться до false)



    let b = undefined
 console.log(b || b || 'default')





console.log('_______________task2_7_______________')

// - з файлу arrays.js (лежить000 в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log(coursesAndDurationArray[0].title + ' - Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log(coursesAndDurationArray[1].title + ' - Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log(coursesAndDurationArray[2].title + ' - Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log(coursesAndDurationArray[3].title + ' - Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log(coursesAndDurationArray[4].title + ' - Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log(coursesAndDurationArray[5].title + ' - Супер');
}