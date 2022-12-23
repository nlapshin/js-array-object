
const obj = {} // это пустой объект без свойств 

// Создание объекта
const car = {
  name: 'Audi', // name - это ключ(или свойства), 'Audi' - это значение
  model: 'A3' // model - это ключ(или свойства), 'A3' - это значение
}
// Хранилище key-value

// Чтение через точку
console.log('Car name:', car.name)

// Чтение через квадрантые скобки
console.log('Car name:', car['model']) 

// car['test-test'] = 'test' // будет работать
// car.test-test // а это не будет работать

// car.test - test // 

// Создание записи через точку
car.color = 'red'

// Создание через квадрантые скобки
car['year'] = 2022

// console.log(car)

// Создайте объект с ключами name, surname, age. Имя объект любое.

/*
Создайте функцию, которая создает строку по шаблону “Имя: <ваше_имя>. Фамилия: <ваша_фамилия>. Возраст: <ваш_возраст>”.

Функция принимает один аргумента на вход - это объект user
с ключами name, surname, age. Имя функции придумайте сами.

Результат работы функции запишите в переменную и выведите в консоль.
*/

// Объект user и function getUserInfo
/*
const user = {
  name: 'Nik',
  surname: 'surname',
  age: 33,
};

const userInfo = getUserInfo(user);
console.log('userInfo', userInfo);

function getUserInfo(user) {
  return `Имя: ${user.name}. Фамилия: ${user.surname}. Возраст: ${user.age}.`
}
*/

const user = {
  name: 'Nik',
  surname: 'surname',
  age: 33,
  // snowInfo - это метод объекта(ключ - showInfo, значение - функция)
  showInfo() {
    // this - это ключевое слово, которое ссылается на переменную user
    console.log(`Имя: ${this.name}. Фамилия: ${this.surname}. Возраст: ${this.age}.`)
  }
};

// Вызвали метод showInfo у объекта user
user.showInfo();

// console - это объект и log - это метод объекта console
//console.log();
