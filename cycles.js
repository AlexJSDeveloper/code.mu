// 63
// Цикл while в JavaScript

// Задача 1
// Выведите в консоль числа от 1 до 100.

let num = 1;

while (num <= 100) {
    console.log(num);
    num++;
}

// Задача 2
// Выведите в консоль числа от 11 до 33.

let num = 11;

while (num <= 33) {
    console.log(num);
    num++;
}

// Задача 3 
// Выведите в консоль четные числа в промежутке от 0 до 100.

let num = 2;

while (num <= 10) {
    console.log(num);
    num += 2;
}

// Задача 4
// Выведите в консоль нечетные числа в промежутке от 1 до 99.

let num = 1;

while (num <= 99) {
    console.log(num);
    num += 2;
}

// Задача 5
// Выведите в консоль числа от 30 до 0.

let num = 30;

while (num >= 0) {
    console.log(num);
    num--;
}

// 64
// Ошибки начинающих при работе с циклом while в JavaScript

// Задача 1
// В следующем коде программист вывел числа от 10 до 1:
// В коде, однако, была допущена ошибка, которая привела к тому, что цикл выполняется бесконечно. Исправьте ошибку программиста.

let i = 10;

while (i >= 1) {
	console.log(i);
    i--;
}

// 65
// Цикл for в JavaScript

// Задача 1
// С помощью цикла for выведите в консоль числа от 1 до 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Задача 2
// С помощью цикла for выведите в консоль числа от 11 до 33.

for (i = 11; i <= 33; i++) {
    console.log(i);
}

// Задача 3
// С помощью цикла for выведите в консоль четные числа в промежутке от 0 до 100.

for (i = 0; i <= 100; i += 2) {
    console.log(i);
}

// Задача 4
// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

for (let i = 1; i <= 99; i += 2) {
    console.log(i);
}

// Задача 5
// С помощью цикла for выведите в консоль числа от 100 до 0.

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// 66
// Накопление результата в цикле JavaScript

// Задача 1
// Найдите произведение целых чисел от 1 до 20.

let result = 1;

for (let i = 1; i <= 20; i++) {
    result = result * i;
} 

console.log(result); // 2432902008176640000

// Задача 2
// Найдите сумму четных чисел от 2 до 100.

let result = 0;

for (let i = 2; i <= 100; i += 2) {
    result = result + i;
}

console.log(result); // 2550

// Задача 3
// Найдите сумму нечетных чисел от 1 до 99.

let result = 0;

for (let i = 1; i <= 99; i += 2) {
    result = result + i;
}

console.log(result); // 2500

// 67
// Цикл for для массивов в JavaScript

// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача 2
// В следующем коде программист вывел в консоль все элементы массива: В коде, однако, была допущена ошибка, которая привела к тому, что в последней итерации цикла почему-то выводится undefined, а не элемент массива. Исправьте ошибку программиста. Объясните, в чем он был не прав.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача 3
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
        console.log(arr[i]);
    }
}

// Задача 4
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let result = 1;

for (let i = 1; i < arr.length; i++) {
    result *= arr[i];
}
console.log(result);

// Задача 5
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let result = 0;

for (let i = 0; i < arr.length; i++) {
    result += (arr[i])**2;
}
console.log(result);

// Задача 6
// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let arr = [2, 5, 9, 15, 1, 4];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 3 && arr[i] < 10) {
        console.log(arr[i]);
    }
}

// Задача 7
// Дан массив с числами. Числа могут быть положительными и отрицательными. Найдите сумму положительных элементов массива.

let arr = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
let sum = 0;

for (let i = 0;i < arr.length; i++) {
    if (arr[i] > 0) {
        sum += arr[i]; 
    }
}
console.log(sum);

// Задача 8
// Дан массив arr. Найдите среднее арифметическое его элементов (сумма делить на количество). Проверьте задачу на массиве с элементами 1, 2, 3, 4, 5.

let arr = [1, 2, 3, 4, 5];
let sum = 0;
let result = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    result = sum / arr[i];
}
console.log(result);

// Задача 9
// Дан массив числами, например: Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

let arr = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < arr.length; i++) {
    str = String(arr[i]);
    if (str[0] == 1 || str[0] == 2 || str[0] == 5) {
        console.log(str);
    }
}

// Задача 10
// Дан массив с числами. Выведите элементы этого массива в обратном порядке.

let arr = [1, 2, 3, 4, 5];

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}

// Задача 11
// Дан массив с числами. С помощью цикла выведите на экран все элементы, значение которых совпадает с их порядковым номером в массиве.

let arr = [0, 10, 2, 30, 4, 5, 6];

