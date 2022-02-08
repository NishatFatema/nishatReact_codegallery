let firstIndex=0;
let lastIndex=0;

    const findExist = (arrNum , findNum)=>{
        const mid=Math.floor((firstIndex+lastIndex)/2);

        if(arrNum[mid]===findNum){

             return mid;
        }
        else if(arrNum[mid]>findNum){

                firstIndex = mid;
        }
            else {

                lastIndex = mid;
            }
        
  findExist(arrNum,findNum);  
};
const bisectionAlgo=(arrNum, findNum)=>{
     firstIndex=0;
     lastIndex=arrNum.length-1;
       
    findExist(arrNum,findNum);
}




console.log(bisectionAlgo([2,4,5,7,8,11,45,77,120,134,145]),120)