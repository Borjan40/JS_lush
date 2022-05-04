// Task 1
// Напишите функцию стрелочную функцию t1, которая аналогична закомментированной функции.

// function t1() {
//     const x = 77;
//     const y = 99;
//     console.log(x + y);
// }
const x = 77;
const y = 99;
const t1 = () => console.log(x + y)

document.querySelector('.b-1').addEventListener('click', t1);



// Task 2.
// Напишите стрелочную функцию, которая является аналогом анонимной функции, которая запускается при клике на b-2.

// document.querySelector('.b-2').addEventListener('click', function () {
//     const x = 99;
//     const y = 88;
//     document.querySelector('.out-2').textContent = x + y;
// })

document.querySelector('.b-2').addEventListener('click', () => {
    const x = 99;
    const y = 88;
    document.querySelector('.out-2').textContent = x + y;
});


// Task 3.
// Напишите функцию стрелочную функцию t3, которая аналогична закомментированной функции.

// function t3(a, b) {
//     document.querySelector('.out-3').textContent = a + b;
// }

const t3 = (a, b) => document.querySelector('.out-3').textContent = a + b

document.querySelector('.b-3').addEventListener('click', function () {
    t3(1, 5);
});


// Task 4
// Напишите функцию стрелочную функцию t4, которая аналогична закомментированной функции.

// function t4(s) {
//     document.querySelector('.out-4').textContent = s.trim().length;
// }

const t4 = (s) => document.querySelector('.out-4').textContent = s.trim().length

document.querySelector('.b-4').addEventListener('click', function () {
    t4('   ahalll     ');
})


// Task 5
// Напишите функцию стрелочную функцию t5, которая аналогична закомментированной функции.

// function t5(a, b) {
//     return Math.pow(a, b);
// }

const t5 = (a, b) => Math.pow(a, b)

document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = t5(3, 4);
})


// Task 6
// Напишите функцию стрелочную функцию t6, которая аналогична закомментированной функции.

// function t6(a) {
//     return ((a % 2 === 0) ? true : false);
// }

const t6 = (a) => ((a % 2 === 0) ? true : false)

document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = t6(33);
})


// Task 7
// Напишите функцию стрелочную функцию t7, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t7(arg) {
//     let arr = arg.map(function (item) {
//         return item * 2;
//     })
//     return arr;
// }

const t7 = (arg) => {
    let arr = arg.map(item => item * 2)
    return arr;
}
document.querySelector('.b-7').addEventListener('click', function () {
    document.querySelector('.out-7').textContent = t7([4, 5, 6]);
})



// Task 8
// Напишите функцию стрелочную функцию t8, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t8(arr) {
//     const arr2 = arr.filter(function (item) {
//         return item > 5;
//     });
//     return arr2;
// }

const t8 = (arr) => {
    const arr2 = arr.filter(item => item > 5);
    return arr2;
}


document.querySelector('.b-8').addEventListener('click', function () {
    document.querySelector('.out-8').textContent = t8([3, 4, 5, 6, 7, 8]);
})


// Task 9
// Напишите функцию стрелочную функцию t9, которая аналогична закомментированной функции. Все функции должны быть стрелочные.

// function t9(arr) {
//     return arr.reduce(function (accum, item) {
//         return accum += item;
//     });
// }

const t9 = (arr) => {
    return arr.reduce((accum, item) => accum += item);
}

document.querySelector('.b-9').addEventListener('click', function () {
    document.querySelector('.out-9').textContent = t9([20, 30, 40]);
})


// Task 10
// Запустите функцию f10. Изучите, что она выводит в качестве this. Запустите t10. Изучите что выводит она в качестве this.


function f10() {
    console.log(this);
}

const t10 = () => {
    console.log(this);
}

document.querySelector('.b-10').addEventListener('click', f10);
document.querySelector('.b-10').addEventListener('click', t10);


// Task 11
// Запустите функцию f11. Изучите как выглядит arguments. Запустите функцию t11. Изучите что будет выведено.

function f11() {
    console.log(arguments);
}

const t11 = () => {
    try {
        console.log(arguments);
    }
    catch (err) {
        console.log('argument not defined')
    }
}

document.querySelector('.b-11').addEventListener('click', function () {
    f11(77, 88, 99);
    t11(55, 44, 66);
});


// Task 12
// напишите стрелочную функцию t12, которая возвращает большее из переданных ей двух чисел. Числа передаются в качестве аргумента.

const t12 = (a, b) => a > b ? a : b;

document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = t12(92, 22);
})


// Task 13
// Напишите стрелочную функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

const t13 = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = t13(100, 120);
})


// Task 14
// Напишите стрелочную функцию t14, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы. 

const t14 = item => item.trim() !== '' ? item.trim() : false;

document.querySelector('.b-14').addEventListener('click', function () {
    console.log(t14('         o              '));
})

