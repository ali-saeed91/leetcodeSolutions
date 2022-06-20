// Hashmap Two Sum Solution             nums = [2,7,11,15],[3,2,4],[3,3] target = 6,9,6
let nums =[2,7,11,15] ;
let target = 9;
let hashmap={};
let output =[];
var twoSumHash = function(nums, target) {
    for (let i=0; i<nums.length; i++){
        calc = target - nums[i];                
        if(hashmap[calc] !== undefined){        // Checking for hashmap Key exists
            output =[hashmap[calc],i];          // Storing the index for both Keys
            console.log('o1=',output)
            return output;                  
        }
       hashmap[nums[i]]=i;                    // Populating hashmap until both index are found
      }     
}
twoSumHash(nums,target);
console.log("Hashmap =",hashmap)
console.log("Index are :",output)