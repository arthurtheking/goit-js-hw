'Use strict';

let delivery = prompt('В какую страну вы хотите заказать в доставку?');
let country;
let price;

switch (delivery.toLowerCase()) {
    case 'Китай'.toLowerCase():
        country = 'Китай';
        price = 100;
        
        break;
        
        case 'Чили'.toLowerCase():
            country = 'Чили';
            price = 250;
        
            break;
        
        case 'Австралия'.toLowerCase():
            country = 'Австралия';
            price = 170;
        
            break;
        
        case 'Индия'.toLowerCase():
            country = 'Индия';
            price = 80;
        
            break;
        
        case 'Ямайка'.toLowerCase():
            country = 'Ямайка';
            price = 120;
        
            break;
        
        default:
        
        alert('В вашей стране доставка не доступна!')
            break;
}

if(price && country) {
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}