for (let i = 0; i <= arr.length; i++) {
    if (i == arr[i]) {
        console.log(arr[i]);
    }
}

// Задача 12
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива с новой строки. Используйте для этого тег br.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write(arr[i] + '<br>');
}

// Задача 13
// Дан массив с числами. С помощью цикла for и функции document.write выведите каждый элемент массива в отдельном абзаце

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    document.write('<p>' + arr[i] + '</p>');
}

// Задача 14
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 'Понедельник';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 'Суббота' || arr[i] == 'Воскресенье') {
        document.write('<b>' + arr[i] + '</b>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}

// Задача 15
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а текущий день выведите курсивом. Номер текущего дня должен храниться в переменной day.

let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let day = 'Понедельник';

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == day) {
        document.write('<i>' + arr[i] + '</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>');
    }
}

// 68
// Перебор массива циклом for-of в JavaScript

// Задача 1
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for-of выведите все эти элементы на экран.

let arr = ['a', 'b', 'c', 'd', 'e'];

for (let elem of arr) {
    console.log(elem);
}

// Задача 2
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for-of найдите сумму элементов этого массива.

let arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}
console.log(sum); // 15


// Цикл for vs for-of 
// Возникает вопрос, когда же для перебора массива применять цикл for-of, а когда обычный for? Правило тут такое: если вам не нужны номера элементов массива - используйте for-of, а если нужны - используйте обычный for.

// Задача 3
// Пусть у вас есть массив с названиями месяцев. С помощью цикла выведите на экран все месяцы из массива. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

for (let elem of arr) {
    console.log(elem);
}

// Задача 4
// Пусть у вас есть массив с названиями месяцев. Пусть в переменной month хранится номер текущего месяца, например, 10. С помощью цикла выведите все месяцы, а текущий месяц выведите курсивом. Определите, каким циклом удобнее будет решить эту задачу: циклом for-of или обычным for со счетчиком.

let arr = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
let month = 10;

for (let i = 0; i < arr.length; i++) {
    if ( month == i + 1) {
        document.write('<i>' + arr[i] + '</i>' + '<br>');
    } else {
        document.write(arr[i] + '<br>' );
    }
}

// 69
// Перебор объекта циклом for-in в JavaScript

let obj = {a: 1, b: 2, c: 3};

for (let key in obj) {
    console.log(key); // a b c
}

for (let key in obj) {
    console.log(obj[key]); // 1 2 3
}

// Задача 1
// Дан объект следующий объект: С помощью цикла for-in найдите сумму элементов этого объекта.

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
let sum = 0;

for (let key in obj) {
    sum += obj[key];
}

console.log(sum); // 15

// 72
// Инструкция break в JavaScript

// Задача 1
// Дан массив с числами. Запустите цикл, который будет по очереди выводить элементы этого массива в консоль до тех пор, пока не встретится элемент со значением 0. После этого цикл должен завершить свою работу.

let arr = [1, 2, 3, 4, 0, 5, 6];

for (let elem of arr) {
    if (elem == 0) {
        console.log(elem);
        break;
    }
    console.log(elem);
}


// Задача 2
// Дан массив с числами. Найдите сумму элементов, расположенных от начала массива до первого отрицательного числа.

let arr = [1, 2, 3, 4, 5, 6, -1, 10];
let sum = 0;

for (let elem of arr) {
    if (elem < 0) {
        break;
    }
    sum += elem;
}
console.log(sum);

// Задача 3
// Дан массив с числами. Найдите позицию первого числа 3 в этом массиве (считаем, что это число обязательно есть в массиве).

let arr = [1, 2, 10, null, 3, 4, 5, 6];
let num = 3;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
        console.log(i + 1);
    }
}

// Задача 4
// Определите, сколько целых чисел, начиная с числа 1, нужно сложить, чтобы сумма получилась больше 100.
let sum = 0;
for (let i = 1; i < 100; i++) {
    sum += i;
    if (sum > 100) {
        console.log(i); // 14
        break;
    }
}

// 73
// Инструкция continue в JavaScript

let arr = [1, 2, 3, 4, 5, 6, 7, 
	8, 9]; 

for (let elem of arr) {
	let result;
	
	if (elem % 2 == 0) {
		result = elem * elem;
	} else if (elem % 3 == 0) {
		result = elem * elem * elem;
	} else {
		continue; // перейдем на новую итерацию цикла 
	}
	
	console.log(result); 
		// выполнится, если делится  на 2 или 3 
}

// 74
// Область видимости let и var в циклах JavaScript

for (let i = 1; i <= 9; i++) {
	let num = 3;
	console.log(num); // выведет 3
}

