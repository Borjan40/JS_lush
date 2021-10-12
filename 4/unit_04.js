// Task 1
// Создайте button.b-1 - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f1() {
    alert('task1');

}

document.querySelector('.b-1').onclick = f1;


// Task 2
// Создайте input.b-2 type=button - при нажатии на него выводите alert с номером задачи. Номер задачи просто пропишите вручную.

function f2() {
    alert('task2');
}

document.querySelector('.b-2').onclick = f2;


// Task 3
// Создайте p.p-3 - при нажатии на него выводите alert с номером задачи.

function f3() {
    alert('task3');
}

document.querySelector('.p-3').onclick = f3;


// Task 4. Создайте input(checkbox).i-4 и button.b-4 - при нажатии на кнопку выводите true если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-4

let output4 = document.querySelector('.out-4');

function f4() {

    let myCheckBox = document.querySelector('.i-4');
    if (myCheckBox.checked) {
        output4.innerHTML = myCheckBox.checked
    }
    else {
        output4.innerHTML = myCheckBox.checked
    }
}

document.querySelector('.b-4').onclick = f4;

// Task 5.
//Создайте input(checkbox).i-5 и button.b-5. Для checkbox добавьте value="task-5" - при нажатии на кнопку b-5 выводите value checkbox если checkbox выбран и false если не выбран. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. В данном случае div.out-5

let output5 = document.querySelector('.out-5');


function f5() {

    let myCheckBox = document.querySelector('.i-5');
    myCheckBox.value = 'task-5'
    if (myCheckBox.checked) {
        output5.innerHTML = myCheckBox.value;
    }
    else {
        output5.innerHTML = 'false';
    }

}

document.querySelector('.b-5').onclick = f5;


// Task 6. 
//Создайте input(hidden).i-6 и button.b-6 - при нажатии на кнопку выводите value из input в div.out-6

let output6 = document.querySelector('.out-6');
function f6() {
    let myCheckBox = document.querySelector('.i-6');
    output6.innerHTML = myCheckBox.value;
}

document.querySelector('.b-6').onclick = f6;

// Task 7.
// Создайте input(password).i-7 и button.b-7 - при нажатии на кнопку выводите в div.out-71 value прописанное в input. В .out-72 выводите 1 если длина пароля больше или равна 6 или 0 если меньше. Для подсчета количества символов в строке используйте length.

let output71 = document.querySelector('.out-71');
let output72 = document.querySelector('.out-72');

function f7() {

    let myInput = document.querySelector('.i-7').value;
    console.log(myInput.length);

    if (myInput.length >= 6) {

        output72.innerHTML = '1'

    } else {

        output72.innerHTML = '0'

    }

}

document.querySelector('.b-7').onclick = f7;


// Task 8.
// Создайте div.out-8 и кнопку .b-8. При нажатии кнопки создавайте внутри div.out-8 элемент input.i-81 и кнопку .b-81 (innerHTML). Добавьте на созданную кнопку событие клик и запуск функции f81. Функция должна в .out-81 выводить value созданного input.i-81.

let out_8 = document.querySelector('.out-8');
let out_81 = document.querySelector('.out-81');
// let butt_81 = document.querySelector('.b-81');

function f8() {
    // кнопку создаем через ....innerHTML = '<button....</button>
    // т.е. как строку и в ставляем на страницу
    //  потом получаем кнопку со страницы и вешаем событие
    //    вашасозданнаякнопка.onclick = f81;
    //
    out_8.innerHTML = '<input type="text" class="i-81" value="тыртыр"> <button class="button-primary b-81">жми</button>'
    let butt_81 = document.querySelector('.b-81');
    let inp_81 = document.querySelector('.i-81');
    // console.log(butt_81);
    // console.log(inp_81);
    // out_81.innerHTML = inp_81.value;
    function f81() {

        out_81.innerHTML = inp_81.value;

    }
    document.querySelector('.b-81').onclick = f81;
}




// console.log(butt_81);
// console.log(inp_81);
document.querySelector('.b-8').onclick = f8;




// document.querySelector('.b-81').onclick = console.log()

// Task 9
//Создайте один input(radio).r-9  и button.b-9 - при нажатии на button если radio.r-9 выбран (активен, checked) выводите в .out-9 - value прописанное в r-9, либо 0 если не активен. 

