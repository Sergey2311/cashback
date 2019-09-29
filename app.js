console.log("Tinkoff");

const regularCash = 5647; 
const elevatedCash = 984;
const specialCash = 20345;

const maxCashback = 3000;
const onePercent = 0.01;
const fivePercent = 0.05;
const thirtyPercent = 0.3;

let cashback = regularCash * onePercent + elevatedCash * fivePercent + specialCash * thirtyPercent;

const result = cashback <= maxCashback ? Math.trunc(cashback) : maxCashback;
console.log(result + ' рублей');
