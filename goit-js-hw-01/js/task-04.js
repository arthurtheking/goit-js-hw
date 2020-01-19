'Use strict'

const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;

let quantity = prompt('Сколько дроидов вы хотите приобрести?');

if (quantity === null) {
    alert('Отменено пользователем!');
} else if (isNaN(quantity)){
    alert(`Введено некорректное значение!`);
} else {
    quantity = Number(quantity);
    totalPrice = quantity * pricePerDroid
    if (totalPrice <= credits) {
        alert(`Вы купили ${quantity} дроидов, на счету осталось ${credits - totalPrice} кредитов.`);
    } else {
        alert('Недостаточно средств на счету!');
    }
}