
// Brute Force Two Sum Solution           nums = [2,7,11,15],[3,2,4],[3,3] target = 6,9,6
var twoSum = function(nums, target) {
    for (let i=0; i<nums.length; i++){
     for (let j=i+1; j<nums.length; j++){
        if((nums[i]+nums[j])===target){
        output = [i,j];
            return output;
        }}}
}
twoSum([2,7,11,15],9);
console.log("Target Index are :",output);

