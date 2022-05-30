let str = 'эЙ, кАК деЛа?';
let strLower = str.toLocaleLowerCase();
let firstElem = strLower[0];
let firstElemUpper = firstElem.toLocaleUpperCase();
let strSlice = strLower.slice(1);
str = firstElemUpper + strSlice;
console.log(str);

let sillyString = 'эЙ, кАК деЛа?';
let lowerString = sillyString.toLocaleLowerCase();
let firstCharacter = lowerString[0];
let firstCharacterUpper = firstCharacter.toUpperCase();
let restOfString = lowerString.slice(1);
console.log(firstCharacterUpper + restOfString);

let javaScriptIsCool = true;
console.log(javaScriptIsCool);

let hadShowe = true;
let hasBackpack = true;
console.log(hadShowe && hasBackpack);

let hasApple = true;
let hasOrange = false;
console.log(hasApple || hasOrange);

let isWeekend = true;
let needToShowerToday = !isWeekend;
console.log(needToShowerToday);

let isWeekend = false;
let hadShower = true;
let hasApple = false;
let hasOrange = true;
let shouldGoToSchool = !isWeekend && hadShower && (hasApple || hasOrange);
console.log(shouldGoToSchool);

let height = 150;
let heightRestriction = 150;
let can = height >= heightRestriction;
console.log(can);

let mySecretNumber = 5;
let chicoGuess = 3;
console.log(mySecretNumber === chicoGuess);
let harpoGuess = 7;
console.log(mySecretNumber === harpoGuess);
let grouchGuess = 5;
console.log(mySecretNumber === grouchGuess);
console.log(0 == false);
console.log('false' == false);

let age = 12;
let accompained = true;
let legalAge = 12;
let can = (age >= legalAge) || accompained;
console.log(can);

myNullVariable = null;
console.log(typeof(myNullVariable));

let myTopThreeDinosaurs = ['Тиранозавр', 'Велоцираптор', 'Стегозаврт'];
console.log(myTopThreeDinosaurs);

let dinosaurs = ["Тираннозавр", "Велоцираптор", "Стегозавр", "Трицератопс", "Брахиозавр", "Птеранодон","Апатозавр", "Диплодок", "Компсогнат"
];
dinosaurs[10] = "tfhfth";
console.log(dinosaurs);

let arr = [1, null, undefined, 'str', ['красный', 'желтый','белый'], true];

console.log(arr);
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[4][0]);
console.log(arr.length);

let maniacs = ["Якко", "Вакко", "Дот"];
console.log(maniacs[0]);
console.log(maniacs[1]);
console.log(maniacs[2]);
console.log(maniacs.length);
console.log(maniacs[maniacs.length - 1]);


let animals = [];
animals.push('Кот');
animals.push('Пес');
animals.push('Лама');
console.log(animals);
console.log(animals.length);
animals.unshift('Мартышка');
console.log(animals);
animals.unshift('Белый медведь');
console.log(animals);
let lastElem = animals.pop();
console.log(animals);
console.log(lastElem);
animals.pop();
console.log(animals);
let firstAimal = animals.shift();
console.log(firstAimal);
console.log(animals);
animals.unshift(firstAimal);
console.log(animals);

let arr = [];
arr.push(1);
arr.push(2);
arr.push(null);
console.log(arr);
let lastElem = arr.pop();
console.log(lastElem);
console.log(arr);
arr.unshift(lastElem);
console.log(arr);
let firstElem = arr.shift();
console.log(arr);
console.log(firstElem);
arr.unshift(firstElem);
console.log(arr);

let number = [1, 2, 3, 4, 5];
let other = ['first', 'second', 'third', null];
let numberAndOther = other.concat(number);
console.log(numberAndOther);


let firstArr = [1, 2, 3, 4, 5];
let secondArr = [6, 7, 8];
let thirdArr = [9, 10];
let fullArr = firstArr.concat(secondArr, thirdArr);
console.log(fullArr);


let animal = ['Кот', 'Собака'];
let number = [1, 2, 3];
let color = ['red', 'blue', 'black'];
let fullArr = animal.concat(number, color);
console.log(fullArr);

let animals = [];
animals.push('Кот');
animals.push('Собака');
animals.push('Лошадь');
// console.log(animals);
let lastAnimal = animals.pop();
console.log(animals);
console.log(lastAnimal);
animals.unshift(lastAnimal);
console.log(animals);
let firstAnimal = animals.shift();
console.log(firstAnimal);
console.log(animals);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9, 10];
let fullArr = arr1.concat(arr2, arr3);
console.log(fullArr);

let colors = ['red', 'yellow', 'blue', 'black', 'green', 2, null];
console.log(colors.indexOf('red'));
console.log(colors.indexOf('black'));
console.log(colors.indexOf(null));
console.log(colors.indexOf(2));
console.log(colors.indexOf('purple'));


let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let joinArr = arr.join();
console.log(arr);
console.log(joinArr);
let joinArrSecond = arr.join('---');
console.log(joinArrSecond);

