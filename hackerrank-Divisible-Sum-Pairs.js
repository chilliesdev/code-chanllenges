function divisibleSumPairs(n, k, ar) {
    // Write your code here
    
    let noOfPair = 0;
    let map = new Map();
    
    for (let i = 0; i < ar.length; i++){
        let reminder = ar[i] % k;
        let diff = k - reminder;
        
        if (diff === k){
            diff = 0
        }
        
        if (map.has(diff)){
            noOfPair += map.get(diff);
        }
        
        if (map.has(reminder)){
            let count = map.get(reminder);
            map.set(reminder, count + 1);
        } else {
            map.set(reminder, 1);
        }
    }
    
    return noOfPair;
}
