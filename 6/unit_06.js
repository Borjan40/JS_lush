//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочки рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>



function t1() {
    let out1 = ''
    for (let i = 0; i < 3; i++) {
        for (let k = 0; k < 3; k++) {
            out1 += '*';
        }
        out1 += '_';
    }
    document.querySelector('.out-1').innerHTML = out1;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифры и перенос строки br, , второй звездочки, знак подчеркивания и знак переноса.</p>
function t2() {
    let out = ''
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            if (i == 0) continue;
            out += '*_';
        }
        if (i == 3) continue;
        out += `<br>${i + 1}<br>`;
    }
    document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_
// </pre>
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит перенос строки br,  внутренний -  звездочки, знак подчеркивания.</p>
function t3() {
    let out = ''
    for (let i = 0; i < 4; i++) {
        for (let k = 0; k < 3; k++) {
            out += '*_';
        }

        out += `<br>`;
    }
    document.querySelector('.out-3').innerHTML = out;
}

document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1_1 2 3 4 5 2_1 2 3 4 5 3_1 2 3 4 5
// </pre>
function t4() {
    let out = ''
    for (let i = 1; i < 5; i++) {
        for (let k = 1; k <= 5; k++) {
            if (i == 1) continue;
            out += `${k} `;
        }
        if (i == 4) continue;
        out += `${i}_`;
    }
    document.querySelector('.out-4').innerHTML = out;
}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 101010
// 101010
// 101010
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1.</p>
function t5() {
    let out = ''
    for (let i = 0; i <= 2; i++) {
        for (let k = 0; k <= 5; k++) {
            if ((k % 2) == 0) {
                // if (k == 0) continue; это если внутренний выводит if 0, else 1
                out += '1';
            } else {
                out += '0';
            }
        }
        out += '<br>';
    }
    document.querySelector('.out-5').innerHTML = out;
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 10x01x
// 10x01x
// 10x01x
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл от 0 до 6 выводит либо 0 либо 1 либо х.</p>
function t6() {

    let out = ''

    // for (let i = 0; i <= 2; i++) {
    //     for (let k = 0; k <= 6; k++) {
    //         if ((k % 3) == 0) {
    //             if (k == 0) continue;
    //             out += 'x';
    //         }
    //         else {
    //             if ((k % 2) == 0) {
    //                 out += '0';
    //             }
    //             else {
    //                 out += '1';
    //             }
    //         }
    //     }
    //     out += '<br>';
    // }

    for (let i = 0; i <= 2; i++) {
        for (let k = 0; k <= 5; k++) {
            if (k == 2 || k == 5) {
                out += 'x';
            }
            else if ((k % 2) == 0) {
                out += '1';
            }
            else {
                out += '0';
            }
        }
        out += '<br>';
    }
    document.querySelector('.out-6').innerHTML = out;

}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *
// **
// ***
// ****
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл запускается от нуля до i и рисует звездочку.</p>
function t7() {

    let out = ''
    for (let k = 0; k < 4; k++) {
        for (let i = 0; i <= k; i++) {
            out += '*';
        }
        out += '<br>';
    }
    document.querySelector('.out-7').innerHTML = out;
}


document.querySelector('.b-7').onclick = t7;


//  Task 8
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// *****
// ****
// ***
// **
// *
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует звездочки. </p>
function t8() {

    let out = document.querySelector('.out-8')
    let a = ''
    for (let i = 0; i < 5; i++) {
        for (let k = 5; k > i; k--) {
            a += '*';
        }
        a += '<br>';
    }
    out.innerHTML = a
}
document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// </pre>
// <p>Внешний цикл выводит перенос строки br. Вложенный цикл рисует цифры</p>
function t9() {
    let out = document.querySelector('.out-9');
    let a = '';
    for (let k = 0; k < 6; k++) {
        for (let i = 1; i <= k; i++) {
            a += `${i + 1}` + ' '
        }
        a += '<br>';
    }
    out.innerHTML = a
}

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50
// </pre>
// <p>Внешний цикл выводит перенос строки br и запускается от 0 до 6.</p>
// <p>Вложенный цикл рисует цифры от 0 до 9. Обратите внимание, что первый ряд - есть ведущий нуль. Здесь все просто - проверили, если число меньше 10 - то конкатенируем нуль.</p>
function t10() {
    // let out = document.querySelector('.out-10');
    // let a = '';
    // for (let k = 0; k < 6; k++) {
    //     for (let i = 0; i <= 9; i++) {
    //         if (i == 0) continue;
    //         if (k == 5) continue;
    //         a += `${k}` + i + ' ';
    //     }
    //     if (k == 5) continue;
    //     a += `${k + 1}` + '0' + '<br>';
    // }
    // out.innerHTML = a;

    // let out = document.querySelector('.out-10');
    // let a = '';
    // for (let k = 0; k < 6; k++) {
    //     for (let i = 0; i <= 10; i++) {
    //         if (i < 10) {
    //             if (i == 0) continue;
    //             if (k == 5) continue;
    //             a += `${k}` + i + ' ';
    //         }
    //         else {
    //             if (k == 5) continue;
    //             a += `${k + 1}` + '0'
    //         }
    //     }
    //     a += '<br>';
    // }
    // out.innerHTML = a;



}

document.querySelector('.b-10').onclick = t10;

function t11() {
    out = '';
    for (let i = 0; i < 3; i++) {
        for (k = 0; k < 3 - i; k++) {
            out += '&nbsp;';
        }
        for (let k = 0; k < 5; k++) {
            out += `* `;
        }
        out += '<br>';
    }
    document.querySelector('.out-11').innerHTML = out;
}

document.querySelector('.b-11').onclick = t11;

function t12() {

    out = '';
    for (let i = 0; i <= 4; i++) {
        if (i >= 0 && i < 3) {
            for (let k = 0; k <= i; k++) {
                out += '*';
            }
            for (let k = 0; k < 3 - i; k++) {
                out += '&nbsp;';
            }
        } else {
            for (let k = 5; k > i; k--) {
                out += '*';
            }
            for (let k = 0; k < i - 1; k++) {
                out += '&nbsp;';
            }
        }
        out += '<br>';
    }
    document.querySelector('.out-12').innerHTML = out;

}

document.querySelector('.b-12').onclick = t12;


let inputContainer = document.getElementsByTagName('input');


function t14() {
    for (let z = 1; z < inputContainer.length; z++) {
        let a = parseInt(inputContainer[0].value);
        let b = parseInt(inputContainer[1].value);
        out = '';
        for (let i = 0; i <= a - 1; i++) {
            if (i == 0 || i == a - 1) {
                for (let k = 0; k <= b * 2; k++) {
                    if ((k % 2) == 0) {
                        if (k == 0) continue;
                        out += '&nbsp;';
                    }
                    else {
                        out += '*';
                    }
                }
            }
            else {
                for (let k = 0; k <= b * 2; k++) {
                    if (k == 0 || k == b * 2) {
                        out += '*';
                    }
                    else {
                        // if (k == 1) continue;
                        out += '&nbsp;';
                    }
                }
            }

            out += '<br>';
        }
    }

    document.querySelector('.out-14').innerHTML = out;
}

document.querySelector('.b-14').onclick = t14;

function t15() {
    let out = document.querySelector('.out-15');

    for (let i = 0; i < 5; i++) {

        let count = i + 1;

        for (let k = 5; k > 0; k--) {
            if (k > count) {
                out.innerHTML += `X `;
            } else {
                out.innerHTML += `${k} `;
            }
        }

        out.innerHTML += '<br>';
    }
}

document.querySelector('.b-15').onclick = t15;



function t16() {

    let out = document.querySelector('.out-16');

    for (let i = 5; i >= 1; i--) {
        let t = ''
        for (let k = 5; k >= i; k--) {
            t += i;
        }
        out.innerHTML += t + '<br>';
    }
}
document.querySelector('.b-16').onclick = t16;

function t17() {
    let out = document.querySelector('.out-17');

    for (let i = 5; i >= 1; i--) {
        let t = ''
        for (let k = 5; k >= i; k--) {
            if ((i % 2) == 0) {
                t += 'X';
            }
            else {
                t += i;
            }
        }
        out.innerHTML += t + '<br>';
    }
}
document.querySelector('.b-17').onclick = t17;

function t18() {
    // out = '';
    // for (let i = 0; i < 3; i++) {
    //     if (i == 0) {
    //         out += '_';
    //     }
    //     for (k = 0; k < 3 - i; k++) {
    //         out += '_';
    //     }
    //     for (let k = 0; k < 6 + i; k++) {
    //         out += `*_`;
    //     }
    //     if (i == 1 || i == 2) {
    //         out += `*_`;
    //     }
    //     out += '<br>';
    // }
    // document.querySelector('.out-18').innerHTML = out;

    let out = document.querySelector('.out-18');
    let row = 10;
    let spaceLeft = 3;
    let spaceRight = row - 2;
    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= row; k++) {
            if (k < spaceLeft) {
                out.innerHTML += '_';
            } else if (k > spaceRight) {
                out.innerHTML += '1';
            } else {
                out.innerHTML += `*&nbsp;`;
            }
        }
        spaceLeft--;
        spaceRight++;
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-18').onclick = t18;

function t19() {
    let out = document.querySelector('.out-19');

    let row = 6;
    let spaceLeft = 3;
    let spaceRight = row - 2;

    for (let i = 1; i <= 3; i++) {
        for (let k = 1; k <= row; k++) {
            if (k < spaceLeft) {
                out.innerHTML += `1`;
            } else if (k > spaceRight) {
                out.innerHTML += `2`;
            } else {
                out.innerHTML += `* `;
            }
        }
        spaceLeft--;
        spaceRight++;
        out.innerHTML += '<br>';
    }

    let spaceLeft2 = 2;
    let spaceRight2 = row - 1;

    for (let i = 1; i <= 2; i++) {
        for (let k = 1; k <= row; k++) {
            if (k < spaceLeft2) {
                out.innerHTML += `3`;
            } else if (k > spaceRight2) {
                out.innerHTML += `4`;
            } else {
                out.innerHTML += `* `;
            }
        }
        spaceLeft2++;
        spaceRight2--;
        out.innerHTML += '<br>';
    }
}
document.querySelector('.b-19').onclick = t19;