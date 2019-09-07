function solution(p) {
    
    var answer = getCorrectBracketString(p);
    return answer;
}

function getCorrectBracketString(w){
    if(w.length===0 || isCorrect(w)) //1. 빈문자열 반환
        return w;
    //문자열 나누기
    let u,v,end;
    for(end=2;end<=w.length;end+=2) { 
        u = w.slice(0,end);
        if(isBalance(u))
            break;
    }
    v = w.slice(end,w.length);    
    console.log('w,u,v',w,u,v);
    
    if(isCorrect(u)){//문자열 u가 올바른 괄호 문자열이면!
        return u+getCorrectBracketString(v);
    } else { //4단계 올바른 문자열이 아니면!
        let vResult = getCorrectBracketString(v);
        return '('+vResult+')' + reverseStr(u.slice(1,u.length-1)) ;        
    }
}
function reverseStr(str){
    let characters=[];
    for(let i=str.length-1 ; i >= 0 ; i--){
        characters.push(str.charAt(i));
    }
    return characters.join('');
}

function isBalance(p) {
    let balance=0;
    for(let i=0;i< p.length;i++){
        if('('===p.charAt(i) ){
            balance+=1;
        } else {
            balance-=1;
        }
    }
    return balance===0;
}
function isCorrect(p){
    const brackets = [];
    for(let i=0;i< p.length;i++){
        if('('===p.charAt(i) ){
            brackets.push('(');
        } else {
            if(brackets.length===0)
                return false;
            else 
                brackets.pop();
        }
    }
    return brackets.length===0;
}


// console.log(isBalance('(()))('));
// console.log(isBalance('(()))()'));
// console.log(isBalance('(()))())'));
// console.log(isBalance('(())'));
// console.log('-----');
// console.log(isCorrect('(()))('));
// console.log(isCorrect('(()))()'));
// console.log(isCorrect('(()))())'));
// console.log(isCorrect('(())'));
// console.log(isCorrect('(())()'));
// console.log('123456789l'.slice(1,9));
// console.log(reverseStr('123456789l'));

// console.log(solution("(()())()"));
console.log(solution(")("));
// console.log(solution(")()()))))((((()("));