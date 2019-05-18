let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?",'');
    time = prompt("Введите дату в формате YYYY-MM-DD",'');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
}

start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpences: function() {
        for (let i = 0; i < 2; i++) {
            let exp = prompt("Введите обязательную статью расходов в этом месяце",''),
                cost = prompt("Во сколько обойдется?",'');
    
            if (typeof(exp) === 'string' && typeof(exp) != null &&
                typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
                appData.expenses[exp] = cost;
            } else {
                i--;    
            }
        }
    },
    chooseOptExpences: function() {
        for (let i = 0; i < 3; i++) {
            let exp = prompt("Введите необязательную статью расходов в этом месяце",'');
    
            if (typeof(exp) === 'string' && typeof(exp) != null && exp != '' && exp.length < 50 ) {
                appData.optionalExpenses[i + 1] = exp;
            } else {
                i--;    
            }
        }
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Your budget for 1 day: "+ appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Minimum level of earnings.");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Medium level of earnings.");
        } else if (appData.moneyPerDay > 2000) {
            console.log("High level of earnings.");
        } else {
            console.log("Error occured.");
        }
    },
    checkSavings:function() {
        if (appData.savings == true) {
            let save = +prompt("What is your savings amount?", ''),
                percent = +prompt("What is the percent?", '');
            
            appData.monthIncome = (save * percent / 100) / 12;
            alert("Your incomes for 1 month from the Deposit: " + appData.monthIncome);
        }
    },
    chooseIncome:function() {
        for(;;) {
            let items = prompt('What will bring you additional income?','');

            if (typeof(items) === 'string' && items != '' && items != null) {
                appData.income = items.split(', ');
                appData.income.push(prompt('Maybe something else?',''));
                appData.income.sort();
                break;
            } else {
                continue;
            }
        }

        let str = '';
            appData.income.forEach((element,index) => {
            str += ++index + ": " + element + "\n";
        }); 
        alert("Ways to make additional incomes:\n" + str);
    }
};

function dataInfo() {
    console.log("The program includes this data:");
    
    for (let prop in appData) {
        console.log(prop);
    }
}