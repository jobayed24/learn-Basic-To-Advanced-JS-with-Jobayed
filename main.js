// we will do calculate employee salaries

const employeeSalaries = {
    John: 50000,
    Jane: 60000,
    Doe: 45000,
    Alice: 70000
};

const eachPersonSalary=Object.values(employeeSalaries);
const totalSalary=eachPersonSalary.reduce((prev,curren)=>{
    return prev+curren
},0)
// console.log(totalSalary)
//Total salary

console.log(`Total employee salaries=`,totalSalary);