// Если же попытаться вывести эту переменную снаружи цикла, то мы получим ошибку:

for (let i = 1; i <= 9; i++) {
	let num = 3;
}

console.log(num); // выдаст ошибку

// При необходимости можно объявить переменную снаружи цикла - тогда она будет доступна как внутри цикла, так и снаружи:

let num; // объявим переменную 	снаружи цикла 


for (let i = 1; i <= 9; i++) {
	num = 3; // установим ей значение
}

console.log(num); // выведет 3

// 75
// Работа с флагами в JavaScript

// Задача 1
// Дан массив:  Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите 'да', а если нет - выведите 'нет'.

let arr = ['a', 'b', 'c', 'd', 'e'];
let flag = false;

for (let elem of arr) {
    if (elem == 'c') {
        flag = true;
        break;
    }
}
if (flag) {
    console.log('да');
} else {
    console.log('нет');
}

// 76
// Нахождение простых чисел на JavaScript

let num = 30;

let flag = true;
for (let i = 2; i < num; i++) {
	if (num % i == 0) {
		flag = false;
		break; // выйдем из цикла
	}
}

console.log(flag);

// Задача 1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

let num = 12;
let flag = false;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = true;
        break;
    }
}
if (flag) {
    console.log('Число составное');
} else {
    console.log('Число простое');
}

// 77
// Циклы без заданного количества итераций в JavaScript


// Задача 1
// Дано число num с неким начальным значением. Умножайте его на 3 столько раз, пока результат умножения не станет больше 1000. Какое число получится? Посчитайте количество итераций, необходимых для этого.

let num = 1;
let count = 0;

while (num < 1000) {
    console.log(num);
    num *= 3;
    count++;
}

console.log(num, count);

// Задача 2
// Решите предыдущую задачу через цикл for.

for (var num = 1, i = 0; num < 1000; num *=3, i++) ;
console.log(num, i);

// 78
// Формирование строк через циклы в JavaScript

// Задача 1
// С помощью цикла сформируйте строку, заполненную 5-тью нулями.

let str = '';

for (let i = 0; i < 5; i++) {
    str += '0';
}
console.log(str);

// Задача 2
// С помощью цикла сформируйте строку '123456789' и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';

for (let i = 1; i < 10; i++) {
    str += i;
}

console.log(str);

// Задача 3
// С помощью цикла сформируйте строку '987654321' и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '';

for (let i = 9; i > 0; i--) {
    str += i;
}

console.log(str);
// console.log(typeof(str));

// Задача 4
// С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-' и запишите ее в переменную str. Выведите значение этой переменной на экран.

let str = '-';

for (let i = 1; i < 10; i++) {
    str += `${i}-`;
}
console.log(str);

// 79
// Цикл for и типы данных JavaScript

// Сначала необходимо преобразовать число в строку с помощью функции String, и уже тогда получать определенный символ полученной строки

// Задача 1
// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.


for (let i = 10; i < 1001; i++) {
    let str = String(i);
    let sum = Number(str[0]) + Number(str[1]);
    if (sum == 5) {
        console.log(str);
    }
}

// Задача 2
// Переберите циклом числа от 1 до 30 и сложите их как строки.


let result = '';

for (let i = 1; i <= 30; i++) {
    result += i;
}

console.log(result);

// 80
// Вложенные циклы в JavaScript

for (let i = 0; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(i);
    }
}

// Задача 1
// С помощью двух вложенных циклов выведите на экран следующую строку: 111222333444555666777888999

let str = '';

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        str += i;
    }
}

console.log(str);

// Задача 2
// С помощью двух вложенных циклов выведите на экран следующую строку: 11 12 13 21 22 23 31 32 33

let str = '';

for (let i = 10; i <= 30; i += 10) {
    for (let j = 1; j <= 3; j++) {
        str += i + j + ' ';
    }
}

console.log(str);

// 81
// Вложенные циклы и область видимости в JavaScript

// В следующем примере переменная num доступна во внутреннем цикле: 

for (let i = 0; i <= 9; i++) {
    let num = 3;

    for (let j = 0; j <= 9; j++) {
        console.log(num); // 3 3 3 3 3 
    }
}
//////// А вот снаружи внешнего цикла переменная num недоступна:
for (let i = 0; i <= 9; i++) {
    let num = 3;

    for (let j = 0; j <= 9; j++) {

    }
}

console.log(num); // ошибка

// Переменные, объявленные во внутреннем цикле, недоступны снаружи:

for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
        let num = 3;
        console.log(num);
    }
    console.log(num); //ошибка
}

console.log(num); // ошибка


// 82
// Заполнение массивов через цикл в JavaScript

