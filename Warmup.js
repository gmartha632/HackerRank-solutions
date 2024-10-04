// Solve me first 
function solveMeFirst(a, b) {
    // Hint: Type return a+b below
    sum =a+b ; 
    return sum;  
  }

  //Simple Array Sum
  function simpleArraySum(ar) {
    // Write your code here
    let sum = 0 ;
    for(let i = 0;i < ar.length ;i++){
        sum += ar[i];
    }
return sum;
}

// A very big sum
let sum = 0;
function aVeryBigSum(arr) {
    // Write your code here
    for(let i =0 ;i <arr.length ;i++){
        sum += arr[i]
    }
return sum
}

// Diagonal difference

function diagonalDifference(arr) {
    // Write your code herelet leftsum = 0;
     let sumDiag1 = 0;
    let sumDiag2 = 0;
    let n = arr.length ;
    
    for(let i = 0; i < n; i++){
        sumDiag1 +=arr[i][i];
        sumDiag2 +=arr[i][n-1-i];
         
    }
     
    return Math.abs(sumDiag1-sumDiag2)

}




// Birthday Candles 
let count = 0 ;
function birthdayCakeCandles(candles) {
    // Write your code here
  let max =  Math.max(...candles)
   for(let i = 0 ;i < candles.length ; i++){
       let a = candles[i] ; 
       if(max == a)count++ ;
   } 
    return count ;

}
 // Mdn Question
 
let  cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for (let i = 0 ; i < cities.length ; i++){
   let lower = cities[i].toLowerCase()
   let firstletter =lower.slice(0,1) 
   let capitailized= lower.replace(firstletter ,firstletter.toUpperCase())
   let result = capitailized
console.log(result);  
  

}


