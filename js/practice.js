//Напишіть код, щоб обчислити суму цифр у числі за допомогою циклу while.

// const number = 4367; //20
let total = 0;
const number2 = 56349; //27
const string = String(number2);

for (let i = 0; i < string.length; i += 1) {
    console.log(string[i]);
    total += Number(string[i]);
}
console.log(total);

