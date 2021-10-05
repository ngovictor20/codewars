function findEvenIndex(arr)
{
  for(var i = 0; i < arr.length;i++){
    if(arr.slice(0,i).reduce(sumArray,0) ===  arr.slice(i+1,arr.length).reduce(sumArray,0)){
      return i;
    }
  }
  return -1;
}
  
function sumArray(a,b){
  return a+b;
}

findEvenIndex([20,10,-80,10,10,15,35]);