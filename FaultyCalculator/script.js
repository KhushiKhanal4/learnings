let random=Math.random();
console.log(random)
let a=prompt("Enter first number:")
let b=prompt("Enter second number:")
let o=prompt("Enter operator:")


a=parseFloat(a)
b=parseFloat(b)


if(random>0.1){
     //Perform correct calculation//
     let res
     if(o =='+'){
        res=a + b
     }
     else if(o =='-'){
        res=a - b
     }
      else if(o =='*'){
        res=a * b
     }
     else if(o =='/'){
        res=a / b
     }

     console.log(a,o,b,"=",res)
    

}
if(random<0.1){
     //Perform wrong calculation//
     let res
     if(o =='+'){
        res=a - b
     }
     else if(o =='-'){
        res=a / b
     }
      else if(o =='*'){
        res=a + b
     }
     else if(o =='/'){
        res=a ** b
     }

     console.log(a,o,b,"=",res)
    

}