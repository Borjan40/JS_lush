// task1
// Выведите в консоль ваше имя.
console.log('андрей');

// task2
// Выведите в консоль номер месяца в котором вы родились. Изучите чем отличается вывод числа и строки.
console.log(28, 03, 1993);

// task3
// Выведите в консоль строку:
// 'Добро '+'пожаловать '+' на курс'
console.log('Добро' + ' ' + 'пожаловать' + ' ' + 'на курс');

// task4
// С помощью alert выведите число 2019. После срабатывания кода - закомментируйте его, чтобы не мешал для дальнейшей разработки.
// alert(2019);

// task5
// С помощью alert выведите результат операции:
// 2019 - 200
// alert(2019-200);

// task6
// Создайте на странице div с id=one. С помощью document.getElementById запишите в данный элемент текст 'Hello World'.
document.getElementById('one').innerHTML = 'Hello World';

// task7
// Создайте на странице div с id=two. С помощью document.getElementById запишите в данный элемент результат умножения 12 на 12. Умножение можно сделать с помощью знака звездочки ( цифра 8).
document.getElementById('two').innerHTML = 12 * 12;

// task8
// Создайте div с классом one. С помощью document.querySelector запишите в данный элемент текст 'Hello World'.
document.querySelector('.one').innerHTML = 'Hello World';

// task9
// Создайте следующую верстку на странице:
// <h2>Hello <span>everyone</span></h2>
// Hello everyone
// Замените с помощью querySelector текст everyone на world.
document.querySelector('h2 span').innerHTML = 'world';

// task 10
// Создайте пустой div c классом three. С помощью querySelector запишите внутрь div заголовок h3 с произвольным текстом.
document.querySelector('.three').innerHTML = '<h3>заголовок с произвольным текстом</h3>';

// task 10
document.querySelector('.three h3').innerHTML += ' бацбац';

// task 11
// Создайте пустой div c классом four. С помощью querySelector запишите внутрь div заголовок h4 с произвольным текстом и параграф p с произвольным текстом. Подсказка, чтобы дописывать внутрь элемента используейте не innerHTML = , а innerHTML += (плюс равно без пробела).
document.querySelector('.four').innerHTML = '<h4>заголовок произвольный</h4>';
document.querySelector('.four').innerHTML += '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet illo quae excepturi reprehenderit repellat iure nihil laborum ipsum odio cum? Id vero magnam dolores exercitationem laudantium iure itaque odio voluptas!</p>';

// task 12
// Создайте div с классом five. Получите его в переменную a. С помощью innerHTML запишите внутрь переменной a число 3.1415. Изучите как в JS пишутся дроби - через точку или через запятую!
let a = document.querySelector('.five');
a.innerHTML = 3.1415;

// task 13
// Создайте div с классом seven. Получите его в переменную div7. С помощью innerHTML запишите в него строку:
// <img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt="">
// Обратите внимание. Вам придется вставить строку, которая уже содержит кавычки. Главное чтобы кавычки чередовались. Поэтому при вставке оберните данную строку одинарными кавычками.
let div7 = document.querySelector('.seven');
div7.innerHTML = '<img src="https://cdn4.iconfinder.com/data/icons/food-and-drink-flat-gradient/32/cone_ice_cream_food_drink_sweet-512.png" alt=""></img>';

// task 14
// Создайте две переменных z1 = 6, z2 = 3. Создайте div, класс присвойте самостоятельно и выведите в него умножение z1 на z2.
let z1 = 6;
let z2 = 3;
document.querySelector('.multipl').innerHTML = z1 * z2;

// task 15
// Создайте две переменных y1 = 6, y2 = 3. Создайте div, класс присвойте самостоятельно, выведите в него деление y1 на y2.
let y1 = 6;
let y2 = 3;
document.querySelector('.division').innerHTML = y1 / y2;
console.log();

// // task 16 канкатенация
// Создайте две переменные x1='Hello', x2 = 5. Создайте div, класс присвойте самостоятельно, выведите в него сумму x1 + x2. Изучите результат операции.
let x1 = 'Hello';
let x2 = 5;
document.querySelector('.multHello').innerHTML = x1 + x2;

// task 17
// Создайте div с классом test-1. Получите его в переменную d1. Выведите эту переменную в консоль. Изучите вывод.
let d1 = document.querySelector('.test-1');
console.log(d1);

// task 18.
// Создайте div.test-2. Получите его в переменную d2. Выведите эту переменную в консоль. Присвойте d2 значение 5 (d2 = 5). Выведите переменную в консоль. Изучите вывод.
// Создал div с классом 'test-2', с помощью метода document.querySelector получил div в переменную d2. Вывел переменную d2 в консоль (результатом вывода явился div). Присвоил d2 значение 5, вывел в консоль (результатом явилось переприсвоенное значение d2=5)
let d2 = document.querySelector('.test-2');
d2 = 5;
console.log(d2);

// task 19
// Создайте div c классом s3 и div с классом s4. Получите div.s3 в переменную divS3. Выведите в консоль divS3. Теперь получите в эту же переменную divS3 блок div c классом s4. Выведите переменную divS3 в консоль. Изучите что изменилось.
let divS3 = document.querySelector('.s3');
console.log(divS3);
divS3 = document.querySelector('.s4');
console.log(divS3);

// task 20 результатом явилось схлопывание всего хтмл (отобразился только ' ')

// document.querySelector('body').innerHTML = ' ';

// вопрос по таске 12: Когда ставлю запятую, то записывается значение до запятой. Куда девается то, что после? Вопрос: куда девается изображение, когда я меняю значение переменной в соседней таске? почему так отрабатывает? ответ: браузер считывает код до 18 строки, дальше нет