let arr = [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;

console.log(arr);

// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10.

let arr= [];

arr[0] = 1;
arr[1] = 2;
arr[2] = 3;
arr[3] = 4;
arr[4] = 5;
arr[5] = 6;
arr[6] = 7;
arr[7] = 8;
arr[8] = 9;
arr[9] = 10;

console.log(arr);

// Задача 2
// Объявите пустой массив, а затем заполните его 5-ю буквами x.

let arr = [];

arr[0] = 'x';
arr[1] = 'x';
arr[2] = 'x';
arr[3] = 'x';
arr[4] = 'x';

console.log(arr);

// Заполнение массива в цикле

let arr = [];

for (let i = 0; i <= 4; i++) {
    arr[i] = i + 1;
}
console.log(arr);

// Задача 3
// С помощью цикла заполните массив числами от 1 до 100.

let arr = [];

for (let i = 0; i <= 99; i++) {
    arr[i] = i + 1;
}

console.log(arr);


// Заполнение значениями не по порядку


let arr = [];

for (let i = 2, j = 0; i <= 100; j++, i += 2) {
    arr[j] = i;
}
console.log(arr);
console.log(arr.length); //50

// Задача 4
// С помощью цикла заполните массив нечетными числами в промежутке от 1 до 99.

let arr = [];

for (let i = 1, j = 0; i <= 99; i += 2, j++) {
    arr[j] = i;
}

console.log(arr);


// 83
// Изменение массива в цикле JavaScript

let arr = [1, 2, 3, 4, 5, 6];

arr[0] = arr[0] * 2;
arr[1] = arr[1] * 3;
arr[3] = arr[3] * 4;
arr[4] = arr[4] * 5;
arr[5] = arr[5] * 6;

console.log(arr);

/////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i <= 5; i++) {
    arr[i] *= 2;
}
console.log(arr);
/////////////////////////////////

// Задача 1
// Дан массив с числами. Переберите этот массив циклом и возведите каждый элемент этого массива в квадрат.

let arr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
} 

console.log(arr);

// ///////////////////////////////////////////

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] +=;
}

console.log(arr);

/////////////////////////////////////////////////

// Задача 2
// Дан массив с числами. Переберите этот массив циклом и отнимите от каждого элемента единицу.

let arr = [1, 3, 5, 6, 8, 10, -1];

for (let i = 0; i < arr.length; i++) {
    arr[i] -= 1;
}

console.log(arr);

// Задача 3
// Дан массив с числами. Переберите этот массив циклом и прибавьте к каждому элементу 10.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}

console.log(arr);


// 84
// Заполнение массива методом push в JavaScript

// Задача 1
// Объявите пустой массив, а затем заполните его числами от 1 до 10. Используйте для этого метод push.

let arr = [];

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.push(5);
arr.push(6);
arr.push(7);
arr.push(8);
arr.push(9);
arr.push(10);

console.log(arr);


// Задача 2
// Используя цикл и метод push заполните массив числами от 1 до 10.

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

// Задача 3
// Используя цикл и метод push заполните массив 10-ю буквами 'x'.

let arr = [];

for (let i = 0; i <= 9; i++) {
    arr.push('x');
}

console.log(arr);

// Задача 4
// Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.

let arr = [1, 2, -3, 4, -5, 100, -32];
let result = [];

for (let elem of arr) {
    if (elem > 0) {
        result.push(elem);
    }
}

console.log(result);

// Задача 5
// Дан следующий массив:  let arr = ['a', 'b', 'c', 'd', 'e']; Описанным способом сделайте из него массив: let arr = ['e', 'd', 'c', 'b', 'a'];

let arr = ['a', 'b', 'c', 'd', 'e'];
let result = [];

for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
}

console.log(result);

// Задача 6
// Автор следующего кода хотел создать массив вида ['a', 'b', 'c']:
// arr.push('a');
// arr.push('b');
// arr.push('c');
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr = [];

arr.push('a');
arr.push('b');
arr.push('c');

console.log(arr);

// Задача 7
// Автор следующего кода хотел создать заполнить массив числами от 1 до 5:
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }

// console.log(arr);
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr = [];

for (let i = 1; i <= 5; i++) {
	arr.push(i);
}

console.log(arr);


// Задача 8
// Автор следующего кода хотел записать в новый массив только нечетные элементы старого массива:
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		result.push(elem);
// 	}
// }

// console.log(result);
// Написанный код, однако, выдает ошибку в консоль. Исправьте ошибку автора.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let result = [];

for (let elem of arr) {
	if (elem % 2 != 0) {
		result.push(elem);
	}
}

console.log(result);


