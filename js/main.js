let money = prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
let firstExpense = prompt("Введите обязательную статью расходов в этом месяце"),
    firstCost = prompt("Во сколько обойдется?"),
    secondExpense = prompt("Введите обязательную статью расходов в этом месяце"),
    secondCost = prompt("Во сколько обойдется?");
    
appData.expenses.firstExpense = firstCost;
appData.expenses.secondExpense = secondCost;

alert("Your budget for 1 day: "+ appData.budget/30);