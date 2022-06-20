// Single Number Brute Force Solution /example nums =[2,2,1], [4,1,2,1,2], [1], [1,0,1]
let nums = [4,1,2,1,2];                                                 //Enter Array where one number is not repeated more than twice and only one single number exist
let output =0;
let y=0;    
var singleNumber = function(nums) {                             
    nums.sort();                                                
let lenI= nums.length; 
let y=0;                                             
     for(let i=0; i<lenI;i++ ){
          
                  if(nums[i]!==nums[i-1] && nums[i]!==nums[i+1]){        // If number is not matched than return single number
                    output = nums[i]; }}
    if(lenI===1){                                                       // If array is of single element return single number
        output = nums[y]; }    
 return output;   }
 singleNumber(nums);
 console.log("single number =",output)
 