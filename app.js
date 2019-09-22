console.log("Tinkoff");

// regular = 0.01;
// elevated = 0.05;
// special = 0.3;

const purchaseCash = 38976;
let purchaseType = 'regular';

if (purchaseType == 'regular') {
    total = purchaseCash * 0.01;
} else { if (purchaseType == 'elevated') {
    total = purchaseCash * 0.05;
} else {
    total = purchaseCash * 0.3; }
}


// финиш - это окончательная сумма 
// не более 3000
// тотал - это кэшбек


if (total <= 3000) {
    finish = Math.trunc(total);
} else {
    finish = 3000;
}

console.log(finish);