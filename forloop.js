// for (let i = 0; i <=10; i++) {
//     const element = i;
//     console.log(element);

// }
// for (let i = 0; i <= 10; i++) {
//     const number = i ;
//     if (number == 5) {
//         console.log(`5 is an best number`);

//     }
//     console.log(number);

// }

// function element(num1) {
//     return num1 * 2
// }
// console.log(element(2));


// console.log(i + '*' + j + '=' +  i*j);





for (let index = 1; index <= 8; index++) {
    
    if (index == 5) {
        // console.log(`Detected 5`);
        break; // Exits the loop when index is 5
    }
    
    
    
    // console.log(`Value of index is: ${index}`);
}


let index = 1;

while (index <= 8) {
    if (index == 5) {
        // console.log(`Detected 5`);
        index = 7; // Set index to 7 to skip to it
        continue; // Skip to the next iteration
    }
    
    if (index == 7) {
        //console.log(`Continue from 7`);
        // Continue to the next iteration without any changes
    }
    
    //console.log(`Value of index is: ${index}`);
    
    index++; // Increment index
}

let myNum = 1
while (myNum <= 5) {
    //console.log(`my value is : ${myNum}`);
    myNum = myNum + 1
}


// myArr.forEach( (item) => {
    //     console.log(item);
    
    // })
    
    
    
    
    
    // const map = new Map()
    // map.set('IN', "India")
    // map.set('USa', "america")
    // map.set('chn', "china")
    
    // for (const key in map) {
        //     console.log(key);
        
        // }
        
        
        
        // const myArr = ["js", "rb", "py", "html"]
        // myArr.forEach(element => {
            //     console.log(element);
            
            // });
            
            const myArr = [
                {
                    filename : "javascript",
                    filecode : "js"
                },
                {
                    filename : "hypertext",
                    filecode : "html"
                },
                {
                    filename : "python",
                    filecode : "py"
                },
            ]
            
            myArr.forEach( (element) => {
                // console.log(myArr[element]);
                
            })
            
            for (let i = 4; i <=6; i++) {
                const element1 = i;
                console.log(`table of : ${i}`);
                
                for (let j = 1; j <= 10; j++) {
                    const newNum = j
                    console.log(i + '*' + j + '=' + i*j);
                    
                    
                }
            }
            
            // for (let i = 5; i <= 7; i++) {
                // const element = i;
                // console.log(`Table Of :${i}`);
            
                // for (let j = 0; j <= 10; j++) {
                    // const newNum = j;
            
            
            
            
            
            