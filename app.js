console.log("Tinkoff");

const purchaseCash = 21756;
const purchaseType = 'special';
const maxCashback = 3000;
const onePercent = 0.01;
const twoPercent = 0.05;
const threePercent = 0.3;

if (purchaseType == 'regular') {
    cashback = purchaseCash * onePercent;
} else { if (purchaseType == 'elevated') {
    cashback = purchaseCash * twoPercent;
} else { if (purchaseType == 'special') {
    cashback = purchaseCash * threePercent; }
} 
    }


const result = cashback <= maxCashback ? Math.trunc(cashback) : maxCashback;
console.log(result);

