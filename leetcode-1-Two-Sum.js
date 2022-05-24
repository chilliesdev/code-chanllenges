/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {   
   var hashMap = {};
    
    for (let i = 0; i < nums.length; i++){
        let val =  nums[i];
        let n = target - val;
      
        if(hashMap[n] != undefined){
            return [hashMap[n], i]
        }
        
        hashMap[val] = i;
    }
    
    return hashMap
        
};