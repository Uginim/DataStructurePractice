function solution(n, weak, dist) {
    var answer = 0;
    // var memo = [];
    // for(let i = 0;i<dist.length;i++){
    //     memo.push([]);
    //     for(let j = 0; j<dist.length;j++) {
    //         memo.push(false);
    //     }
    // }
    let coverage = weak.copyWithin(0);
    let working = dist.copyWithin(0);
    coverage.fill(false);working.fill(false);
    while( coverage.some((value)=>false)){

    }
    // console.log(coverage);
    

    return answer;
}
function getNumWeakCoverage(weak,idx,isDirLeft,distNum) {
    weak.forEach((weakPoint,idx)=>{
        
    } );
    
}

console.log(solution(12, [1, 5, 6, 10], [1, 2, 3, 4] ));
console.log(solution(12, [1, 3, 4, 9, 10], [3, 5, 7] ));