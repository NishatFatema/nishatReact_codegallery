const greatestNumInArray = (arrNum) => {
  let maxNum = 0;
  arrNum.forEach((element) => {
    if (element > maxNum)
     maxNum = element;
  });
  return maxNum;
};
console.log("gretest number:");
console.log(`result:${greatestNumInArray([7, 5, 8, 25, 75, 1, 8, 99, 3])}`);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>minimum>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const minimumNum=(arrNum)=>{
    let minNum = arrNum[0];
    arrNum.forEach((element) => {
      if (element < minNum)
       minNum = element;
    });
    return minNum;
  };
  
  console.log("minimum number:");
  console.log(minimumNum([7, 5, 8, 25, 75, 1, 8, 99, 3]));

//   >>>>>>>>>>>>>>>>>>>>>>>>>>gretest string>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const greatestStrInArr=(arrStr)=>{
    let maxStr=arrStr[0].length;
    let strData=arrStr[0];
    arrStr.forEach((element)=>{
        if(maxStr<element.length){ 
            maxStr=element.length;
            strData=element;
       }
    });
       return strData;
 }
 
 console.log("greatest string in array :");
 console.log(greatestStrInArr(["python", "java","react","bootstrap"]));


// >>>>>>>>>>>>>>>>>>>>>>>>>greatest string in paragraph>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


const greatestStrInPara=(str)=>{
    const arrStr=str.split(" ");
   let maxStr=arrStr[0].length;
   let strData=arrStr[0];
   arrStr.forEach((element)=>{
       if(maxStr<element.length){ 
           maxStr=element.length;
           strData=element;
      }
   });
      return strData;
}
console.log("greatest string para:");
console.log(greatestStrInPara("finding greatest string from paragraph "));

