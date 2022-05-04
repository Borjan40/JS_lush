// Task 1
// Напишите функцию t1, которая принимает два аргумента и выводит в .out-1 случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-1. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t1(min, max) {
    let p = document.querySelector('.out-1')

    p.innerHTML = (Math.round(Math.random() * (min - max) + max))


}

document.querySelector('.b-1').addEventListener('click', function () {
    t1(120, 140);
})



// Task 2.

//Напишите функцию t2, которая принимает три аргумента (число от, число до и блок, в который нужно вывести данные) и выводит в указанный блок случайное целое число от первого аргумента(включительно) до второго(включительно). Функция запускается по кнопке .b-2. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t2(min, max, block) {

    block.innerHTML = (Math.round(Math.random() * (min - max) + max))
}

document.querySelector('.b-2').addEventListener('click', function () {
    const out2 = document.querySelector('.out-2');
    t2(120, 140, out2); // функция должна вывести случайное целое от 120 до 140 в блок out-2
})



// Task 3.
//Напишите функцию t3, которая принимает два аргумента (число от, число до ) и выводит в блок .out-3 случайное целое число от первого аргумента(включительно) до второго(включительно). Задайте значение по умолчанию для min число 0 для max число 100. Функция запускается по кнопке .b-3. Обратите внимание на запуск функции. Чтобы передать аргументы, нам пришлось обернуть функцию в анонимную.

function t3(min, max) {
    let p = document.querySelector('.out-3')

    p.innerHTML = (Math.round(Math.random() * (min - max) + max))
}

document.querySelector('.b-3').addEventListener('click', function () {
    t3(0, 100);
})

// Task 4
// Напишите функцию t4, которая делит число a на b и результат выводит в out-4. Если b равно нулю, то в out-4 выводится аргумент c.

function t4(a, b, c) {

    if (b == 0) {
        document.querySelector('.out-4').innerHTML = c

    }
    else {
        out = a / b
        document.querySelector('.out-4').innerHTML = out
    }


}

document.querySelector('.b-4').addEventListener('click', function () {
    t4(8, 2, false);
})


// Task 5
// Напишите функцию t5, которая делит число a на b и результат выводит в out-5. Если b равно нулю, то в out-5 выводится аргумент c, который по умолчанию равен нулю.

function t5(a, b, c) {

}

document.querySelector('.b-5').addEventListener('click', function () {
    t5(7, 12, false);
})



// Task 6
// Давайте напишем функцию t6, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. 

const out6 = document.querySelector('.out-6');

function t6(arr, block) {
    block.innerHTML = '';
    arr.forEach(element => block.innerHTML += element + ' ');
}

document.querySelector('.b-6').addEventListener('click', function () {
    t6([99, 44, 55, 66], out6);
})



// Task 7
// Давайте напишем функцию t7, которая выводит переданный ей массив (как аргумент arr) в блок (переданный как аргумент block) через пробел. Задайте аргумент arr равный по умолчанию пустому массиву. Добавьте внутрь функции проверку на массив аргумента arr. Если arr не массив, то в block выводим false. 

const out7 = document.querySelector('.out-7');

function t7(arr = [4, 4, 4], block) {
    out = '';
    block.innerHTML = '';
    if (Array.isArray(arr)) {
        // arr.forEach(element => out += element + ' ');
        out = arr.join('_');
    }
    else {
        out = false
    }
    console.log(block)
    block.append(out)
}

document.querySelector('.b-7').addEventListener('click', function () {
    t7([99, 44, 55, 66], out7);
})



// Task 8
// Давайте напишем функцию t8, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. 

const out8 = document.querySelector('.out-8');

function t8(block, text) {
    //   let a= text.trim()
    //   console.log(a)
    //    a=a.toLowerCase()
    //    console.log(a)


    block.innerHTML = text.toLowerCase().trim()

}

document.querySelector('.b-8').addEventListener('click', function () {
    t8(out8, ' HelLO wORLd       ');
})




// Task 9
// Давайте напишем функцию t9, которая позволяет выводить текст переданный ей в качестве аргумента text в блок block. При этом переданный текст с помощью trim очищается от пробелов до и после и переводится в нижний регистр. Зададим значение по умолчанию для text - пустую строку, это позволит нам избежать ошибок, если данный аргумент упустили, и добавим в функцию проверку - если block не существует, то функция ничего не выводит.


const out9 = document.querySelector('.out-9');

function t9(text = 'ничего', block) {
    if (block !== undefined) {
        block.innerHTML = text.toLowerCase().trim()
    }
    console.log(block)
}

document.querySelector('.b-9').addEventListener('click', function () {
    t9(undefined, out9);
})




// Task 10
// Напишите функцию, t10, которая выводит в out-10 количество переданных ей аргументов (число).

const out10 = document.querySelector('.out-10');

function t10() {
    out10.innerHTML = arguments.length
}

