let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

function chooseExpences() {
    for (let i = 0; i < 2; i++) {
        let exp = prompt("Введите обязательную статью расходов в этом месяце"),
            cost = prompt("Во сколько обойдется?");

        if (typeof(exp) === 'string' && typeof(exp) != null &&
            typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
            appData.expenses[exp] = cost;
        } else {
            i--;    
        }
    }
}

chooseExpences(); 

function chooseOptExpences() {
    for (let i = 0; i < 3; i++) {
        let exp = prompt("Введите необязательную статью расходов в этом месяце");

        if (typeof(exp) === 'string' && typeof(exp) != null && exp != '' && exp.length < 50 ) {
            appData.optionalExpenses[i + 1] = exp;
        } else {
            i--;    
        }
    }
}

// chooseOptExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Your budget for 1 day: "+ appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Minimum level of earnings.");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Medium level of earnings.");
    } else if (appData.moneyPerDay > 2000) {
        console.log("High level of earnings.");
    } else {
        console.log("Error occured.");
    }
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is your savings amount?", ''),
            percent = +prompt("What is the percent?", '');
        
        appData.monthIncome = (save * percent / 100) / 12;
        alert("Your incomes for 1 month from the Deposit: " + appData.monthIncome);
    }
}

checkSavings();