console.log("Tinkoff");

const purchaseCash = 9999;
const purchaseType = 'regular';
const cashback = purchaseType == 'regular' ? total = purchaseCash * 0.01 : 
    purchaseType == 'elevated' ? total = purchaseCash * 0.05 : total = purchaseCash * 0.3;
const result = cashback <= 3000 ? Math.trunc(cashback) : 3000;
console.log(result);

