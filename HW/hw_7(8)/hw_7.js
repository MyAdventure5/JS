console.log('_______________task-1_______________')
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User (id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userMass = [
    new User(3,'kokos', 'kokosov', 'koko@gmail.com', '+380954215488'),
    new User(15,'popo','popondosovich', 'popondos@gmail.com', '+380975285488'),
    new User(12,'Andrey','Andy', 'sejeicratacri-5767@yopmail.com', '+380(3270)30908'),
    new User(27,'Sergey','GreySer', 'toxecraprugri-9396@yopmail.com', '+380(19)18863'),
    new User(48,'Matvey','MataM', 'duhexauffozu-7068@yopmail.com', '+380(0398)25673'),
    new User(53,'Gurgen','Argonium', 'koullenneveha-7302@yopmail.com','+380(052)05106'),
    new User(14,'Alex','Lux', 'coukommutrixau-5937@yopmail.com','+380(44)58348'),
    new User(8, 'Albert','NotEinstein', 'gewewageicre-4643@yopmail.com','+380(246)85201'),
    new User(17,'Lion','Kitty', 'brappaupagrauffi-3226@yopmail.com', '+380(817)23267'),
    new User(90,'Conor','IBB', 'nefebaufrattou-9051@yopmail.com','+380(16)76534')
]
console.log(userMass)

console.log('_______________task-2_______________')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)

let userFiltered = userMass.slice().filter(user => user.id % 2 === 0)
console.log(userFiltered)

console.log('_______________task-3_______________')
// - Взяти масив з  User[] з попереднього завдання,
// та відсортувати його по id. по зростанню (sort)

let sortedUserMass = userMass.slice().sort((a, b) => a.id - b.id);
console.log(sortedUserMass);




console.log('_______________task-4_______________')
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order
// (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let massOfClient = [
    new Client(3,'kokos', 'kokosov', 'koko@gmail.com', '+380954215488', '250290'),
    new Client(15,'popo','popondosovich', 'popondos@gmail.com', '+380975285488', '15268'),
    new Client(12,'Andrey','Andy', 'sejeicratacri-5767@yopmail.com', '+380(3270)30908', '51256'),
    new Client(27,'Sergey','GreySer', 'toxecraprugri-9396@yopmail.com', '+380(19)18863', '655529'),
    new Client(48,'Matvey','MataM', 'duhexauffozu-7068@yopmail.com', '+380(0398)25673', '306586'),
    new Client(53,'Gurgen','Argonium', 'koullenneveha-7302@yopmail.com','+380(052)05106', '244678'),
    new Client(14,'Alex','Lux', 'coukommutrixau-5937@yopmail.com','+380(44)58348', '788937'),
    new Client(8, 'Albert','NotEinstein', 'gewewageicre-4643@yopmail.com','+380(246)85201', '500946'),
    new Client(17,'Lion','Kitty', 'brappaupagrauffi-3226@yopmail.com', '+380(817)23267', '112935'),
    new Client(90,'Conor','IBB', 'nefebaufrattou-9051@yopmail.com','+380(16)76534', '297414')
]
console.log(massOfClient)

console.log('_______________task-5_______________')
// - Взяти масив (Client [] з попереднього завдання).
// Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let filteredClient = massOfClient.slice().sort((a, b)=> a.order - b.order);
console.log(filteredClient)



console.log('_______________task-6_______________')
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,
// виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function() {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== 'function') {
                console.log(`${key} - ${value}`);
            }
        });
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}


let car1 = new Car(
    'Land Cruiser 300',
    'Toyota',
    2021,
    200,
    3.3
);
car1.drive();
car1.info();
car1.increaseMaxSpeed(20);
car1.changeYear(2022);
car1.addDriver({ name: 'Andrey', age: 22 });
console.log(car1)

console.log('_______________task-7_______________')
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість}
// на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля -
// значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості
// на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів,
// і додає його в поточний об'єкт car

class Cars {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        Object.entries(this).forEach(([key, value]) => {
            if (typeof value !== 'function') {
                console.log(`${key} - ${value}`);
            }
        });
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

// Створення об'єкту car і виклик методів
let cars1 = new Cars('Accord', 'Honda', 2020, 220, 2.0);
cars1.drive();
cars1.info();
cars1.increaseMaxSpeed(20);
cars1.changeYear(2020);
cars1.addDriver({ name: 'Polina', age: 22 });
console.log(cars1)

console.log('_______________task-8_______________')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги.
// Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік,
// туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find
//     та відповідного колбеку

class Popelufka {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}


let popelufce = [
    new Popelufka('Polya1', 20, 35),
    new Popelufka('Polya2', 21, 36),
    new Popelufka('Polya3', 22, 37),
    new Popelufka('Polya4', 23, 38),
    new Popelufka('Polya5', 24, 39),
    new Popelufka('Polya6', 25, 35),
    new Popelufka('Polya7', 26, 36),
    new Popelufka('Polya8', 27, 37),
    new Popelufka('Polya9', 28, 38),
    new Popelufka('Polya10', 29, 39)
];


let prince = new Prince('Prince Andrey', 22, 37);


let foundPopelufka = popelufce.find(Popelufka => Popelufka.footSize === prince.foundShoe);

console.log(foundPopelufka);

