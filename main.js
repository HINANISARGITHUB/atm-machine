#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let Balance = 20000;
let pinCode = 12369;
console.log(chalk.bold.bgGreenBright("  Welcome to ATM  "));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: (chalk.magentaBright("enter your pin code :")),
    }
]);
if (pinAnswer.pin === pinCode) {
    console.log(chalk.cyan("You enter correct pin code."));
    let operationlist = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: (chalk.yellow("please select a option you want.")),
            choices: ["withdraw", "checkbalance", "deposit", "more information"],
        }
    ]);
    //withdraw operation
    if (operationlist.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: (chalk.green("enter your amount you want to withdraw :")),
            }
        ]);
        //withdraw condition
        if (Balance >= amountAns.amount) {
            Balance -= amountAns.amount;
            console.log(chalk.blueBright(`Your remauning balance is: ${Balance}`));
        }
        else {
            console.log(chalk.bgRed("insufficient balance"));
        }
    }
    //checkbalance condition
    else if (operationlist.operation === "checkbalance") {
        console.log(chalk.cyanBright(`Your balance is : ${Balance}`));
    }
    //deposit operation
    else if (operationlist.operation === "deposit") {
        let addAmount = await inquirer.prompt([
            {
                name: "add",
                type: "number",
                message: (chalk.magentaBright("enter your deposit amount :")),
            }
        ]);
        Balance += addAmount.add;
        console.log(chalk.greenBright(`Now your balance is : ${Balance}`));
    }
    //more information
    else if (operationlist.operation === "more information") {
        console.log(chalk.cyanBright("Please attend a life session of Typescript classes."));
    }
}
else {
    console.log(chalk.redBright("enter correct pin code!"));
}
