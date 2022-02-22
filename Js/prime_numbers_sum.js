function prime_numbers_sum(num) {
  let prime_numbers = [];
  let sum;
  for (var i = 1; i <= num; i++) {
    var add = true;
    for(var j=2;j<i;j++){
      if(i % j === 0){
        add = false;
      }
    }
    if(add === true && i>1){
      prime_numbers.push(i);
      sum = prime_numbers.reduce(function(total,value){return total+value});
    }
  }
  return sum;
}
