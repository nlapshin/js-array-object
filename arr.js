
// Создание массива
const numbers = [100, 200, 300]

// Длина массива
console.log('Длина массива:', numbers.length)

// Чтение первого элемента
console.log('Первый элемент:', numbers[0])

// Перезаписать 2 элемент
numbers[1] = 999

// Добавить элемент в массив
numbers.push(4000)

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


