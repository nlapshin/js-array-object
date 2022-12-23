
// Присваиваем значение переменной userInfo
const userInfo = getUserInfo('Иван', 'Иванов', 100);
// Выводим в консоль
//console.log(userInfo)

console.dir('1'); // для объектов
console.dir(1); // для объектов

const deepObj = {
  name: {
    name: {
      name: {
        key: 'value'
      }
    }
  }
}

console.dir(deepObj, { depth: null })

console.log([{ a: 1, b: 'Y' }, { a: 'Z', b: 2 }]);

console.time('start')
// Промежуток выполнения
console.timeEnd('start')

/* function <Имя_функции>(переменная_1, переменная_2) {
  // кода
  // если функция возвращает значение, то
  // return
}*/
function getUserInfo(name, surname, age) {
  return `Имя: ${name}. Фамилия: ${surname}. Возраст: ${age}.`
}
