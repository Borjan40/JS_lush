// task 1
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 6;
let b = 3;
console.log(a * b);

// task 2
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 6;
let d = 3;
document.querySelector('.out-2').innerHTML = c / d;

// task 3
// Создайте две переменные e = 3 и f = 5. Выведите на страницу в .out-3 результат сложения e + f.
let e = 6;
let f = 3;
document.querySelector('.out-3').innerHTML = e + f;

// task 4 слепливание или канкатенация
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;
document.querySelector('.out-4').innerHTML = e1 + f1;

// task 5
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу в .out-5 результат деления e2 на f2.
let e2 = 3;
let f2 = 0;
document.querySelector('.out-5').innerHTML = e2 / f2;

// task 6
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу в .out-6 результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';
document.querySelector('.out-6').innerHTML = e3 + f3;

// task 7
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу в .out-7 результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';
document.querySelector('.out-7').innerHTML = e3 * f3;

// task 8
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
// task 9
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let inputIn8 = document.querySelector('.i-8');
let button8 = document.querySelector('.b-8');
let out89 = document.querySelector('.out-8');

button8.onclick = function () {
    let outPutCons8 = inputIn8.value;
    console.log(outPutCons8);
    out89.innerHTML = outPutCons8
    inputIn8.value = '0';
}

// task 10
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let inputIn10 = document.querySelector('.inputIn-t10');
let button10 = document.querySelector('.button-t10');
let out10 = document.querySelector('.output10');

button10.onclick = function () {
    let outPutCons10 = inputIn10.value;
    out10.innerHTML = outPutCons10 * 10;
}


// task 11
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let inputIn11 = document.querySelector('.inputIn-t11');
let button11 = document.querySelector('.button-t11');
let out11 = document.querySelector('.output11');

button11.onclick = function () {
    let outPutCons11 = +inputIn11.value;
    out11.innerHTML = outPutCons11 + 10;
}

// task 12
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.
let inputIn12_1 = document.querySelector('.inputIn-t12-1');
let inputIn12_2 = document.querySelector('.inputIn-t12-2');
let button12 = document.querySelector('.button-t12');
let out12 = document.querySelector('.out-12');

button12.onclick = function () {
    let outPutCons12_1 = inputIn12_1.value;
    let outPutCons12_2 = inputIn12_2.value;
    out12.innerHTML = 'Hello' + ' ' + outPutCons12_1 + ' ' + outPutCons12_2;
}

// task 13
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13
let inputIn13_1 = document.querySelector('.inputIn-t13-1');
let inputIn13_2 = document.querySelector('.inputIn-t13-2');
let button13 = document.querySelector('.button-t13');
let out13 = document.querySelector('.out-13');

button13.onclick = function () {
    let outPutCons13_1 = +inputIn13_1.value;
    let outPutCons13_2 = +inputIn13_2.value;
    out13.innerHTML = outPutCons13_1 + outPutCons13_2;
}

// task 14
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
let newVal = document.querySelector('.input14');
console.log(newVal);
newVal.value = 'hello';

// task 15 
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
let y = document.querySelector('.input15');
y.style.border = '3px solid red';

// task 16
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16.
let inputIn16_1 = document.querySelector('.inputIn-t16-1');
let inputIn16_2 = document.querySelector('.inputIn-t16-2');
let button16 = document.querySelector('.button-t16');
let output16 = document.querySelector('.out-16');

button16.onclick = function () {
    let val1 = +inputIn16_1.value;
    let val2 = +inputIn16_2.value;
    output16.innerHTML = val1 + val2;
}

// task 17
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in17 = document.querySelector('.inputIn17');
let button17 = document.querySelector('.button-t17');
let output17 = document.querySelector('.out-17');

button17.onclick = function () {
    let t = in17.value;
    console.log(t);
    t = parseInt(t);
    output17.innerHTML = t
}

// task 18
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let in18 = document.querySelector('.inputIn18');
let button18 = document.querySelector('.button-t18');

button18.onclick = function () {
    let t = in18.value;
    t = parseFloat(t);
    console.log(t);
}

// task 19
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!
let input19_1 = document.querySelector('.inputIn19_1');
let input19_2 = document.querySelector('.inputIn19_2');
let button19 = document.querySelector('.button-t19');
let outSumm = document.querySelector('.out-19');

button19.onclick = function () {
    let valInp19_1 = input19_1.value;
    valInp19_1 = parseInt(valInp19_1);
    let valInp19_2 = input19_2.value;
    valInp19_2 = parseInt(valInp19_2);
    outSumm.innerHTML = valInp19_1 + valInp19_2;
}

// task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.
let inpFirstName = document.querySelector('.FirstName_20t');
let inpLastName = document.querySelector('.LastName_20t');
let inpAge = document.querySelector('.Age_20t');
let inpJob = document.querySelector('.Job_20t');
let button20 = document.querySelector('.button-t20');
let outInf = document.querySelector('.out-20');

button20.onclick = function () {
    let spTxt = ' ';
    let valFirstName = inpFirstName.value;
    let valLastName = inpLastName.value;
    let valAge = inpAge.value;
    let jobTitle = inpJob.value;

    outInf.innerHTML = 'Dear ' + valFirstName + spTxt + valLastName + ' your age is ' + valAge + ' years ' + ' ,your profession is a ' + jobTitle + '.';
}