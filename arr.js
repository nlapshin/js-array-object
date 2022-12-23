/*
// Создание массива
const numbers = [100, 200, 300] // Массив чисел
// Какая длина у массива numbers

const objArray = [{ name: 'Nik' }, { name: 'Anna' }] // Массив объектов.

// Длина массива
console.log('Длина массива:', numbers.length)

// Чтение первого элемента
console.log('Первый элемент:', numbers[0])

// Чтение последнего элемента
console.log('Последний элемент:', numbers[numbers.length - 1])

console.log('Несуществующий элемент:', numbers[100500])
console.log('Несуществующий элемент:', numbers[-1])

// Перезаписать 2 элемент
numbers[1] = 999

// Добавить элемент в массив
numbers.push(4000) // push добавляет элемент в конец массива


// Способы перебора массива

// Первый способ
for (let i = 0; i < numbers.length; i++) {
  console.log('Индекс:', index, 'Значение:', numbers[i])
}

// Второй способ
for (const value of numbers) {
  console.log('Значение:', value)
}

// Третий способ
numbers.forEach((value, index) => {
  console.log('Индекс:', index, 'Значение:', value)
})
*/

/*
const numbers = [100, 200, 300]

// НУМЕРАЦИЯ С 0
numbers[1] = 999 // изменили значение
numbers.push(400) // добавили значение

// Что выведет console.log?
console.log(numbers) // [ 100, 999, 300, 400 ]
*/

// Мы хотим вывести в console три раза слово привет

// Первая секция - это пред условия(let i = 0), выполняется один раз
// Вторая секция - это условие выхода из цикла(i < 3)
// Третья секция - это код, который выполнится в конце каждого цикла(i++)
/*for (let i = 0; i < 3; i++) {
  console.log('привет');
}*/

/*
// Переписал for
let i = 0;

for(;;) {
  if (i < 3) {
    break;
  }

  console.log('привет')

  i++
}
*/

/*
const numbers = [100, 200, 300]
let sumNumbers = 0

// 1. Сколько раз выполниться цикл?
// 2. Что выведет на первом проходе?
for (let i = 0; i < numbers.length; i++) {
  console.log('Индекс:', i, 'Значение:', numbers[i])

  sumNumbers = sumNumbers + numbers[i]
}

console.log('sumNumbers:', sumNumbers)
*/
/*
Индекс: 0 Значение: 100
Индекс: 1 Значение: 200
Индекс: 2 Значение: 300
*/


// Есть массив [100, 200, 300]
// Напишите код, который умножает на 2 каждый элемент массива
// [200, 400, 600]

/*
const numbers = [100, 200, 300]

doubleArray(numbers);

console.log(numbers);

function doubleArray(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2
  }
}
*/


// Способы перебора массива

/*
const numbers = [100, 200, 300]

// Первый способ
for (let i = 0; i < numbers.length; i++) {
  console.log('Индекс:', index, 'Значение:', numbers[i])
}

// Второй способ for-of
for (const value of numbers) {
  console.log('Значение:', value)
}

// Третий способ метод forEach
// forEach принимает на аргументом функцию, которая
// является функций вызываем на каждой итерации цикла
numbers.forEach((value, index) => {
  console.log('Индекс:', index, 'Значение:', value)
})
*/
