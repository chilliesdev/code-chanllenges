function plusMinus(arr) {
    // Write your code here

    let length = arr.length;
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for (let i = 0; i < length; i ++){
        if (arr[i] > 0){
            positive ++;
        }
        
        if (arr[i] < 0){
            negative ++;
        }
        
        if (arr[i] === 0){
            zero ++;
        }
    }
    
    console.log(`${(positive/length).toFixed(6)}`);
    console.log(`${(negative/length).toFixed(6)}`);
    console.log(`${(zero/length).toFixed(6)}`);    
}
