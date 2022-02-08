// const factorialOfNum=(num)=>{
//     let fact=num;
//     let i=1;
//     do{
//     factNum = fact*i;
    
//     }while(i<=num);

// return factNum ;

// }

// console.log(factorialOfNum(5));


// const fact=(n)=>n<2 ? 1:fact(n-1)
// console.log(fact(5));


const factorial=(num)=>{
    if (num==0){
        return 1;
    }
    else {
        return num*factorial(num-1);
    }
}
console.log(factorial(5));
