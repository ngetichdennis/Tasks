function solution(N) {
    // Implement your solution here
    const binary=N.toString(2)
    //initialization of binary(current and the longest)
    let maximamGap=0
    let currentGap=0
    //iterating through the binary using for loop
    for(let i=1;i<binary.length;i++){
        if(binary[i]==="1"){
            maximamGap=Math.max(maximamGap,currentGap)
            currentGap=0
        } else {
            currentGap ++
        }
    }
    return maximamGap
}
console.log(solution(529));