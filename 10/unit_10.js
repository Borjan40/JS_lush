// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

// let ar1 = // переменную обьявляем здесь!!!!

function f1() {
    let out = document.querySelector('.out-1')
    let ar1 = ['popets', 49, true]
    out.innerHTML = ar1     //ваш_элемент.innerHTML = ar1; // да так можно выводить!!!!
    console.log(typeof ar1[0]);
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

let ar2 = ['privet', 57, false]

function f2() {

    // let ar2 = ['privet', 57, false]

    let out = '';
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + '_';
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

let ar3 = [1, 2, 3]

function f3() {
    document.querySelector('.out-3').innerHTML = ar3.length
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

// let ar4 =  // переменную обьявляем эту здесь!!!!
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sortArr = [];
function f4() {
    const indexes = [0, 3, 8];
    sortArr = ar4.filter((item, index) => indexes.includes(index));
    console.log(sortArr)
    document.querySelector('.out-4').innerHTML = sortArr;
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

// let ar5 =
let ar5 = [1, 2, 3, 4, 5, 5]
function f5() {
    sum = ar5[0] + ar5[2] + ar5[ar5.length - 3];
    document.querySelector('.out-5').innerHTML = sum;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

// let ar6 =

function f6() {
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {

    ar7[ar7.length] = 'italy';
    ar7[ar7.length] = 'turkey';
    ar7[ar7.length] = 'vietnam';

    document.querySelector('.out-7').innerHTML = ar7
    console.log(ar7)
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [6, 7, 8];

function f8() {

    ar8[3] = 3.14
    ar8[4] = 14
    ar8[6] = 5

    console.log(ar8)
    document.querySelector('.out-8').innerHTML = ar8;
    console.log(ar8.length)


}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {

    document.querySelector('.out-9').innerHTML = ar9[ar9.length - 1];
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {

    sum = ar10[1] + ar10[ar10.length - 1]
    console.log(sum)
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {

}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];
const firstIndex = 0;
const lastIndex = ar12.length - 1
let sortArr12 = [];
function f12() {
    for (let i = 0; i < ar12.length; i++) {
        if (i == firstIndex) {
            sortArr12[lastIndex] = ar12[i]
        }
        else if (i == lastIndex) {
            sortArr12[firstIndex] = ar12[i]
        }
        else {
            sortArr12[i] = ar12[i]
        }
    }
    document.querySelector('.out-12').innerHTML = sortArr12
}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    out = ''
    for (i = 0; i < ar13.length; i++) {
        out += i + ' ' + ar13[i] + ' ';
        out += '<br>';

    }
    document.querySelector('.out-13').innerHTML = out;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, 'hello', 66];

function f14() {
    out = ''
    for (i = ar14.length - 1; i >= 0; i--) {
        out += ar14[i] + ' ';
    }
    document.querySelector('.out-14').innerHTML = out
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    out = ''
    for (i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            out += ar15[i] + ' ';
        }
    }
    document.querySelector('.out-15').innerHTML = out
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];
let ar16_test = [];


function f16() {



    for (i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even[ar16_even.length] = ar16[i];
            document.querySelector('.out-16-even').innerHTML += ar16[i] + ' ';
        }
        else {
            ar16_odd[i] = ar16[i];
            document.querySelector('.out-16-odd').innerHTML += ar16[i] + ' ';
        }
    }
    console.log(ar16_even)
    console.log(ar16_odd)

    //    т.к. в JS массивы - динамические, то можно решение описанное ниже( с тестовым массивом ) не имеет смысла, т.к. все умещается в одном условии в строке 270.

    for (k = 0; k < ar16_even.length; k++) {
        if (ar16_even[k] != null) {
            ar16_test[ar16_test.length] = ar16_even[k];
        }
    }

    console.log(ar16_test)
}



document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
// let ar17 = [9, 0, 2, 9, 0, 1, 6, 1, 9, 9, 2, 9];

function f17() {
    let a = null
    for (i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            a = a + 1;
        }
    }

    console.log(a)
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 90, 67];

function f18() {
    outIndex = ''
    let min = ar18[0]
    for (i = 0; i < ar18.length; i++) {
        if (ar18[i] < min) {
            min = ar18[i];
            outIndex = i
            // сделал вывод максимального индекса, по типу задачи 19
        }
    }
    console.log(min)
    console.log(outIndex)
    console.log(ar18)
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];

function f19() {

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

// let ar20 = [4, 5, 6, 7, 8, 9, 10];
let ar20 = [4, 5, 6]

function f20() {
    sumInd = 0
    for (i = 0; i < ar20.length; i++) {
        // sumInd = sumInd + 1
        sumInd += i
    }
    console.log(sumInd);
}

document.querySelector('.b-20').onclick = f20;