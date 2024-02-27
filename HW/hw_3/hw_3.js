

console.log('_______________task1+2_______________')

// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//                                     +
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let i = 0; i < 10; i++){
    document.write(i + '<div>Lorem ipsum dolor sit amet.</div>')

}

console.log('_______________task3+4_______________')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//                             +
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.

let i = 0
while (i < 20){
    document.write(i + '<h1>Lorem ipsum dolor sit amet.</h1>');
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
for (let i = 0; i<listOfItems.length; i++ ) {
    document.write('<li>listOfItems</li>')

}
document.write('</ul>')