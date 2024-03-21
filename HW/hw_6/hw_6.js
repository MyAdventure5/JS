console.log('________________task-1_________________')
// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let t1_1 = 'hello world';
console.log('legth of string 1=',t1_1.length)

let t1_2 = 'lorem ipsum';
console.log('legth of string 2=',t1_2.length)

let t1_3 = 'javascript is cool';
console.log('legth of string 3=',t1_3.length)



console.log('________________task-2_________________')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let t2_1 = 'hello world';
console.log('string 1=',t2_1.toUpperCase())

let t2_2 = 'lorem ipsum';
console.log('string 2=',t2_2.toUpperCase())

let t2_3 = 'javascript is cool';
console.log('string 3=',t2_3.toUpperCase())



console.log('________________task-3_________________')
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let t3_1 = 'HELLO WORLD';
console.log('string 1=',t3_1.toLowerCase())

let t3_2 = 'LOREM IPSUM';
console.log('string 2=',t3_2.toLowerCase())

let t3_3 = 'JAVASCRIPT IS COOL';
console.log('string 3=',t3_3.toLowerCase())


console.log('________________task-4_________________')
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let t_3 =' dirty string   ';
console.log(t_3.substring(t_3.indexOf(' ') + 1, t_3.indexOf(' ', 8)));



console.log('________________task-5_________________')
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let str = 'Ревуть воли як ясла повні';
let arr = str.split(' ')
console.log(arr)



console.log('________________task-6_________________')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numObj = [10,8,-7,55,987,-1011,0,1050,0];
let numStr = numObj.map(numbers => numbers .toString())
console.log(numStr)




console.log('________________task-6_________________')
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

let sortNums = (numbers, argument) =>{
    if (argument === 'ascending'){
        return  numbers.slice().sort((a, b) => a - b);
    }
    else if (argument === 'descending'){
        return numbers.slice().sort((a, b) => b - a);
    }
}
let result = sortNums(nums, 'descending')
console.log(result)



console.log('________________task-7_________________')
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sort = coursesAndDurationArray.sort((a ,b) => {
    return b.monthDuration - a.monthDuration;
})
console.log(sort)

let filter = coursesAndDurationArray.filter((filt)=> filt.monthDuration >5);
console.log(filter)

let map = coursesAndDurationArray.map((cada, index ) => ({
    id: index + 1,
    title: cada.title,
    monthDuration: cada.monthDuration
})
);
console.log(map)


console.log('________________task-8_________________')
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
let deck = [];
let cardSuits = ['spade', 'diamond','heart', 'clubs'];
let value = ['6', '7', '8', '9', '10', 'ace','jack','queen','king','joker'];

let pop = value.pop()
cardSuits.forEach(suit => {
    value.forEach(value => {
        let color;
        if ( suit ==='spade' || suit === 'clubs') {
            color = 'black';
        }
        else {
            color = 'red'
        }
        deck.push({cardSuits: suit, value: value, color: color});
    })
})
console.log(deck)

let findSix = deck.filter(value => value.title === `6`);
console.log(findSix);

let findReds = deck.filter(value => value.color === `red`)
console.log(findReds)

let findDiamonds = deck.filter(value => value.suit === `diamonds`)
console.log(findDiamonds)

let findClubs9orHigher = deck.filter(value => value.suit === `clubs`).filter(value => value.title != `6` && value.title!= `7` && value.title != `8`)//АБО .filter(value => value.title != `7`).filter(value => value.title != `8`)
console.log(findClubs9orHigher)



console.log('________________task-9_________________')
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }



console.log('________________task-10_________________')
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

