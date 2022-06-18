/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    let result = [];
    
    for (let i = 0; i < intervals.length; i++){
        
        if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval);
            newInterval = intervals[i];
        }
        
        else if(newInterval[0] > intervals[i][1]) {
            result.push(intervals[i]);
        }
        
        else {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1], newInterval[1])];
        }       
    }
    
    result.push(newInterval);
    return result;
};