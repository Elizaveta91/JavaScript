// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//  for (const key of Object.values(salaries)) {
//     totalSalary += key;
//   }
//   // Change code above this line
//   return totalSalary;
// }

// Напишіть функцію sumInput(), яка:
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
// Закінчує запитувати значення, коли користувач введе не числове значення, порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//  P.S. Нуль 0 – вважається числом, не зупиняйте введення значень під час введення «0».

// function sumInput() {
//   let userAnsfer;
//   let arrey = [];
//   do {
//     userAnsfer = prompt('введіть число');
//     console.log(parseFloat(userAnsfer));
//   arrey.push(Number(userAnsfer))
//   } while (userAnsfer);
//   console.log(arrey);
// }
// sumInput();

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   orderedItems.forEach(function (orderedItems, index) {
//     totalPrice += (`${orderedItems}`);
//   }

//   // Change code above this line
//  return totalPrice;
// }

//===================================================

//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() ділить збережені значення та повертає результат

  const calculator = {
      read(a, b) { 
      this.a = a;
      this.b = b;
    },
    sum() {
      return this.a + this.b;
    },
    min() {
      return this.a - this.b;
    },
    mult() {
      return this.a * this.b;
    },
    div() {
      return this.a / this.b;
    },
};
    calculator.read(2, 2)
console.log(calculator)
console.log(calculator.sum())
console.log(calculator.min())
console.log(calculator.mult())
console.log(calculator.div())

//===================================================
 // Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій

// Типів транзакцій лише два.
// Можна покласти або зняти гроші з рахунку
const Transaction = { DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

//Кожна транзакція це об'єкт з властивостямиЖ id, type, amount

const account = {
  //поточний баланс рахунку
  balance: 0,

  // Історія транзакцій
  transactions: [],

  //Метод створює та повертає об'єкт транзакцій
  //Приймає суму та тип транзакцій
  createTransaction(type, amount) {
    return {
      type,
      amount,
    };
  },

  //Метод відповідає за додавання суми до балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  deposit(amount) {},

  //Метод відповідає за зняття суми з балансу.
  //Приймає суму транкціонації.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку
  withdraw(amount) {},

  //Метод повертає поточний баланс
  getBalance() {},

  //Метод шукає та повертає об'єкт транзакції по id
  getTransactionDetails(id) {},

  //Метод повертає кількість засобів певного типу
  //транзакції з історії транзакцій
  getTransactionType(type) {},
};

