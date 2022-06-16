/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    // O(n) time;
    // O(n) space;
    let result = false;
    let map = {};
    
    for (let value of nums){
        if (!map[value]) {
            map[value] = 1;
        }
        
        else {
            return result = true;
        }
    }
    
    return result;
};