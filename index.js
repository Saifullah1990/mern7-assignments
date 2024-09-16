/* Module-10 Assignment */ 


/* 1. Calculate Difference */

function calculateDifference(num1, num2){
    let difference = Math.abs(num1-num2); 
    console.log(`The difference between the two numbers is: ${difference}`);
}

/* 2. Checking Odd Numbers */ 

function isOdd(num){
    if(num%2 !== 0)
        console.log(`true`)
    else
        console.log(`false`)
}

/* 3. Finding the Minimum */ 

function findMin(arr){
    arr.sort(function(a,b){
        return a-b;
    })
    console.log(arr[0]);
}

/* 4. Filtering Even Numbers */ 

function filterEvenNumbers(arr){
    let evenArr = [];
    arr.forEach(num => {
        if(num%2 === 0){
            evenArr.push(num)
        }
    });
    console.log(evenArr);
}

/* 5. Sorting Array in Descending Order */ 

function sortArrayDescending(arr){
    arr.sort(function(a,b){
        return b-a
    })
    console.log(arr);
}

/* 6. Lowercase First Letter */ 

function lowercaseFirstLetter(str){
    let firstLetter = str.charAt(0);
    let remainingStr = str.slice(1, str.length)

    console.log((firstLetter.toLowerCase()).concat(remainingStr));
}

/* 7. Counting Vowels */ 

function countVowels(str){
    const strToArr = str.split("");
    const vowelsArr = strToArr.filter(function(char){
        return "aeiouAEIOU".includes(char)
    })

    console.log(vowelsArr.length);
    console.log(vowelsArr);
}

/* 8. Finding the Average */ 

function findAverage(arr){
    let sum=0; 
    arr.forEach(element =>{
        sum = sum+element;
    })
    const average = sum/arr.length;
    console.log(average);
}


//document.getElementById("calc").addEventListener("click", calculateDifference(5,8));