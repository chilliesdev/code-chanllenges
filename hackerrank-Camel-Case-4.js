function processData(input) {
    //Enter your code here
    
    // let inputArr = input.includes("\r") ? input.split("\r") : input.split("\n");
    let inputArr = input.split("\r\n");
    let outputArr = [];
    
    for (let i = 0; i < inputArr.length; i++){
        let line = inputArr[i];
        let lineArr = line.split(";");
        
        let operation = lineArr[0];
        let type = lineArr[1];
        let value = lineArr[2];
        
        let result = "";
        
        if (operation === "S"){
            let newValueArr = [];
            
            for (let j = 0; j < value.length; j++ ){
                if (value[j] === value[j].toUpperCase()){
                    newValueArr.push(" ");
                } 
                
                newValueArr.push(value[j]);
            }
            
            if (type === "M"){
                newValueArr.splice(newValueArr.length - 3);
            }
                    
            result = newValueArr.join("").toLowerCase();
            
            if (result.charAt(0) === " "){
                result = result.substring(1);
            }
        }
                
        if (operation === "C"){
            let valueArr = value.split(" ");
        
            for (let j = 0; j < valueArr.length; j++){
                let word = valueArr[j];
                
                word = word.split("");
                word[0] = word[0].toUpperCase();
                
                if (type !== "C" && j === 0){
                    word[0] = word[0].toLowerCase();            
                }
                
                valueArr[j] = word.join("");
            }
            
            result = valueArr.join("");
            
            if (type === "M"){
                result = result + "()";
            }
        }
        
        outputArr.push(result);
    }
    
    console.log(outputArr.join("\n"));
} 
