// Task 1
// Напишите функцию t1, которая возвращает сумму переданных ей аргументов a и b.
let al = 0
function t1(a, b) {
    al = a + b
    showAl(al)
}

function showAl(item) {
    console.log(item)
    console.log('+')
}


document.querySelector('.b-1').addEventListener('click', function () {
    document.querySelector('.out-1').textContent = t1(120, 140);
})



// Task 2.

//Напишите функцию t2, которая принимает 2 аргумента и возвращает больший из них. 

function t2(a, b) {
    return (a > b) ? a : b


}

document.querySelector('.b-2').addEventListener('click', function () {
    document.querySelector('.out-2').textContent = t2(160, 140);
})



// Task 3.
// На странице есть checkbox .ch-3. Напишите функцию, которая возвращает его value если он выбран и false если не выбран. 

function t3() {
    let chBox = document.querySelector('.ch-3');

    // console.log(chBox.value)
    // if (chBox.checked) {
    //     console.log('+')
    // }
    // else {
    //     console.log('-')
    // }

    return (chBox.checked) ? chBox.value : false

}

document.querySelector('.b-3').addEventListener('click', function () {
    document.querySelector('.out-3').textContent = t3();
})

// Task 4
// На странице есть radiobutton .r-4. Напишите функцию, которая возвращет value выбранного radiobutton. 

function t4() {
    let arrRadbttn = document.querySelectorAll('.r-4')
    let result = undefined
    arrRadbttn.forEach(function (item) {
        if (item.checked) {
            result = item.value
        }
    })
    console.log(result)
    return result

    // let result = undefined
    // arrRadbttn.forEach(function (item) {
    //     if (item.checked) {
    //         return item.value
    //     }
    // })


}

document.querySelector('.b-4').addEventListener('click', function () {
    document.querySelector('.out-4').textContent = t4();
})


// Task 5
// Напишите функцию t5, которая получает из s51 число, из s52 знак и из s53 число и возвращает результат математической операции над этими числами с этим знаком. Т.е. возвращает или сумму чисел, или произведение, или разность или деление.

function t5() {

    let first = +document.querySelector('.s51').value
    let second = +document.querySelector('.s53').value
    let mathOper = document.querySelector('.s52').value

    console.log(typeof mathOper)


    switch (mathOper) {
        case '-':
            return (first - second);
            break;
        case '+':
            return (first + second);
            break;
        case '*':
            return (first * second);
            break;
        case '/':
            return (first / second);
            break;
    }



}

document.querySelector('.b-5').addEventListener('click', function () {
    document.querySelector('.out-5').textContent = t5();
})



// Task 6
// Напишите функцию, которая принимает три аргумента: num1, num2 - числа и sign - строку знак операции. sign может быть равен '+', '-', '/', '*'. В зависимости от знака функция должна возвращать результат выбранной операции над числами. Например передали числа 10 и 5 и знак '/'. Функция должна возвратить 2.

function t6(num1, num2, sign) {
    switch (sign) {
        case '-':
            return (num1 - num2);
            break;
        case '+':
            return (num1 + num2);
            break;
        case '*':
            return (num1 * num2);
            break;
        case '/':
            return (num1 / num2);
            break;
    }
}

document.querySelector('.b-6').addEventListener('click', function () {
    document.querySelector('.out-6').textContent = t6(50, 2, '-');
})



// Task 7
// Напишите функцию, которая принимает аргумент и возвращает true если аргумент число и false во всех остальных случаях

function t7(arg) {
    return (typeof arg == 'number')
}

document.querySelector('.b-7').addEventListener('click', function () {
    document.querySelector('.out-7').textContent = t7(100);
})



// Task 8
// Напишите функцию, которая принимает число дробь (например 23.34) и параметр 'floor' или 'ceil' и возвращает число с соответствующим округлением ( либо floor либо ceil).


function t8(num, method) {

    switch (method) {
        case 'floor':
            return Math.floor(num);
            break;

        case 'ceil':
            return Math.ceil(num);
            break;
    }
}

document.querySelector('.b-8').addEventListener('click', function () {
    document.querySelector('.out-8').textContent = 10 + t8(300.89, 'floor');
})




