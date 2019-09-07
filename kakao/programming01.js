function solution(s) {
    
    let min;
    for(let unit=Math.floor(s.length/2) ;unit>0;unit--) {
        
        //다른게 나올때 까지 자르기
        let counts = [],idx=1,patternIdx=0;
        let pattern = s.slice(0,unit);
        counts.push(1);
        console.log('unit:',unit);              
        while((idx+1)*unit<=s.length) {
            let next = s.slice(idx*unit,(idx+1)*unit);
            console.log('vs',pattern,next);
            //패턴이 같으면
            if( pattern === next) {
                counts[patternIdx]++;
            } else {//패턴이 바뀌면
                counts.push(1);
                patternIdx++;
            }            
            idx += 1;
            pattern = next;
        }
        console.log(counts);
        const lastLength = s.length % unit;
        let length = counts.reduce((acc, cnt)=> acc + unit + (cnt>1? `${cnt}`.length:0 ) ,0) + lastLength;
        console.log('length',length);
        if(min){
            min = Math.min(length, min);
        } else {
            min = length;
        }        
    }
    // var answer = min;
    return min;
}

// console.log(solution('aabbaccc'));
console.log(solution('aaaabbbbbbbbbbbbaaaaaaccccccccc'));
// console.log(solution('ababcdcdababcdcd'));
// console.log(solution('abcabcdede'));
// console.log(solution('abcabcabcabcdededededede'));
// console.log(solution('xababcdcdababcdcd'));