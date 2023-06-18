let basicSalary = parseInt(window.prompt("Enter basic salary"));
let benefits = parseInt(window.prompt("Enter benefits"));

// calculate gross salary
let grossSalary = basicSalary + benefits;

let payee;
let nssfDeductins;
let nhifDeductions;

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

console.log ("Gross salary:", grossSalary);
console.log ("Payee:", payee);
console.log ("NSSF deductions:", nssfDeductins)
console.log ("NHIF deductions:", nhifDeductions)