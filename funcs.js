
// Можно работать с ней до объявления
sum()

// Не будет работать
//sumExp(2, 2)
// ReferenceError: Cannot access 'sumExp' before initialization

// Декларативная функция(Function declaration)
function sum(a, b) {
  return a + b;
}

// Функциональное выражение (Function express)
const sumExp = function (a, b) {
  return a + b;
}

// Записываем в переменную функцию sumExp

// Стрелочная функция (Arrow function)
const sumArrow = (a, b) => a + b // { return a + b }


// Контекст вызова функций
// Ключевое слово this - это контекст вызова функции

const contextExp = function() {
  console.log(this); // это контектс функции
}

const _this = this

const contextArrow = () => {
  console.log(_this); // глобальный контектс
}

contextExp();
contextArrow();
