//creating a variable
let basicSalary = parseInt(window.prompt("Enter basic salary"));
let benefits = parseInt(window.prompt("Enter benefits"));

// calculate gross salary
let grossSalary = basicSalary + benefits;

let payee;
let nssfDeductins;
let nhifDeductions;

//calculates the tax
if (grossSalary <= 24000){
    payee = grossSalary * 0.01;
    nssfDeductins = grossSalary * 0.06;
    nhifDeductions = 150;
}
else if (grossSalary <= 32333){
    payee = (grossSalary - 24000) * 0.25;
    nssfDeductins = grossSalary * 0.06;
    nhifDeductions = 300;
}
else {
    payee = (grossSalary - 32333) * 0.3;
    nssfDeductins = grossSalary * 0.06;
    nhifDeductions = 400;
};

// Calculate net salary 
let netSalary = grossSalary - payee - nssfDeductins - nhifDeductions;

//console logs the gross salary
console.log ("Gross salary:", grossSalary);
//console logs the payee
console.log ("Payee:", payee);
//console logs the NSSF deductions
console.log ("NSSF deductions:", nssfDeductins)
//console logs the NHIF deductions
console.log ("NHIF deductions:", nhifDeductions)
