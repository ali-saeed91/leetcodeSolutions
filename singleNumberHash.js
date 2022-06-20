//console.log("Build hashMap & find Single number from nums Array") /example nums =[2,2,1], [4,1,2,1,2], [1], [1,0,1]
let nums = [4,1,2,1,2];                                                 //Enter Array where one number is not repeated more than twice and only one single number exist
let output =0;
let hashMap = new Map();
nums.sort();
console.log(nums)                                                   // sort the array ascending
let lenI= nums.length;
console.log("length of array =",lenI);
let x=1;
let y=0;    
// method 
try{
    console.log("start of try block");
    //undefinedVar;
  //  throw "undefinedVar is not defined"
    mapArray(nums);
    
    console.log(" Hashmap =",hashMap)
    console.log("single number =",output)
    
}
catch(e){
    console.log("Entering catch block now");
    console.log(e.message)                  // we should use JSON object + HTTP Code
}
finally{
    console.log("Nums should not be empty Array");
}

// create hashmap of array with single key value pairs
function mapArray(){
    for(let i=0; i<lenI;i++ ){
           for (let j=1; j<lenI;j++){
               if(nums[i]===nums[j] && i!==j){
      //     console.log("nums[i]=",nums[i],"index =",i)
     //              console.log("nums[j]=",nums[j],"index =",j)
               hashMap.set(nums[i], x+1 );                             // If number/key is matched add 1 to its value in hashMap
     //           console.log("A",i,hashMap)           
               }
                 else if(nums[i]!==nums[i-1] && nums[i]!==nums[i+1]){
                 hashMap.set(nums[i], x );                             // If number is not matched than return single number
             //      console.log("D",hashMap)
             //     console.log("middle single number =",nums[i]);               
                   output = nums[i];
           //        return nums[i];            
               }}}
   if(lenI===1){
       hashMap.set(nums[y], x );                                       // If array is of single element return single number
          //        console.log("single element array =",hashMap)
       output = nums[y];
    //   return nums[y];
   }    
       return output;    
}
