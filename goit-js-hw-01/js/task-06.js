'Use strict'

let input;
let total = 0;

for(let i = 0; input !== null; i++) {
    input = prompt('Введите число:')
    if (!isNaN(input)) {
        total += Number(input);
    } else {
        alert('Введено некорректное значение');
    }
}

alert(`Общая сумма чисел равна ${total}`)