// Task 9
// Напишите функцию, которая принимает число и степень в которую нужно возвести число. Возвращает true если число возведенное в степень четное и false если не четное.

function t9(n, p) {
    return (Math.pow(n, p) % 2 == 0)
}

document.querySelector('.b-9').addEventListener('click', function () {
    document.querySelector('.out-9').textContent = t9(2, 3);
})




// Task 10
// Напишите функцию, t10, которая возвращает количество переданных ей аргументов (число).


function t10() {
    return arguments.length
}

document.querySelector('.b-10').addEventListener('click', function () {
    document.querySelector('.out-10').textContent = t10(33, 22, 44, 11, 55, 66, 11, 66);
})


// Task 11
// Напишите функцию, t11, которая возвращает cумму переданных ей аргументов (число). Используем arguments.

function t11() {
    // return args

    // let sum = Array.from.arguments
    let sum = Array.from(arguments).reduce((prev, item) => prev + item);
    return sum;

}

document.querySelector('.b-11').addEventListener('click', function () {
    document.querySelector('.out-11').textContent = t11(33, 22, 44, 11, 55, 66, 11, 66);
})

// Task 12
// Напишите функцию, t12, которая возвращает cумму переданных ей аргументов (число). Используем rest.

function t12(...arg) {
    return arg.reduce((prev, item) => prev + item)
}

document.querySelector('.b-12').addEventListener('click', function () {
    document.querySelector('.out-12').textContent = t12(33, 22, 44);
})


// Task 13
// Напишите функцию, t13, которая возвращает случайное целое число в заданном диапазоне min, max.

function t13(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;

}

document.querySelector('.b-13').addEventListener('click', function () {
    document.querySelector('.out-13').textContent = t13(100, 120);
})


// Task 14
// Напишите функцию, которая возвращает строку в виде rgb(xxx,yyy,zzz) где xxx, yyy, zzz случайные целые числа в диапазонах от 0 до 255. В строке не должно быть пробелов. Для генерации случайных чисел используйте функцию t13.

function t14() {
    // return 'rgb(234, 145, 189)'

    return `rgb(${t13(0, 255)},${t13(0, 255)},${t13(0, 255)})`

    // return `rgb(${t13(0, 255)},${t13(0, 255)},${t13(0, 255)})`;
}

document.querySelector('.b-14').addEventListener('click', function () {
    document.querySelector('.out-14').style.background = t14();
})


// Task 15
// Напишите функцию, которая получает строку как аргумент и возвращает строку очищенную от пробелов ( с начала и конца) или false если строка содержит только пробелы. 


function t15(str) {
    return (str.trim() !== '') ? str.trim() : false
}

document.querySelector('.b-15').addEventListener('click', function () {
    console.log(t15('                         '));
})

// Task 16
// Напишите функцию, которая получает строку как аргумент и возвращает строку приведенную к нижнему регистру. 

function t16(str) {
    return str.toLowerCase()
}

document.querySelector('.b-16').addEventListener('click', function () {
    document.querySelector('.out-16').textContent = t16('HelLO wORLd');
})

// Task 17
// Напишите функцию, которая получает value выбранного option select.s-171 и возвращает его.

function t17() {
    return document.querySelector('.s-171').value
}

document.querySelector('.s-171').addEventListener('change', function () {
    document.querySelector('.s-172').value = t17();
})

// Task 18
// Напишите функцию, которая получает value из input.i-18 и возвращает его. 

function t18() {
    return document.querySelector('.i-18').value
}

document.querySelector('.i-18').addEventListener('input', function () {
    document.querySelector('.out-18').textContent = t18();
})

// Task 19
// Напишите функцию, которая получает value из input.i-19 и возвращает его. 

function t19() {
    return document.querySelector('.i-19').value
}

document.querySelector('.i-19').addEventListener('input', function () {
    document.querySelector('.out-19').style.borderRadius = t19() + 'px';
})

// Task 20
// Напишите функцию, которая получает строку и возвращает "развернутую" строку. 

function t20(s) {
    let str = s
    return [...str].reduce((prev, next) => next + prev)

    // let dtr = 'pppkkkooo <br>'
    // console.log([...dtr])
}