// 85
// Заполнение объектов через цикл в JavaScript


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

console.log(obj);

let obj = {};

obj['a'] = 1;
obj['b'] = 2;
obj['c'] = 3;
obj['d'] = 4;
obj['e'] = 5;

console.log(obj);
// ///////////////////////////////////////////////////////

// Задача 1
// Объявите пустой объект, а затем заполните его названиями дней недели в качестве ключей, и порядковыми номерами дней недели в качестве значений.

let obj = {};

obj['пн'] = 1;
obj['вт'] = 2;
obj['ср'] = 3;
obj['чт'] = 4;
obj['пт'] = 5;
obj.сб = 6;
obj.вс = 7;
 
console.log(obj);
// ////////////////////////////////////////////////////

let keys = ['a', 'b', 'c', 'd', 'e'];
let values = [1, 2, 3, 4, 5];
let obj = {};

for (let i = 0; i < keys.length; i++) {
    obj[keys[i]] = values[i];
}
console.log(obj);
// Задача 2
// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:  let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; let arr2 = [1, 2, 3, 4, 5, 6, 7];

// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    let arrDay = arr1[i];
    let arrNum = arr2[i];

    obj[arrDay] = arrNum;
}

console.log(obj);


// Задача 3
// Модифицируйте предыдущую задачу так, чтобы ключами стали номера дней, а значениями - их названия.

let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let obj = {};

for (let i = 0; i < arr1.length; i++) {
    let arrDay = arr1[i];
    let arrNum = arr2[i];

    obj[arrNum] = arrDay;
}

console.log(obj);

// ////////////////////////////////////////////////

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let result = {};

for (let key in obj) {
    if (obj[key] % 2 == 0) {
        result[key] = obj[key];
    }
}
console.log(result);

// Задача 4
// Дан объект:let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
// Запишите в новый объект те элементы, значения которых расположены в промежутке от 10 до 20.

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
let result = {};

let objKeys = Object.keys(obj);
let objValues = Object.values(obj);

for (let i = 0; i < objKeys.length; i++) {
    if (objValues[i] >= 10 && objValues[i] <= 20) {
        result[objKeys[i]] = obj[objKeys[i]];
    }
}
console.log(result);

// 2 способ

let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17}; 
let result = {};

for(let key in obj) {
    if (obj[key] >= 10 && obj[key] <= 20) {
        result[key] = obj[key];
    }
}

console.log(result);


// Задача 5
// Дан объект: let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'}; 
// Запишите в новый объект дни недели, номера которых являются нечетными числами.

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {};

let objKeys = Object.keys(obj);
let objValues = Object.values(obj);

for (let i = 0; i < objKeys.length; i++) {
    if (objKeys[i] % 2 != 0) {
        result[objKeys[i]] = obj[objKeys[i]];
    }
}

console.log(result);

//  2 способ

let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
let result = {};

for (let key in obj) {
    if (key % 2 != 0) {
        result[key] = obj[key];
    }
}

console.log(result);

// /////////////////////////////////////////////////////////

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 

for (let key in obj) {
    obj[key] = obj[key] * 2;
}
console.log(obj);

// Задача 6
// Дан объект: let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 

for (let key in obj) {
    obj[key] **= 2;
}
console.log(obj);

// Задача 7
// Самостоятельно, не подсматривая в мой код, выполните переворот какого-нибудь объекта.

//  1 способ

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 
let result = {};

for (let key in obj) {
    result[obj[key]] = key;
}
console.log(result);


// 86
// Практика на циклы с массивами и объектами JavaScript

// Задача 1
// Дан следующий объект с работниками и их зарплатами: Увеличьте зарплату каждого работника на 10%.


let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
}

for (let key in obj) {
    obj[key] *= 1.1;
}
console.log(obj);

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы зарплата увеличивалась только тем работникам, у которых она меньше или равна 400.

let obj = {
	employee1: 100,
	employee2: 200,
	employee3: 300,
	employee4: 400,
	employee5: 500,
	employee6: 600,
	employee7: 700,
};

for (let key in obj) {
    if (obj[key] <= 400) {
        obj[key] *= 1.1;
    }
}
console.log(obj);

// Задача 3
// Даны следующие массивы: С помощью этих массивов создайте новый объект, сделав его ключами элементы первого массива, а значениями - элементы второго.

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

let obj = {};

for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
}

console.log(obj);

// Задача 4
// Дан следующий объект: Найдите сумму ключей этого объекта и поделите ее на сумму значений.

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let objValues = Object.values(obj);
let objKeys = Object.keys(obj);

let sumKeys = 0;
let sumValues = 0;
let result = 0;