let arr = ['Семашко', 'Александр', 'Иванович'];
console.log(arr);
let newArr = arr.join();
console.log(newArr);
let secondArr = arr.join('   *   ');
console.log(secondArr);

let arr  = [3, 2, 1];
let newArr = arr.join(' больше, чем ');
console.log(newArr);


console.log(Math.random());
console.log(Math.random() * 2);
console.log(Math.random() * 3);
console.log(Math.random() * 10);
console.log(Math.floor(3.3));
console.log(Math.floor(3.3546456456));
console.log(Math.floor(9.9999));
console.log(Math.floor(3.3546456));
console.log(Math.floor(3.3454564562));



let arr = ['red', 'blue', 'yellow', 'black', 'pink', 'green'];
let indexRandom = Math.floor(Math.random() * arr.length);
console.log(indexRandom);
console.log(arr[indexRandom]);
// console.log(Math.floor(Math.random()));

let phrase = ['Звучит неплохо', 
              'Да, это определенно надо сделать',
              'Не думаю, что это хорошоая идея', 
              'Может, не сегодня?',
              'Компьютер говорит нет'
];
// Мне выпить еще молочного коктеля?
console.log(phrase[Math.floor(Math.random() * phrase.length)]);

let randomBodyParts = ['глаз', 'нос', 'череп'];
let randomAdjectives =  ['вонючая', 'унылая', 'дурацкая'];
let randomWords = ['муха', 'выдра', 'дубина', 'мартышка','крыса'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];

let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];

let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// let randomInsult = 'У тебя ' + randomBodyPart + ' словно ' + randomAdjective + ' ' + randomWord + ' !!!';
// console.log(randomInsult);
let arr = ['У тебя', randomBodyPart, 'словно', randomAdjective, randomWord + '!!!'];
console.log(arr.join(' '));


let partsBodyHuman = ['голова', 'палец', 'рука', 'грудь', 'нога', 'ухо', 'живот'];
let adjectives = ['плохой', 'страшный', 'большой', 'кривой'];
let partsBodyAnimals = ['голова', 'хвост', 'нога', 'туловище'];
let animals = ['муха', 'рыба', 'гусь'];

let partBodyHuman = partsBodyHuman[Math.floor(Math.random() * partsBodyHuman.length)];
let adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
let partBodyAnimals = partsBodyAnimals[Math.floor(Math.random() * partsBodyAnimals.length)];
let animal = animals[Math.floor(Math.random() * animals.length)];

// let randomInsultt = 'У тебя ' + partBodyHuman + ' еще более ' + adjective + ' ,чем ' + partBodyAnimals + ' у ' + animal;
let randomInsultt = ['У тебя', partBodyHuman, 'еще более', adjective, ',чем', partBodyAnimals, 'у', animal];
randomInsultt.join(' ');
let str = randomInsultt.join(' ');
console.log(str);

let cat = {
    legs: 3,
    name: 'Гармония',
    color: 'Черепаховый'
};
console.log(cat['legs']);
console.log(cat.color);

let dog = {
    name: 'Оладушек',
    age: 6,
    color:'белый',
    bark: 'Гав тяф тяф!'
};
console.log(Object.keys(dog));

let cat = {
    name: 'Гармония',
    age: 8,
    color: 'Черепаховый'
};
console.log(Object.keys(cat));

let obj = {};

// obj['name'] = 'Alex';
// obj['surName'] = 'Semashko';
// obj['age'] = 21;
obj.name = 'Alex';
obj.age = 21;
obj.surName = 'Semashko';
obj.aaa = true;

console.log(obj);
console.log(obj.aaa);


let str = 'Hello my dear friend';
console.log(str.slice(0, 7));

let arr = [];
arr.push(1);
arr.push('крысы');
arr.push('рыба');
arr.push(true);
console.log(arr);
let arrLast = arr.pop();
console.log(arrLast);
let firstElem = arr.shift();
console.log(arr);
console.log(firstElem);
arr.unshift(arrLast);
console.log(arr);
console.log(arr.indexOf(true));
console.log(arr.join('*'));

let cat = {
    age:8,
    name:'Гармония',
    color:'blue'
};
console.log(cat['name']);
let keysArr = Object.keys(cat);
console.log(keysArr);

let obj = {};

obj['namee'] = 'Alex';
obj['age'] = 21;
obj['surName'] = 'Semashko';
obj['color'] = 'red';
console.log(obj);

let dinosaurs = [
    { name: 'Тиранозавр рекс', period: 'Верхнемеловой' },
    { name: 'Стегозавр', period: 'Верхнеюрский' },
    { name: 'Платеозавр', period: 'Триасовый'}
];

console.log(dinosaurs[0].name);
console.log(dinosaurs[1].name);
console.log(dinosaurs[2].period);


let anna = { name: 'Анна', age: 11, luckyNumbers: [2, 4, 8,16] };
let dave = { name: 'Дэйв', age: 5, luckyNumbers: [3, 9, 40] };
let kate = { name: 'Кейт', age: 9, luckyNumbers: [1, 2, 3] };

let friends = [anna, dave, kate];
console.log(friends);
console.log(friends[1]);