document.querySelector('.b-20').addEventListener('click', function () {
    document.querySelector('.out-20').textContent = t20('hello');
})


// Task 21
// Напишите функцию, которая в зависимости от параметра even или odd возвращает случайное целое четное (even) или не четное (odd) число от 10 до 20.
// Для генерации случайного числа используйте t13.

function t21(s) {

    let randNum = t13(10, 20)
    switch (s) {
        case 'even':
            if (randNum % 2 == 0) {
                console.log(`${randNum} even`)
                return randNum
            }
            break;

        case 'odd':
            if (randNum % 2 !== 0) {
                console.log(`${randNum} odd`)
                return randNum
            }
            break;
    }


}

document.querySelector('.b-21').addEventListener('click', function () {
    document.querySelector('.out-21').textContent = 10 + t21('odd') + 20;
})


// Task 22
// Напишите функцию callback22, которая принимает параметр item и если он четный то возвращает true. Если все выполнено верно, то на выходе вы получите только массив четных элементов из массива ar22.

const ar22 = [3, 4, 5, 6, 7, 8];

function t22() {
    return ar22.filter(callback22);
}

function callback22(item) {
    return (item % 2 == 0)
}

document.querySelector('.b-22').addEventListener('click', function () {
    document.querySelector('.out-22').textContent = t22();
})

// Task 23
// Напишите функцию callback23, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar23 = [3, 4, 5, 6, 7, 8];

function t23() {
    return ar23.map(callback23);

}

function callback23(item) {
    return Math.pow(item, 2)
}

document.querySelector('.b-23').addEventListener('click', function () {
    document.querySelector('.out-23').textContent = t23();
})


// Task 24
// Напишите функцию callback24, которая принимает параметр item и возвращает его возведенным во вторую степень.

const ar24 = [3, 4, 5, 6, 7, 8];

function t24() {
    let t = [];
    ar24.forEach(item => {
        let newItem = callback24(item);
        console.log(newItem)
        t.push(newItem);
    });
    return t;
}

function callback24(item) {
    return Math.pow(item, 2)
}

document.querySelector('.b-24').addEventListener('click', function () {
    document.querySelector('.out-24').textContent = t24();
})


// Task 25
// Напишите функцию которая принимает массив как аргумент и проверяет что в нем одни числа. Возвращает true если это так и false в противном.


function t25(arr) {

    let isTypeString = (item) => (typeof item !== 'string');
    return arr.every(isTypeString)




    //  let out = undefined
    //     for (let key in arr) {
    //         let bool = (typeof arr[key] !== 'string')
    //         if (bool) {
    //             out = bool;
    //         }
    //         else {
    //             out = bool;
    //             break
    //         }
    //     }
    //     return out

}

document.querySelector('.b-25').addEventListener('click', function () {
    document.querySelector('.out-25').textContent = t25([4, 5, 'gtgt', 6]);
})

// Task 26
// Напишите функцию которая получает из input.i-26 имя пользователя и если это не пустая строка - то выводит его в out-26 в нижнем регистре. Если строка пустая - то выходит из функции.


function t26() {

    let name = document.querySelector('.i-26');
    let a = name.value.toLowerCase();

    return (name.value !== '') ? a : undefined;

    // if (name.value !== '') {
    //     return a;
    // }
    // else {
    //     return
    // }
}

document.querySelector('.b-26').addEventListener('click', function () {
    document.querySelector('.out-26').textContent = t26();
});

// Task 27
// Напишите функцию которая получает из input.i-27 значение как аргумент и проверяет его наличие в объекте obj27. Если находит совпадение - возвращает ключ. Если не находит - false.

const obj27 = {
    h: 'a',
    j: 'b',
    k: 'z',
    m: 'w'
}

function t27(v) {
    let result = undefined
    for (let key in obj27) {
        let bool = (obj27[key] == v)
        if (bool) {
            result = key
            break
        }
        else {
            result = false
        }
    }
    return result
}

document.querySelector('.b-27').addEventListener('click', function () {
    let v = document.querySelector('.i-27').value;
    document.querySelector('.out-27').textContent = t27(v);
})