for (let i = 0; i < objValues.length; i++) {
    sumValues += Number(objValues[i]);
    sumKeys += Number(objKeys[i]);
};

result =  sumKeys / sumValues;
console.log(result);

//  2 способ

let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};

let sum1 = 0;
let sum2 = 0;
for (let key in obj) {
    sum1 += Number(key);
    sum2 += Number(obj[key]);
}

result = sum1 / sum2;

console.log(result);

// Задача 5
// Дан следующий объект: Запишите ключи этого объекта в один массив, а значения - в другой.

let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}; 

let arrValues = Object.values(obj);
let arrKeys = Object.keys(obj);

console.log(arrValues);
console.log(arrKeys);

// 2 способ


let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr1 = [];
let arr2 = [];

for (let key in obj) {
    arr1.push(key);
    arr2.push(obj[key]);
}
console.log(arr1);
console.log(arr2);

// Задача 6
// Дан следующий объект: Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2. 

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let arr = [];

let values = Object.values(obj);

for (let i = 0; i < values.length; i++) {
    let str = String(values[i]);
    if (str[0] == 1 || str[0] == 2) {
        arr.push(Number(str));
    }
}
// num = Number(arr[0]);

console.log(arr);

//  2 способ

let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};

let arr = [];

for (let key in obj) {
    if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2)  {
        arr.push(Number(obj[key]));
    }
}

console.log(arr);


// Задача 7
// Дан следующий массив:  let arr = ['a', 'b', 'c', 'd', 'e'];
//Создайте из этого массива следующий объект: let arr = {1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'};

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[i + 1] = arr[i];
}

console.log(obj);

// Задача 8
// Дан следующий массив: let arr = ['a', 'b', 'c', 'd', 'e'];
// Создайте из этого массива следующий объект:  let arr = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};

for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = i + 1;
}

console.log(obj);


// 87
// Подсчет количества элементов в массиве JavaScript

let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
let counter = 0;

for (let elem of arr) {
    if ( elem == 'a') {
        counter++;
    }
}

console.log(counter);

// ///////////////////////////////////////////////////////////////////

// Задача 1
// Дан следующий массив: Подсчитайте количество цифр 3 в этом массиве.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter = 0;

for (let elem of arr) {
    if (elem == 3) {
        counter++;
    }
}

console.log(counter);

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в одном цикле одновременно подсчитывалось и количество троек, и количество двоек.

let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
let counter2 = 0;
let counter3 = 0;

for (let elem of arr) {
    if (elem == 2) {
        counter2++;
    }
    if (elem == 3) {
        counter3++;
    }
}

console.log(`В массиве ${counter2} двойки и ${counter3} тройки`);

// //////////////////////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'c', 'f', 'alex', true, true, 'Ivan', 'ivan'];
let count = {a: 0, b: 0, c: 0};

for (let elem  of arr ) {
    if (count[elem] == undefined) {
        count[elem] = 0;
    }
    count[elem]++;
}

console.log(count);

// Задача 3
// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.



for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
}
for (let elem of arr) {
    if (count[elem] == undefined) {
        count[elem] = 0;
    }
    count[elem]++;
}
console.log(count);


// 88 
// Получение соседей элементов в массиве JavaScript

// Давайте выведем элементы этого массива на экран, используя обычный цикл for:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

// А теперь давайте переделаем наш код так, чтобы выводились не текущие элементы, а предыдущие:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i- 1]);
}

//  К примеру, найдем сумму предыдущего и текущего элементов массива и выведем их на экран:

let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i - 1] + arr[i]);
}

// Задача 1
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите следующий элемент массива.

let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
    console.log(arr[i]);
}

// Задача 2
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма текущего и следующего элемента массива.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i] + arr[i + 1]);
}

// Задача 3
// Дан массив с числами. Переберите его циклом и в каждой итерации цикла выведите два предыдущих элемента массива.

let arr = [1, 2, 3, 4, 5];

for (let i = 2; i < arr.length + 2; i++) {
    console.log(arr[i - 2]);
}

// Задача 4
// Модифицируйте предыдущую задачу так, чтобы в каждой итерации цикла выводилась сумма двух предыдущих элементов и текущего элемента массива.

let arr = [1, 2, 3, 4, 5, 45, 65, 89, 34, 80, 346];

for (let i = 0; i < arr.length - 2; i ++) {
    console.log(arr[i + 2] + arr[i + 1] + arr[i]);
}

// 89
// Получение чисел Фибоначчи в JavaScript

let one = 0;
let two = 1;
let current;

for (let i = 1; i <= 10; i++) {

    current = one + two;

    one = two;
    two = current;

    console.log(current);
    
}


