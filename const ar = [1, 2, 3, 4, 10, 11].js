const ar = [1, 2, 3, 4, 10, 122222222]
function simpleArraySum(ar) {
    // Write your code here
    let arCount = 0
 for (let i = 0; i < ar.length; i++){
     arCount += ar[i]
    }
    return console.log(arCount)
}

simpleArraySum(ar)
