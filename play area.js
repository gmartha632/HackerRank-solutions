/*
* fibonacci(5) will print 1, 1, 2, 3, 5
* Assuming n is always greater than 0 
* n = 1, print 1
* n = 2, print 1, 1
*/
function fibonacci(n) {
    if (n === 1) {
        console.log("1");
        return;
    }
    if(n === 2) {
        console.log("1, 1");
        return;
    }

    let outputStr = "1, 1";
    let pTerm = 1; // Previous Term
    let ppTerm = 1;// Previous Pervious Term

    for (let i = 3; i <= n; i++) {
        currTerm = pTerm + ppTerm;
        ppTerm = pTerm;
        pTerm = currTerm;
        outputStr = outputStr + ", " + currTerm;
    }
    console.log(outputStr);
}
fibonacci(10);


function miniMaxSum(arr) {
    // Write your code here
    let sum=0;
    for(let i = 0 ; i < arr.length  ; i++){
       sum+=arr[i];
    }
    console.log(sum-Math.max(...arr),sum-Math.min(...arr))

    
}miniMaxSum([1,3,5,8,9])

let arr = [1,2,3,4,5]
let min = Math.max(...arr)
console.log(min)