// Task 15
// Напишите стрелочную функцию, которая проверяет что пользователь ввел в input. Если число - возвращает true, если строку - false. 

const t15 = num => !isNaN(num)

document.querySelector('.b-15').addEventListener('click', function () {
    let num = document.querySelector('.i-15').value;
    document.querySelector('.out-15').textContent = t15(num);
})

// Task 16
// Напишите стрелочную функцию t16, которая проверяет что в массиве находится четное количество элементов. Возвращает true, false.

const t16 = (item) => item.length % 2 == 0;

document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = t16([4, 5, 6, 9]);
})


// Task 17
// Напишите стрелочную функцию t17, которая проверяет что в массиве находятся только числа. Если да - то возвращает true, если нет, false.

const t17 = (arr) => {

    // return !arr.some(element => typeof element != "number")

    return arr.every(element => typeof element === "number")
};



document.querySelector('.b-17').addEventListener('click', function () {
    document.querySelector('.out-17').textContent = t17([4, {}, 56]);
})
// console.log('-----------')
// console.log(isNaN(NaN))
// console.log(isNaN('NaN'))
// console.log(isNaN(133))
// console.log(isNaN('123'))
// console.log(isNaN('fgh'))
// console.log('-----------')
// console.log(Number.isNaN(NaN))
// console.log(Number.isNaN('NaN'))
// console.log(Number.isNaN(133))
// console.log(Number.isNaN('123'))
// console.log(Number.isNaN('1fgh'))

// Task 18
// Напишите стрелочную функцию t18, которая получает два аргумента - массив и число. Возвращает true если число есть в массиве и false если нет.

const t18 = (arr, num) => arr.includes(num)

document.querySelector('.b-18').addEventListener('click', function () {
    document.querySelector('.out-18').textContent = t18([4, 5, 6], 5);
})

// Task 19
// Напишите стрелочную функцию t19, которая принимает строку и аргумент true или false. Если второй аргумент false - то возвращает строку. Если true - возвращает перевернутую строку.

// const t19 = (str, bool) => { (bool) ?}
const t19 = (str, bool) => (bool) ? str.split("").reverse().join("") : false

document.querySelector('.b-19').addEventListener('click', function () {
    document.querySelector('.out-19').textContent = t19('hello', true);
})


// Task 20
// Напишите стрелочную функцию t20, которая принимает объект и число. Если число есть в объекте то возвращает первый встреченный ключ с таким числом. Если нет - false.

const j20 = {
    h: 4,
    j: 7,
    k: 22,
    m: 7
}

const t20 = (obj, val) => {
    let arr = Object.values(obj);
    let temp = arr.indexOf(val);
    return (temp == -1) ? false : temp;
    // return (temp == -1) ? false : val
    // temp.forEach((element, index) => {
    //     if (element == val) {
    //         result = true
    //     }
    //     else {
    //         result = false
    //     }
    // }
    // );
    // return result
}



document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20(j20, 22);
})




// function sum(a, b) {
//     return a + b;
// }

// function multi(a, b) {
//     return a * b;
// }

// document.querySelector('.b-1').addEventListener('click', function () {
//     let res = sum(23, 45);
//     console.log(res);
// });

// document.querySelector('.b-1').addEventListener('click', () => {
//     let res = sum(23, 45);
//     console.log(res);
// });

// // запуск двух функций

// document.querySelector('.b-2').addEventListener('click', function () {
//     let res = sum(23, 45);
//     console.log(res);
//     let res2 = multi(23, 45);
//     console.log(res2);
// });

// document.querySelector('.b-2').addEventListener('click', () => {
//     let res = sum(23, 45);
//     console.log(res);
//     let res2 = multi(23, 45);
//     console.log(res2);
// });

// // callback
// const ar1 = [4, 5, 6, 7, 8];

// function pow2(a) {
//     return a ** 2;
// }

// const res2 = ar1.map(pow2);
// console.log(res2);

// const res3 = ar1.map(function (a) {
//     return a ** 2;
// });
// console.log(res3);

// // стрелочную функцию

// const res4 = ar1.map((a) => {
//     return a ** 2;
// });
// console.log(res4);

// // сокращенный синтаксис
// // одна строка убрать {} return
// // один аргумент то убрать ()

// const res5 = ar1.map(a => a ** 2);
// console.log(res5);

// // filter

// const res6 = ar1.filter(function (item, index) {
//     if (index % 2 === 0) {
//         return true;
//     }
// });
// console.log(res6);

// // пишем на стрелочной функции
// const res7 = ar1.filter((item, index) => (index % 2 === 0));
// console.log(res7);


// // arrow & this
// document.querySelector('.b-3').addEventListener('click', function () {
//     console.log(this);
// });
// document.querySelector('.b-3').addEventListener('click', () => {
//     console.log(this);
// });

// // arrow аргументы

// const f1 = (...arg) => {
//     console.log(arg);
//     console.log('work');
// }

// f1(99, 100);