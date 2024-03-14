let price=[45,23,10,89,5];
console.log(price.sort(function(a,b){
    if(a<b){
        return -1;
    }
    if(a>b){
        return 1;
    }
    if(a==b){
        return 0;
    }
   
  }
  ));