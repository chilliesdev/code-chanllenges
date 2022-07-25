function breakingRecords(scores) {
    // Write your code here
    
    let maxSco = scores[0];
    let minSco = scores[0];
    
    let maxCount = 0;
    let minCount = 0;
    
    for (let i = 1; i < scores.length; i ++){
        // If greater that prev max 
        if (scores[i] > maxSco){
            // max record broken
            maxSco = scores[i];
            maxCount ++;
        } else if (scores[i] < minSco) {
            // min record broken
            minSco = scores[i];
            minCount ++;
        }
    }
    
    return [maxCount, minCount];
}
