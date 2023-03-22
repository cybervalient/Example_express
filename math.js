function add(x,y){
    return x+y;
 }
 
 function subtract(x,y){
  return x-y;
 }
 
 function multipy(x,y){
  return x*y;
 }
 
 function divide(x,y){
  if(y==0){
     console.log("no se puede dividir")
  }
 else
    return x/y;
 }

 exports.add = add;
 exports.subtract = subtract;
 exports.divide = divide;
 exports.multipy = multipy;

 