document.querySelector('.b-10').addEventListener('click', function () {
    t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая выводит в out-11 cумму переданных ей аргументов (число). Используем arguments.

const out11 = document.querySelector('.out-11');

function t11() {
    console.log(arguments)
    let total = Array.from(arguments).reduce(function (a, b) { return a + b });
    console.log(total)

    // sum = null
    // for(i=0    ;i< arguments.length; i++){
    //     sum= sum + arguments[i]
    // }
    // console.log(sum)
}

document.querySelector('.b-11').addEventListener('click', function () {
    t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая выводит в out-12 cумму переданных ей аргументов (число). Используем rest.

const out12 = document.querySelector('.out-12');

function t12(block, ...args) {

    let sum = args.reduce((prev, item) => prev + item)
    console.log(sum)
    block.innerHTML = sum
}

document.querySelector('.b-12').addEventListener('click', function () {
    t12(out12, 33, 22, 11, 66);
})


// Task 13
// Напишите функцию, t13, которая выводит в out-13 массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out13 = document.querySelector('.out-13');

function t13(arr, funcArg) {
    funcArg(arr)
}

// функции для вывода уже заготовлены
function showArrSpace(arr) {
    out13.innerHTML = arr.join(' ');
}

function showArrUnderscore(arr) {
    out13.innerHTML = arr.join('_');
}

document.querySelector('.b-13').addEventListener('click', function () {
    t13([3, 4, 5], showArrUnderscore);
    // попробуйте также вместо showArrSpace поставить showArrUnderscore
})


// Task 14
// Напишите функцию, t14, которая выводит в блок block (переданный как аргумент) массив (переданный как аргумент arr) c помощью функции funcArg (переданной как аргумент).

const out14 = document.querySelector('.out-14');

function t14(arr, funcArg, block) {
    funcArg(arr, block)
}

// функции для вывода уже заготовлены
function showArrSpace2(arr, block) {
    block.innerHTML = arr.join(' '); // вывод в блок пишите как в предыдущем примере
}

function showArrUnderscore2(arr, block) {
    block.innerHTML = arr.join(''); // вывод в блок пишите как в предыдущем примере
}

document.querySelector('.b-14').addEventListener('click', function () {
    t14([3, 4, 5], showArrUnderscore2, out14);
    // попробуйте также вместо showArrSpace2 поставить showArrUnderscore2
})


// Task 15
// Напишите функцию, t15, которая в зависимости от четности аргумента num запускает функцию even, или odd.

const out15 = document.querySelector('.out-15');

function t15(num, even, odd) {
    if (num % 2 == 0) {
        even(num)
    }
    else {
        odd(num)
    }
}

function showOne() {
    out15.innerHTML = 'even';
}

function showTwo() {
    out15.innerHTML = 'odd';
}


document.querySelector('.b-15').addEventListener('click', function () {
    t15(5, showOne, showTwo);
})

// {
//     function f1(a, b, c) {

//     }

//     // sum3(1000, 2000);

//     function sum() {
//         const x = 5;
//         const y = 6;
//         console.log(x + y);
//     }

//     sum();

//     let x = 55;
//     let y = 66;
//     function sum2() {
//         console.log(x + y);
//     }

//     sum2();

//     x = 100;
//     y = 200;
//     sum2();

//     // аргументы
//     // формальные аргументы
//     function sum3(x1 = 100, y1 = 100) {
//         console.log(x1 + y1);
//     }

//     sum3(44, 11);
//     sum3(100, 200);
//     let z = 77;
//     sum3(z, 10);
//     sum3(z, z * 2);
//     sum3(2, 3, 4, 5, 6);
//     sum3(6);
//     sum3();

//     function showSum(elem, x, y) {
//         document.querySelector(elem).textContent = x + y;
//     }

//     function showSum2(elem, x, y) {
//         elem.textContent = x + y;
//     }

//     showSum('.out-2', 5, 6);
//     const out1 = document.querySelector('.out-1');
//     showSum2(out1, 70, 6);



//     function showSum3(x, y, elem = '.out-1') {
//         console.log(arguments);
//         document.querySelector(elem).textContent = x + y;
//     }

//     showSum3(10, 15, '.out-2');

//     function showSumAll() {
//         console.log(arguments);
//         // let sum = 0;
//         // for (let i = 0; i < arguments.length; i++) {
//         //     sum += arguments[i];
//         // }
//         let sum = Array.from(arguments).reduce((accum, item) => accum += item);
//         console.log(sum);
//     }

//     showSumAll(4, 5, 6, 20);

//     function showSumAll2(...args) {
//         console.log(args);
//         let sum = args.reduce((accum, item) => accum += item);
//         console.log(sum);
//     }

//     showSumAll2(4, 5, 6, 20, 11);

//     // функция как аргумент

//     function showAll(res) {
//         // console.log(res)
//         document.querySelector('.out-1').innerHTML = `<b>${res}</b>`;
//     }

//     function showSumAll3(drawFunction, ...num) {
//         // console.log(drawFunction)
//         drawFunction(num);
//     }

//     showSumAll3(showAll, 88, 55, 45, 100);
// }


// паттерн модуль
const userInfo = (function () {
    // имя пользователя по умолчанию
    let name = 'Аноним';

    // возвращаем объект, состоящий из 2 функций
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        },
    };
})();