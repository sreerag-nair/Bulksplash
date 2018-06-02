





const constant = 30;


// console.log(Math.floor(x / 3))

var number = 1201

for(var m = 0; m < Math.floor(number/constant) ; m++){
    for(var i = 0; i < constant ; i++){
        
        console.log("Number : " , (m * constant) + i)
        
    }

    if(m == Math.floor(number/constant)-1){
        for(var z = 0; z < number % constant; z++)
        console.log("Numberzzzz : " , ((m+1) * constant) + z)
    }
}


