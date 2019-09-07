//유일하게 완전히 품...
function solution(key, lock) {
    
    let fourTypeKeys = [key,rotate(key,rotate90Degree),rotate(key,rotate180Degree),rotate(key,rotate270Degree)];
    return fourTypeKeys.some((key)=>{
        return checkFitness(key,lock);
    });
}
function makeArea(top,bottom,right,left) {
    return {
        leftTop:{
            x:left,
            y:top,
        },
        rightBottom:{
            x:right,
            y:bottom,
        }
    }
}

//회전
function rotate( arr2D,rotatePer90){
    const maxRows = arr2D.length;
    const maxCols = arr2D[0].length;
    const resultArr = [];

    for(let row=0;row<maxRows; row++){
        resultArr.push([]);
        for(let col=0;col<maxCols; col++) {
            resultArr[row].push(rotatePer90(row,col,arr2D));
        }
    }
    return resultArr;
}

/* 회전 함수*/
function rotate90Degree(row,col,origin) {
    // const maxRows = origin.length;
    const maxCols = origin[0].length;
    return origin[maxCols-col-1][row];
}
function rotate180Degree(row,col,origin) {
    const maxRows = origin.length;
    const maxCols = origin[0].length;
    return origin[maxRows-row-1][maxCols-col-1];
}
function rotate270Degree(row,col,origin) {
    const maxRows = origin.length;
    // const maxCols = origin[0].length;
    return origin[col][maxRows-row-1];
}
function rotate360Degree(row,col,origin) {        
    return origin[row][col];
}

// 자물쇠 적합 판단을 위해 "영역을 계산"
function getMappingArea(m,n) {
    const max = (m-1)+n;
    let map = [];
    for(let i=0;i<max;i++){
        map.push([]);
        for(let j=0;j<max;j++){
            let leftLimit = (m-1>j)?m-1-j:0;
            let top = (m-1>i)?m-1-i:0;
            let rightLimit = (max-m<=j)?max-j:m;
            let bottom = (max-m<=i)?max-i:m;
            let targetX = (j<m-1)? 0:j-m+1;
            let targetY = (i<m-1)? 0:i-m+1;
            let coveredArea = {
                keyArea:{
                    leftTop:[leftLimit,top],
                    rightBottom:[rightLimit,bottom],
                },
                targetCoord:[
                    targetX,
                    targetY,
                ]
            };
            map[i].push(coveredArea);
        }
    }
    return map;
}

//맞는지 확인
function checkFitness(key,lock) {
    const mappingGuide = getMappingArea(key.length,lock.length);
    

    return mappingGuide.some((row)=>{
        return row.some((metaData)=>{
            let fitness;
            let lockArea = copy2dArr(lock);
            lockArea = addToArray(lockArea,key,metaData.targetCoord,metaData.keyArea);
            fitness = isMatched(lockArea);
            return fitness;
        });
    });

}

function addToArray(dest,source,targetCoord,sourceArea){
    const baseX = sourceArea.leftTop[0];
    const baseY = sourceArea.leftTop[1];
    const lengthX = sourceArea.rightBottom[0]-baseX;
    const lengthY = sourceArea.rightBottom[1]-baseY;
    
    const destX = targetCoord[0];
    const destY = targetCoord[1];
    // console.log(baseX,baseY,lengthX,lengthY,destX,destY);
    for(let y=0; y < lengthY; y++) {
        for(let x=0; x < lengthX ; x++) {
            dest[destY+y][destX+x]+=source[y+baseY][x+baseX];
            // console.log('x,y',x,y,baseX,baseY,lengthX,lengthY,destX,destY);
        }
    }
    return dest;
}



function isMatched(lockArea){
    return lockArea.every((row)=>{
        return row.every((value)=> {
            return value===1;
        })
    })
}

function copy2dArr(arr) {
    const result =[];
    for(let i=0;i<arr.length;i++){
        result.push([]);
        for(let j=0;j<arr[i].length;j++){
            result[i].push(arr[i][j]);
        }
    }
    return result;
}

function print2DArray(arr){
    for(let i =0 ;i<arr.length;i++){
        console.log(arr[i].join(' '));        
    }     
}
function display(arr){
    console.log(arr.length);
    const leftTops = arr.map((row)=> (
        row.map((item)=>(item.keyArea.leftTop.join(',')))
    ));   
    const rightBottoms = arr.map((row)=> (
        row.map((item)=>(item.keyArea.rightBottom.join(',')))
    ));   
    const targetCoord = arr.map((row)=> (
        row.map((item)=>(item.targetCoord.join(',')))
    ));
    console.log('leftTops');
    print2DArray(leftTops);
    console.log('-----');
    console.log('rightBottom');
    print2DArray(rightBottoms);
    console.log('-----');
    console.log('targetCoord');
    print2DArray(targetCoord);
}
display(getMappingArea(3,5));
// console.log(isMatched([[1,1],[1,2]]));
// console.log(isMatched([[1,1],[0,1]]));
// console.log(copy2dArr([[1,1],[1,1]]));
// console.log(getMappingArea(3,5));

// console.log(rotate([[0, 0, 0], [1, 0, 0], [0, 1, 1]],rotate270Degree));

// console.log(solution ([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));
// console.log(solution ([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[0, 0, 1], [1, 1, 0], [0, 0, 1]]));
console.dir(addToArray(
    [[0,0,0],[0,0,0],[0,0,0]],
    [[0,0,1],[0,0,1],[0,0,1]],
    [0,0],
    {
        leftTop:[1,1],
        rightBottom:[3,3],
    })
,1);