let outConditionOfCheckbox = document.querySelector('.out-9');
myCheckBox9 = document.querySelector('.r-9');
// console.log(myCheckBox9);
function f9() {

    if (myCheckBox9.checked) {
        outConditionOfCheckbox.innerHTML = myCheckBox9.value
    } else {
        outConditionOfCheckbox.innerHTML = '0'
    }
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// >Создайте input(color).i-10 и button.b-10 - при нажатии на кнопку окрашивайте div.out-10 выбранным цветом (имеется ввиду .style.background = ).

let colorOut9 = document.querySelector('.out-10')

// console.log(colorOut9);
function f10() {
    let colorOfinput = document.querySelector('.i-10').value // важно объявлять внутри функции, иначе цвет будет дефолтный черный
    colorOut9.style.backgroundColor = colorOfinput;
}

document.querySelector('.b-10').onclick = f10;


// Task     11
//   Создайте input(color).i-111 и input(color).i-112- два элемента и button.b-11 - при нажатии на кнопку присвойте цвет из первого input в value второго.




function f11() {
    // важно объявлять внутри функции, иначе цвет будет дефолтный черный
    let color111 = document.querySelector('.i-111') // здесь без value
    let color112 = document.querySelector('.i-112') // здесь без value
    // console.log(color111);
    // console.log(color112);
    color112.value = color111.value

}

document.querySelector('.b-11').onclick = f11;

// Task 12
//   Создайте input(date).i-12 и button.b-12 - при нажатии на кнопку выводите на в  out-12 выбранную в input дату.

function f12() {

    document.querySelector('.out-12').innerHTML = document.querySelector('.i-12').value

}

document.querySelector('.b-12').onclick = f12;

// Task 13
//  Создайте input(range).i-13. При изменении положения ползунка i-13 выводите значение в out-13. Для события используйте oninput.

function f13() {

    document.querySelector('.out-13').innerHTML = document.querySelector('.i-13').value

}

document.querySelector('.i-13').oninput = f13;

// Task 14
// Создайте text-area.t-14 и button.b-14 - при нажатии на кнопку выводите на в out-14 текст введенный в t-14.



function f14() {

    document.querySelector('.out-14').innerHTML = document.querySelector('.t-14').value
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Создайте text-area.t-15, input.i-15 и button.b-15 - при нажатии на кнопку выводите текст из input.i-15 в textarea.t-15 и на страницу в out-15.

function f15() {

    let valInput = document.querySelector('.i-15').value
    document.querySelector('.out-15').innerHTML = valInput
    document.querySelector('.t-15').innerHTML = valInput
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Создайте select.s-16 и button.b-16 - при нажатии на кнопку выводите в out-16 value выбранного option из s-16.
// для получения выбранного option просто получите select в переменную и select.value;


function f16() {

    // document.querySelector('.s-16').value = document.querySelector('.out-16').innerHTML

    document.querySelector('.out-16').innerHTML = document.querySelector('.s-16').value
}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Создайте select.s-17. Добавьте ему событие onchange, при наступлении которого запускается функция f17. Функция должна выводить в out-17 value выбранного в select option.

function f17() {

    document.querySelector('.out-17').innerHTML = document.querySelector('.s-17').value

}

document.querySelector('.s-17').onchange = f17;

// Task 18
// Создайте select.s-18 и input.i-18. Добавьте на select событие onchange, при наступлении которого запускается функция f18. Функция должна выводить в input i-18 value выбранного в select option.
// -------------------------------
// если кусок, который ниже записать перед функцией, будет в инпут-18 всегда выводить только one 
// let valSelect18 = document.querySelector('.s-18').value
// let input18 = document.querySelector('.i-18')




function f18() {

    let valSelect18 = document.querySelector('.s-18').value
    let input18 = document.querySelector('.i-18')
    // console.log(input18);
    console.log(valSelect18);

    input18.value = valSelect18
    // console.log(input18.value);
    // console.log( typeof(valSelect18.value) );
    // console.log(typeof (input18.value));

}

document.querySelector('.s-18').onchange = f18;

// Task 19
// Создайте форму. В ней input(text).i-191 и input(password).i-192 - и кнопку button.b-19. По нажатию кнопки выводите значение text и password в out-19 через пробел. Обратите внимание на хитрость. Мы, кнопку сейчас повесили за пределами формы. Чуть позже мы рассмотрим почему это делали.

//Мы, кнопку сейчас повесили за пределами формы. Как раз по этому форма не перезагружается при нажатии на кнопку.

let form191 = document.querySelector('.f-19')
let input191 = form191.elements[0];
let input192 = form191.elements[1];

function f19() {

    document.querySelector('.out-19').innerHTML = input191.value + ' ' + input192.value

}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Создайте форму .f-20. В ней input(text) и input(password) - и кнопку button.b-20. По нажатию кнопки выводите значение из input text и password в out-20 через пробел. Используйте form.elements (читать)

// очень внимательно изучите верстку!!! 
// обратите внимание, что мы не используем class, а присвоили name!!!



function f20(e) {
    e.preventDefault(); // чтобы форма не перезагружала страницу!!!!
    let form = document.querySelector('.f-20');
    console.log(form.elements);
    let userNameVal = form.elements['username'].value; // так можно обратиться к элементу внутри формы
    let passVal = form.elements['password'].value;

    document.querySelector('.out-20').innerHTML = userNameVal + ' ' + passVal;
}

document.querySelector('.b-20').onclick = f20;