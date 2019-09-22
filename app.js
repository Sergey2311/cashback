console.log("Tinkoff");

const purchaseCash = 9999;
const purchaseType = 'regular';
const cashback = purchaseType == 'regular' ? total = purchaseCash * 0.01 : 
    purchaseType == 'elevated' ? total = purchaseCash * 0.05 : total = purchaseCash * 0.3;
const result = cashback <= 3000 ? Math.trunc(cashback) : 3000;
console.log(result);

// 3 строка - вписываем сумму покупки; 4 строка - выбираем тип покупки;
// 5-6 строка - высчитываем кэшбек; 7 строка - округляем и приводим к "не более 3000".