// Task 28
// Напишите функцию которая принимает два аргумента - строку и подстроку и если подстрока есть в строке - возвращает true, если нет false.

function t28(str, substr) {
    console.log(str)
    console.log(substr)
    return str.includes(substr)
}

document.querySelector('.b-28').addEventListener('click', function () {
    document.querySelector('.out-28').textContent = t28('hello my world', 'of');
})

// Task 29
// Напишите функцию, которая получает в качестве аргументов строки и возвращает большую строку (прямым сравнением).

function t29(str1, str2) {

    return (str1.length > str2.length) ? str1 : str2

}

document.querySelector('.b-29').addEventListener('click', function () {
    document.querySelector('.out-29').textContent = t29('hellorfrtgtgt', 'orBait');
})



// Task 30
// Напишите функцию t30, которая возвращает функцию t31

function t31() {
    return true;
}

function t30() {
    return t31()
}


document.querySelector('.b-30').addEventListener('click', function () {
    document.querySelector('.out-30').textContent = t30();
})


// // let sum = 0;
// function f1(x, y) {

//     // console.log(x + y);
//     return x + y;
// }

// f1(4, 5);
// f1(4, 45);
// // console.log(sum);

// function f2() {
//     console.log(2);
//     return 15;
// }
// f2();
// console.log(5 + f2());
// console.log(f1(6, 7) + f1(4, 5));

// function randInt(min, max) {
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }

// let r = randInt(222, 333);
// console.log(r);
// console.log(randInt(222, 333) + 100);

// // выводить куда угодно
// console.log(f1(100, 200));
// document.querySelector('.out-1').textContent = f1(300, 400);
// document.querySelector('.out-1').style.background = 'rgb(23,156,201)';
// document.querySelector('.out-1').style.background =
//     `rgb(${randInt(0, 255)},${randInt(0, 255)},${randInt(0, 255)})`;
// // alert(f1(3,4))
// // использовать в выражениях
// console.log(100 * f1(3, 4));

// // Вывод данных введенных пользователем
// document.querySelector('.b-3').addEventListener('click', function () {
//     const s = document.querySelector('.i-3').value;
//     document.querySelector('.out-3').innerHTML = 'Hello ' + clearText(s);
//     console.log('Hello ' + clearText(s));
//     console.log('Hello ' + s);
// });

// function clearText(data) {
//     return data.trim().toLowerCase();
// }

// function t4() {
//     console.log(1);
//     return;
//     console.log(2);
//     console.log(3);
// }

// t4();

// // Прерывание фукнции
// // эмулируем indexOf
// function indexOfEmul(arr, num) {
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] === num) return i;
//     }
//     return -1;
// }

// let result = indexOfEmul([22,33,44,55], 33);
// console.log(result);

// // Пользователь вводит количество лет
// document.querySelector('.b-4').addEventListener('click', function () {
//     let year = +document.querySelector('.i-4').value;
//     if (isNaN(year)) return;
//     if (year <=0 || year > 140) return;
//     document.querySelector('.out-4').innerHTML = 2021 - year;
// });

// // ex 5 Сумма
// console.group('example 5');
// const arr5 = [ [3,4,5], [6,7,10]];
// function t5() {
//     let s = 0;
//     for (let i = 0; i < arr5.length; i++) {
//        s += sum(arr5[i]);
//     }
//     return s;
// }

// function sum(arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr5[i]);
//         sum += arr[i];
//     }
//     return sum;
// }

// console.log(t5());
// console.groupEnd();

// // ex 6 Return ;
// console.group('example 6');

// function t6() {
//     let a = 88;
//     // перенос - ошибка
//     // return
//     // a;
//     return a;
// }

// console.log(t6());

// console.groupEnd();

// // ex 7 Return ;
// console.group('example 7');
// const arr7 = [[3, 4, 5], [6, 7, 9], [7, 7, 1], [2, 2]];

// const evenArr7 = arr7.filter( function(item){
//     return (sum(item) % 2 === 0);
// });

// console.log(evenArr7);


// console.groupEnd();

// // ex 8 return функции

// function t8() {
//     return sum;
// }

// let s = t8();
// console.log(s ([10,20,30]));