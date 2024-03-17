// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250



console.log('_______________task_1_______________')
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareArea = (a,b) => {
    return a * b;
}
let result  = squareArea(10, 5)
console.log('S = '+ result)



console.log('_______________task_2_______________')
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let pi = 3.14
let circleArea = (r) =>{
    return pi * (r*r);
}
let resultTask2 = circleArea(2)
console.log(resultTask2)



console.log('_______________task_3_______________')
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let cylinderArea = (r, h) =>{
    ring= pi * r * 2;
    side = ring * h;
    circle = pi * (r*r);
    return circle * 2 + side;
}
let resultTask3 = cylinderArea(5, 3)
console.log(resultTask3)

function cylinderAreaFunction(r, h){
    return (2 * 3.14 * (r*r)) + (2 * 3.14 * r * h);
}
let resultCylinder = cylinderAreaFunction(5, 3)
console.log('S = '+ resultCylinder)



console.log('_______________task_4_______________')
// - створити функцію яка приймає масив та виводить кожен його елемент

let array  = [
    {name:'Coco', age: 3, weight:8},
    {name:'Lolo', age: 2, weight:2},
    {name:'Popo', age: 4, weight:5}
]
let arrowObject = (arr) =>{
    for (const arrObj of arr){
        console.log(arrObj.name)
        console.log(arrObj.age)
        console.log(arrObj.weight)
    }
}

arrowObject(array)



console.log('_______________task_5_______________')
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

let textArgument = '- створити функцію яка створює параграф з текстом. Текст задати через аргумент'

let textArgVoid  = (arg) =>{
    document.write('===========task_5===========')
    document.write(`<p>
                        ${arg}         
                   </p>`
    )
}
textArgVoid(textArgument)



console.log('_______________task_6_______________')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let liTextArgument = '- створити функцію яка створює параграф з текстом. Текст задати через аргумент'

let liTextArgVoid  = (argum) =>{
    document.write('===========task_6===========')
    document.write(`<ul>`)
        for (let i = 0; i<=2; i++ ) {
            document.write (`<li>
                                ${argum}
                            </li>`
                            )
        }
    document.write(`</ul>`)

}
liTextArgVoid(liTextArgument)



console.log('_______________task_7_______________')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let olTextArgument = ' - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.\n' +
    ' Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)'
let olTextArgVoid  = (argumOl,numOl) =>{
    document.write('===========task_7===========')
    document.write(`<ol>`)
    for (let i = 0; i < numOl; i++) {
        document.write(
            `<li> 
                ${argumOl}
            </li>`
        )
    }
    document.write(`</ol>`)

}
olTextArgVoid(olTextArgument, 5)



console.log('_______________task_8_______________')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let dataArray = [
    123,
    'qwerwt',
    false,
    'asdf'
]

let dataLi = (datAr) =>{
    document.write('===========task_8===========')
    document.write(`<ol>`)
    for (let i = 0; i < datAr.length; i++){
            document.write(
                `<li> 
                ${datAr[i]}
            </li>`
            )
    }
    document.write(`</ol>`)
}

dataLi(dataArray)



console.log('_______________task_9_______________')
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

let arrObj = [
    {id:1, name:'Jason Statham', age:56},
    {id:2, name:'Nicolas Cage', age:60},
    {id:3, name:'Sylvester Gardenzio Stallone', age:77},
    {id:4, name:'Gojō Satoru', age:28}
]

let arrayObject = (arra) => {
    document.write('<div>===========task_9===========</div>');
    for (const arrToObject of arra) {
        document.write('<div style="margin-bottom: 3vh">');
            for (const elementsOfObject in arrToObject) {
                document.write(
                    `<li>
                            ${elementsOfObject} - ${arrToObject[elementsOfObject]}
                     </li>`
                );
        }
        document.write('</div>');
    }
}

arrayObject(arrObj);



console.log('_______________task_10_______________')
// - створити функцію яка повертає найменьше число з масиву

let massOfNum = [
    27,
    2,
    34,
    9,
    56
]

let functionOfNum = (mass) => {

   let numElement = mass[0];
    for (let massNums of mass){
        if ( massNums < numElement)
             numElement = massNums;
    }
    return numElement

}
let resultTask10 = functionOfNum(massOfNum)
console.log(resultTask10)



console.log('_______________task_11_______________')
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13
let massOfNums = [
    27,
    2,
    34,
    9,
    56
]

let functionOfNums = (mass) => {

    let numElement = 0;
    for (let massNums of mass){
        numElement = massNums + numElement;
    }
    return numElement

}
let resultTask11 = functionOfNums(massOfNums)
console.log(resultTask11)



console.log('_______________task_12_______________')
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let massNums = [
    27,
    2,
    34,
    9,
    56
]

let massChange = (numArr,index1,index2) =>{
    let number = numArr[index1]
    numArr[index1] = numArr[index2]
    numArr[index2] = number
    return numArr
}
let resolution = massChange(massNums,2,4)
console.log(resolution)



console.log('_______________task_12_______________')
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

let curentVal = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]
let exchange = (sumUAH,currencyValues,exchangeCurrency) =>{
    let sumValue = 0
    for (let current of currencyValues){
        if (current.currency === exchangeCurrency){
            sumValue = current.value
        }
    }
    sumValue = sumValue * sumUAH;
    return sumValue
}

let resul = exchange(10000,curentVal,'USD')
console.log(resul)