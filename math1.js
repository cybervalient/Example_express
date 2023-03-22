const { useCssModule } = require("vue");

const Math = {};
function add(x,y){
    return x+y;
 }
 
 function subtract(x,y){
  return x-y;
 }
 
 function multiply(x,y){
  return x*y;
 }
 
 function divide(x,y){
  if(y==0){
     console.log("no se puede dividir")
  }
 else
    return x/y;
 }

 Math.add = add;
 Math.subtract = subtract;
 Math.multiply = multiply;
 Math.divide = divide;

 module.exports = Math;