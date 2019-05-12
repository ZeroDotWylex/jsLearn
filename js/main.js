let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

// for (let i = 0; i < 2; i++) {
//     let exp = prompt("Введите обязательную статью расходов в этом месяце"),
//         cost = prompt("Во сколько обойдется?");

//     if (typeof(exp) === 'string' && typeof(exp) != null &&
//         typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
//         appData.expenses[exp] = cost;
//     } else {
//         i--;    
//     }
// }

/*let i = 0;
while (i++ < 2) {
    let exp = prompt("Введите обязательную статью расходов в этом месяце"),
        cost = prompt("Во сколько обойдется?");

    if (typeof(exp) === 'string' && typeof(exp) != null &&
        typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
        appData.expenses[exp] = cost;
    } else {
        i--;    
    }
} */

/* let i = 0;
do {
    let exp = prompt("Введите обязательную статью расходов в этом месяце"),
        cost = prompt("Во сколько обойдется?");

    if (typeof(exp) === 'string' && typeof(exp) != null &&
        typeof(cost) != null && exp != '' && cost != '' && exp.length < 50 ) {
        appData.expenses[exp] = cost;
    } else {
        i--;    
    }
} while (i++ < 2); */

appData.moneyPerDay = appData.budget / 30;

alert("Your budget for 1 day: "+ appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Minimum level of earnings.");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Medium level of earnings.");
} else if (appData.moneyPerDay > 2000) {
    console.log("High level of earnings.");
} else {
    console.log("Error occured.");
}