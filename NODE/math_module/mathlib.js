module.exports = function (){
    return {
      add: function(num1, num2) { 
           // add code here 
           var total=num1+num2;
           return total;
      },
      multiply: function(num1, num2) {
           // add code here 
           var product = num1*num2;
           return product;
      },
      square: function(num) {
           // add code here 
           var sq = num * num;
           return sq;
      },
      random: function(num1, num2) {
           // add code here
           var rand = Math.floor(Math.random()*(num2-num1)+num1)
           return rand;
      }
    }
  };
  