// Задача 2
// Решите задачу на нахождение ряда чисел, каждое из которых равно сумме трех предыдущих, а первые три числа равны 0, 1 и 2.

let one = 0;
let two = 1; 
let three = 2;

 
for (let i = 1; i <= 10; i++) {
    current = one + two + three;

    one = two;
    two = three;
    three = current;

    console.log(current);
}

// 90
// Вывод пирамидок на JavaScript

let str = '';

for (let i = 0; i < 10; i++) {
  str += 'x';
  console.log(str);
};

// Задача 1
// Выведите на экран следующую пирамидку: 

let str ='';

for (let i = 1; i <= 5; i++) {
    str += 'xx';
console.log(str);
    
}
// ///////////////////////////////////////////

let str = '';

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 3; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);

// .////////////////////////////////////////

let str = '';
let length = 9;

for (let i = 1; i <= length; i++) {
    for (let j = 0; j < i; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);

// Задача 2
// Выведите на экран следующую пирамидку:

let str = '';

for (let i = 1; i <= 9; i += 2) {
    for (let j = 0; j < i; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);

// ///////////////////////////////
let str = '';
for (let i = 5; i >= 1; i--) {
    // let str = '';

    for (let j = 0; j < i; j++) {
        str += 'x';
    }
    str += '\n';
}

console.log(str);


// Задача 3
// Выведите на экран следующую пирамидку:


let str = '';

for (let i = 10; i > 0; i -= 2) {
    for (let j = 0; j < i; j++) {
        str += 'x';
    }
    str += '\n';
}

console.log(str);

// Задача 4
// Выведите на экран следующую пирамидку:

let str = '';
let length = 9;

for (let i = length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
        str += i;
    }
    str += '\n';
}
console.log(str);

// 91
// Заполнение массивов с накоплением строки в JavaScript

// ////////////////////////////////////////////////////

let arr = [];
let str = '';

for (let i = 0; i < 5; i++) {
    str += 'x';
    arr.push(str);
}
console.log(arr);

// Задача 1
// С помощью цикла сформируйте следующий массив:
//  ['xx', 'xxxx', 'xxxxxx', 'xxxxxxxx', 'xxxxxxxxxx']

let arr = [];
let str = '';

for (let i = 1; i < 5; i++) {
    str += 'xx';
    arr.push(str);
}

console.log(arr);
console.log(arr[0]);

// /////////////////////////////////////////////////////

let arr = [];

for (let i = 1; i < 10; i++) {
    let str = '';	
	for (let j = 0; j < i; j++) {
		str += i;
	}
	arr.push(str);
}
console.log(arr);


// Задача 2
// С помощью цикла сформируйте следующий массив:
// ['11111', '22222', '33333', '44444', '55555']

let arr = [];

for (let i = 1; i <= 5; i++) {
    let str = '';
    for (let j = 0; j < 5; j++) {
        str += i;
    }
    arr.push(str);
}
console.log(arr);

// 92
// Советы по написанию кода циклов в JavaScript

// ////////////////////////////////////

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (let elem of arr) {
    if (elem % 3 == 0) {
        sum += elem;
    }
}

console.log(sum);


// Задача 1
// Дан массив: Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

let arr = [10, 20, 30, 40, 21, 32, 51];
let sum = 0;

for (let elem of arr) {
    if (String(elem)[0] == 1 || String(elem)[0] == 2) {
        sum += elem;
    }
}
console.log(sum);


// 93
// Советы по отладке кода на примере циклов в JavaScript

let arr = ['21', '32', '34', '43', '45', '54', '55']; 
let sum = 0;

for (let elem of arr) {
    // console.log(elem, elem[1] + 1);
    if (+elem[0] === +elem[1] + 1) {
        // console.log('!');
        sum += +elem;
    }
}

console.log(sum);


// Задача 1
// Исправьте ошибки, допущенные в следующем коде:


let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let key in obj) {
    // console.log(String(obj[key])[0]);
	if (String(obj[key])[0] == 1 || String(obj[key])[0] == 2) {
		sum += +obj[key];
	}
}

console.log(sum);



let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
let sum = 0;

for (let elem in obj) {
	if (elem[0] === '1' || elem[0] === '2') {
		sum += +elem;
	}
}

console.log(sum);


// 94
// Поиск ошибок в коде с циклами JavaScript

// Задача 1
// Код должен вывести числа от 0 до 10:

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Задача 2
// Код должен вывести числа от 10 до 0:

for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Задача 3 
// Код должен вывести числа от 10 до 0:

for (let i = 10; i >= 0; i--) {
	console.log(i);
}

// Задача 4
// Код должен вывести числа от 0 до 10:

