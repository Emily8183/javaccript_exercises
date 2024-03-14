const employees = [
  { eNo: 1001, salary: 3000 },
  { eNo: 1002, salary: 2200 },
  { eNo: 1003, salary: 3400 },
  { eNo: 1004, salary: 6000 },
];
let totalSalary = employees.reduce((accumulator, current) => {
  return accumulator + current.salary;
}, 0);
//必须加零，这样初始值是数字，不然就是object literal
console.log(totalSalary);

//output是所有工资的总和
