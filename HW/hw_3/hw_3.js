

console.log('_______________task1+2_______________')

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//                                     +
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let b = 0; b < 10; b++){
    document.write(b +'<div>Lorem ipsum dolor sit amet.</div>')

}

console.log('_______________task3+4_______________')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//                             +
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.

let i = 0
while (i < 20){
    document.write(i +'<h1>Lorem ipsum dolor sit amet.</h1>');
    i++;
}

console.log('_______________task_5_______________')

// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>

let listOfItems = [
    'html',
    'css',
    'javascript',
    'mysql',
    'mongodb',
    'react',
    'angular',
    'node.js'
];

document.write('<ul>')
for (let i = 0; i<=listOfItems.length; i++ ) {

        document.write('<li>',listOfItems[i],'</li>')


}
document.write('</ul>')

console.log('_______________task_6_______________')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];
for (const product of products) {
    document.write(`<div className="product-card" style="display: flex; flex-direction: row; justify-content: space-evenly; align-items: center">
                         <h3 className="product-title">${product.title} Price - ${product.price}</h3>
                         <img style="width: 15vw;" src="${product.image}" alt="" className="product-image "/>
                    </div>`)

}


console.log('_______________task_6_______________')
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log('_______________task_6_1_______________')
for (const user of users) {
    if (user.status == true){
        console.log(user)
    }

}
console.log('_______________task_6_2_______________')
for (const user of users) {
    if (user.status == false){
        console.log(user)
    }
}
console.log('_______________task_6_3_______________')
for (const user of users) {
    if (user.age > 30){
        console.log(user)
    }
}
