const employees=[
    {eNo:1001,salary:3000},
    {eNo:1002,salary:2200},
    {eNo:1003,salary:3400},
    {eNo:1004,salary:6000}
]
 
employees.sort(function(a,b){
    if(a.salary<b.salary){
        return 1;
    }
    if(a.salary>b.salary){
        return -1;
    }
    if(a==b){
        return 0;
    }
   
  }
  );
  console.log(employees);