/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let curBuy = Infinity;
    let curProfit = 0;
    
    for (let stockPrice of prices) {
        let prevBuy = curBuy;
        
        curBuy = Math.min(curBuy, stockPrice);
        curProfit = Math.max(curProfit, stockPrice - prevBuy);     
    }
    
    return curProfit;
};