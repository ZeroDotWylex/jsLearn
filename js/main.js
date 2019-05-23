let money, time;

    //Buttons    
let startBtn = document.querySelector('#start'),
    expBtn = document.querySelector('.expenses-item-btn'),
    optExpBtn = document.querySelector('.optionalexpenses-btn'),
    countBudgetBtn = document.querySelector('.count-budget-btn'),
    buttons = document.querySelectorAll('[class$="btn"]'),
    //Input Fields  
    optExpenses = document.querySelectorAll('.optionalexpenses-item'),
    expenses = document.querySelectorAll('.expenses-item'),
    incomeInput = document.querySelector('#income'),
    savingsCheckbox = document.querySelector('#savings'),
    sumInput = document.querySelector('#sum'),
    percentInput = document.querySelector('#percent'),
    //Output Fields   
    budgetValue = document.querySelector('.budget-value'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    lvlValue = document.querySelector('.level-value'),
    expValue = document.querySelector('.expenses-value'),
    optExpValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let disButtons = ()=> {
        buttons.forEach(btn => {
            btn.setAttribute('disabled','');
        });
    };

    disButtons();

startBtn.addEventListener('click', function() {
    
    buttons.forEach(btn=>{
        btn.removeAttribute('disabled');
    });
    
    time = prompt("Введите дату в формате YYYY-MM-DD",'');
    money = +prompt("Ваш бюджет на месяц?",'');
       
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?",'');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();

    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

});

expBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expenses.length; i++) {
        let exp = expenses[i].value,
            cost = expenses[++i].value;

        if (typeof(exp) === 'string' && typeof(exp) != null &&
            typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
            appData.expenses[exp] = cost;
            sum += +cost;
        } else {
            i--;    
        }
    }
    expValue.textContent = sum;
});

optExpBtn.addEventListener('click', function() {
    for (let i = 0; i < optExpenses.length; i++) {
        let exp = optExpenses[i].value;
        appData.optionalExpenses[i] = exp;
        optExpValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function() {
    if (appData.budget != undefined) {
        
        if (appData.expenses.length != 0) {
        appData.moneyPerDay = ((appData.budget - +expValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        } else {
            appData.moneyPerDay = (appData.budget/ 30).toFixed();
            dayBudgetValue.textContent = appData.moneyPerDay;
        }

        if (appData.moneyPerDay < 100) {
            lvlValue.textContent = "Minimum level of earnings.";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            lvlValue.textContent = "Medium level of earnings.";
        } else if (appData.moneyPerDay > 2000) {
            lvlValue.textContent = "High level of earnings.";
        } else {
            lvlValue.textContent = "Error occured.";
        }
    } else {
        dayBudgetValue.value = "Error occured.";
    } 
});

incomeInput.addEventListener('input', function() {
    let items = incomeInput.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

savingsCheckbox.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value; 
        
        appData.monthIncome = (sum * percent / 100) / 12;
        appData.yearIncome = (sum * percent / 100);

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentInput.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumInput.value,
            percent = +percentInput.value; 
        
        appData.monthIncome = (sum * percent / 100) / 12;
        appData.yearIncome = (sum * percent / 100);

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};