let i = 0; 

while(i <= 10) {
    console.log(i);
    i++;
}

// Задача 5
// Код должен найти сумму целых чисел от 1 до 10:

let res = 0;

for (let i = 1; i <= 10; i++) {
    res += i;
}

console.log(res);


// Задача 6
// Код должен найти произведение целых чисел от 1 до 10:

let res = 1; 

for (let i = 1; i <= 10; i++) {
    res *= i;
}

console.log(res);

// Задача 7
// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

// Задача 8
// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

// Задача 9
// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
    sum += +elem;
}

console.log(sum);

//Задача 10 
// Код должен найти сумму элементов массива, однако, всегда выводит NaN:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}
console.log(sum);

// Задача 11
// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length ; i++) {
    sum += +arr[i];
}

console.log(sum);

// Задача 12
// Код должен найти сумму элементов массива:

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += +arr[i];
}

console.log(sum);

// Задача 13
// Код должен возвести в квадрат каждый элемент массива:

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] **=  2;
    // console.log(elem); 
}
console.log(arr);

// Задача 14
// Код должен заполнить массив числами от 1 до 5:

let arr = [];

for (let i = 1; i <= 5; i++) {
    arr.push(i);
}
console.log(arr);

// Задача 15
// Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let elem in obj) {
    sum += obj[elem];
}
console.log(sum);

// Задача 16
// Код должен найти сумму элементов объекта:

let obj = {a: 1, b: 2, c: 3};
let sum = 0;

for (let key in obj) {
    sum += obj[key];
    // console.log(obj[key]);
}

console.log(sum);

// Задача 17
// Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = '';

for (let elem of arr) {
    if (elem === 3) {
        res = '+++';
        break;
    } else {
        res = '---';
    }
}

console.log(res);

// Задача 18
// Код должен проверить, есть ли в массиве число 3 или нет:

let arr = [1, 2, 3, 4, 5];
let res = false;

for (let elem of arr) {
    if (elem === 3) {
         res = true;
        break;
    }
}

console.log(res);

// Задача 19
// Код должен вывести только четные элементы из массива

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    if (elem % 2 == 0) {
        console.log(elem);
    }
}

// Задача 1
// Выведите с помощью цикла столбец чисел от 1 до 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// Задача 2
// Выведите с помощью цикла столбец чисел от 100 до 1.

for (let i = 100; i >= 0; i--) {
    console.log(i);
}

// Задача 3
// Выведите с помощью цикла столбец четных чисел от 1 до 100.

for (let i = 1; i <= 100; i += 2) {
    console.log(i);
}

// Задача 4
// Заполните массив 10-ю иксами с помощью цикла.

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push('x');
}

console.log(arr);

// Задача 5
// Заполните массив числами от 1 до 10 с помощью цикла.

let arr = [];

for (let i = 1; i <= 10; i++) {
    arr.push(i);
}

console.log(arr);

// Задача 6
// Дан массив с числами. С помощью цикла выведите только те элементы массива, которые больше нуля и меньше 10-ти.

let arr = [0, 1, -1, 20, 3, 5, 10, -12, 8];

for (let elem of arr) {
    if (elem > 0 && elem < 10) {
        console.log(elem);
    }
}

// Задача 7
// Дан массив с числами. С помощью цикла проверьте, что в нем есть элемент со значением 5.

let arr = [1, 2, 3, 4, 5, 6, 7, 5];
let flag = false;

for (let elem of arr) {
    if (elem == 5) {
        flag = true;
        break;
    }
}

if (flag) {
    console.log('Число есть');
} else {
    console.log('Числа нет');
}

// Задача 8
// Дан массив с числами. С помощью цикла найдите сумму элементов этого массива.

let arr= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

for (let elem of arr) {
    sum += elem;
}
console.log(sum);

// Задача 9
// Дан массив с числами. С помощью цикла найдите сумму квадратов элементов этого массива.

let arr = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += (arr[i])**2;
}

console.log(sum);

// Задача 10
// Дан массив с числами. Найдите среднее арифметическое его элементов (сумма элементов, делить на количество).

let arr = [1, 2, 3, 4, 5];
let result = 0;
let sum = 0;


for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // console.log(sum);    
}

result = sum / arr.length;
// console.log(sum);
console.log(result);

// Задача 11
// Напишите скрипт, который будет находить факториал числа. Факториал (обозначается !) - это произведение (умножение) всех целых чисел, меньше данного, и его самого. Например, 4! = 1*2*3*4.

let num = 12;
let fuck = 1;

for (let i = 1; i <= num; i++) {
    fuck *= i;    
}

console.log(fuck);
