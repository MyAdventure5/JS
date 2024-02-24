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

console.log('_______________task1_1_1_______________')

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