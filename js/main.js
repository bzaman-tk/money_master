// 
const calculateBtn = document.getElementById('calculate');
const incomeFiled = document.getElementById('income');
const foodFiled = document.getElementById('food');
const rentFiled = document.getElementById('rent');
const clothesFiled = document.getElementById('clothes');
const totalExpenses = document.getElementById('total_expenses');
const balance = document.getElementById('balance');
const saveBtn = document.getElementById('save');
const saveFiled = document.getElementById('save_amount');
const savingAmount = document.getElementById('saving_amount');
const remainBalance = document.getElementById('remain_balance');

calculateBtn.addEventListener('click', function () {
    const incomeFiledValue = getNumber(incomeFiled);

    if (incomeFiledValue) {
        const foodFiledValue = getNumber(foodFiled); 
        const rentFiledValue = getNumber(rentFiled); 
        const clothesFiledValue = getNumber(clothesFiled); 
        const total = foodFiledValue + rentFiledValue + clothesFiledValue;
        const balanceTotal = incomeFiledValue - total;
        if (balanceTotal < 0) { alert("can't Expense More then Income"); return; }
        balance.innerText = balanceTotal;
        totalExpenses.innerText = total;
        saveBtn.click();
    }
});

saveBtn.addEventListener('click', function () {
    const savePercentage = getNumber(saveFiled);
    if (savePercentage) {
        const tempBalance = getNumber(balance);
        const finalSavingAmount = tempBalance * savePercentage / 100;
        if (finalSavingAmount > tempBalance) { alert("can't Save More then Income"); return; }
        savingAmount.innerText = finalSavingAmount;
        remainBalance.innerText = tempBalance - finalSavingAmount;
    }
});

function getNumber(filed) {
    let filedValue;
    if (filed.tagName.toLowerCase() === "input") {
         filedValue = parseInt(filed.value);
    } else {
         filedValue = parseInt(filed.innerText);
    }
      
    if (filedValue < 0 || isNaN(filedValue) || filedValue === "") {
        filed.style.color = 'red';
        return false;   
    }
    return filedValue;
}