// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
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
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250'

console.log('_______________task_1_______________')

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaFunction(a, b){
    return a * b;
}
let result  = areaFunction(10, 5)
console.log('S = '+ result)

console.log('_______________task_2_1_______________')

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circleAreaFunction(a){
    return Math.PI * Math.pow(a, 2);// Знаю що ще не вчил математичні методи, просто я подумав як правильнішевписати исло пі, а далі само загуглилось
}
let resultCircle  = circleAreaFunction(10)
console.log('S = '+ resultCircle)

console.log('_______________task_2_2_______________')
function circleAreaFunction2(a){
    return 3.14 * (a*a) //Всеж ось я зрозумів як має бути по лекціям, лише питання чи сильно минуле виконання вилазить за рамки?
}
let resultCircle2  = circleAreaFunction2(10)
console.log('S = '+ resultCircle2)

console.log('_______________task_3_1_______________')

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderAreaFunction(r, h){
    return (2 * 3.14 * (r*r)) + (2 * 3.14 * r * h);
}
let resultCylinder = cylinderAreaFunction(5, 3)
    console.log('S = '+ resultCylinder)

console.log('_______________task_3_2_______________')// не зрозумів як правильніше тому зробив ще так, не підскажете?

function cylinderAreaFunction2(r, h){
    let r2 = r * r;
    let surface = 2 * 3.14 * r2;
    let surfaceSide = 2 * 3.14 * r * h;
    return surface + surfaceSide;
}

let resultCylinder2 = cylinderAreaFunction2(5, 3)
console.log('S = '+ resultCylinder2)

console.log('_______________task_4_______________')

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [
    {name:'Coco', age: 3, weight:8},
    {name:'Lolo', age: 2, weight:2},
    {name:'Popo', age: 4, weight:5}
]
function arrOjectVoid (arr){
    for (let arrObject of arr) {
        console.log(arrObject.name)
        console.log(arrObject.age)
        console.log(arrObject.weight)
    }

}
arrOjectVoid(array)

console.log('_______________task_5_______________')

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function textDecl(text){
    document.write('===========task_5===========')
    document.write(
        `<p>
            ${text}
        </p>`
    )
}

textDecl(' - створити функцію яка створює параграф з текстом. Текст задати через аргумент')

console.log('_______________task_6_______________')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulDecl(text){
    document.write('===========task_6===========')
    document.write(
        `<ul>
           <li> ${text}</li>
           <li> ${text}</li>
           <li> ${text}</li>
        </ul>`
    )
}

ulDecl(' - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий')//Використав тест завдання так як вказано що довільний, щоб при перевірці було зручніше побачити його

console.log('_______________task_7_______________')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function cycleUlDecl(text, numLi){
    document.write('===========task_7===========')
    document.write(`<ol>`)
            for (let i = 0; i < numLi; i++) {
        document.write(
           `<li> ${text}</li>`
           )
        }
    document.write(`</ol>`)
}
cycleUlDecl('- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)', 10)

console.log('_______________task_8_______________')

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrOfVallues =[
    123,
    'string',
    false
]
function objectOfVallues(vallues){
    document.write('===========task_8===========')
    document.write(`<ul>`)
        for (const items in vallues) {
            document.write(`<li>${items} - ${vallues[items]}</li>`)
        }
        document.write(`</ul>`)

}
objectOfVallues(arrOfVallues)

console.log('_______________task_9_______________')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrObj = [
    {id:1, name:'Jason Statham', age:56},
    {id:1, name:'Nicolas Cage', age:60},
    {id:1, name:'Sylvester Gardenzio Stallone', age:77},
    {id:1, name:'Gojō Satoru', age:28}

]
function arrObjFun(array){
    document.write('===========task_9===========')
    for (const objOfArr of array) {// Якщо я правильно зрозумів то в цьому рядку ми ітеруємо масив витягаючи з нього обєкти
        document.write(`<ul>`)
        for (const elements in objOfArr) {// А цією ітерацією ми витягаємо з обєктів вже елементи та вписуємо їх замість аргументів функції, правильно ж зрозумів?
            document.write(`<li>${elements} - ${objOfArr[elements]}</li>`)
        }
        document.write(`</ul>`)
    }
    }

arrObjFun(arrObj)


console.log('_______________task_10_______________')

// - створити функцію яка повертає найменьше число з масиву

let arrayNum = [
    12,
    46,
    51,
    43,
    11,
    876,
    53,
    22
]
function lowNum(lowRes){
    let result = lowRes[0];// Початково важаємо за найменше значення перший елемент масиву
    for (let i =1; i < lowRes.length; i++) {
        if (lowRes[i]< result) // Перевіряємо починаючи з другого так як перший елемент в нас визначений як найменший,
            result = lowRes[i];
    }
    return result;
}
let res = lowNum(arrayNum)
console.log(res)

console.log('_______________task_11_______________')

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let sum = [
    12,
    20,
    33,
    15
]
function sumNum(arr){
    let firstSum = 0
    for (let i = 0; i < arr.length; i++){
        firstSum = firstSum + arr[i];

    }
    return  firstSum
}
let resul = sumNum(sum)
console.log(resul)


console.log('_______________task_12_______________')

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let numArr=[
    {name:'Coco', age: 3, weight:8},
    {name:'Lolo', age: 2, weight:2},
    {name:'Popo', age: 4, weight:5},
    {name:'Dodo', age: 8, weight:6}
]
function swap(arr,index1,index2){
    let arrSwap = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = arrSwap;
    return arr
}

 swap(numArr, 2,0)
console.log(numArr)

console.log('_______________task_13_______________')

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250'

let currVal =[
    {currency:'USD',value:40},
    {currency:'EUR',value:42}
]

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchRes = 0;
    for (let values of currencyValues) {
        if (exchangeCurrency === values.currency){
            exchRes = sumUAH/values.value;
        }

    }
    return exchRes;

}
let resultich = exchange(10000,currVal,'USD')
console.log(resultich)
