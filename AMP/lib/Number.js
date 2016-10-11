Number.prototype.isInteger = function(){
  //console.log("value is", this.toPrecision());
  var ans = false;
  if(this % 1 == 0){
    ans = true
  }
  return ans;
}

Number.prototype.isDivisor = function(num){
    var ans = false;
    if((this/num).isInteger()){
        ans = true;  
    }
     return ans;
}

Number.prototype.divisors = function(){
    var ans = [],
        max = this;
    for(i=1; i<max; i++){
        if(max.isDivisor(i)){
            ans.push(i);
        }
    }
    return ans;
}

Number.prototype.primeFactorization = function (){
    console.log("prime aangekomen");
}


//window.addEventListener("load", function () {
//
//});
