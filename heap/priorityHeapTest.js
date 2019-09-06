
function PriHeap(){
    this.heap = ['head'];
    this.delete = () => {
        if(this.isEmpty())
            return null;
        let result=this.heap[1], cur = 1;
        const last = this.heap.length-2;
        this.swapHeapItems(cur,last+1);        
        let childIdx = this.getLeftChildIndex(cur);
        
        // console.log('delete from heap:',this.heap.slice(cur,this.heap.length))
        while (  ( childIdx<= last)  ) {
            if(childIdx < last && this.compareInHeap(childIdx,childIdx+1) > 0){
                childIdx+=1;
            } 
            if(this.compareInHeap(cur,childIdx)<0)
                break;
            this.swapHeapItems(cur,childIdx);
            cur = childIdx;            
            childIdx = this.getLeftChildIndex(cur);
            // console.log('changed:',this.heap.slice(1,this.heap.length))
        }
        
        return this.heap.pop();
    };
    this.compare = (a,b) => {
        let result;
        try {
            result =  a[1]-b[1];
        } catch (e) {
            console.log('a,b',a,b);
            // console.log(e);
        }
        if( result !== 0) {
            return result;
        }else {
            return (a[0] - b[0]<0)? -1 : 1;
        }
    }
    this.compareInHeap = (aIdx,bIdx) => {
        // console.log('compared indexes:',aIdx,bIdx);
        return this.compare(this.heap[aIdx],this.heap[bIdx]);
    }
    this.swapHeapItems = (aIdx,bIdx) => {
        let temp = this.heap[aIdx];
        this.heap[aIdx] = this.heap[bIdx];
        this.heap[bIdx] = temp;
        
    }
    this.getParentIndex = (idx) => {
        return Math.floor(idx/2);
    }
    this.getLeftChildIndex = (idx) => {
        return idx*2;
    }
    this.insert = (item) => {
        this.heap.push(item);
        let curIdx = this.heap.length-1;
        let parentIdx = this.getParentIndex(curIdx);
        if(this.heap.length > 2 ) {
            while (curIdx>1 && this.compareInHeap(parentIdx,curIdx)>0){
                this.swapHeapItems(parentIdx,curIdx);
                curIdx = parentIdx;
                parentIdx = this.getParentIndex(curIdx); 
            }
        }        
    };
    this.isEmpty = () => {
        return this.heap.length<=1;
    };
    this.toString = () => {
        console.log(this.heap.slice(1,this.heap.length));
    }
}

let priHeap =  new PriHeap();
priHeap.insert([0,1]);priHeap.toString();
priHeap.insert([1,55]);priHeap.toString();
priHeap.insert([2,3]);priHeap.toString();
priHeap.insert([4,12]);priHeap.toString();
priHeap.insert([5,5]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([6,3]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([7,7]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([8,1]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([10,1]);priHeap.toString();
priHeap.insert([11,5]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([12,5]);priHeap.toString();
priHeap.insert([13,5]);priHeap.toString();
priHeap.insert([14,5]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([15,5]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([16,5]);priHeap.toString();
priHeap.insert([17,4]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.insert([18,2]);priHeap.toString();
priHeap.insert([19,5]);priHeap.toString();
priHeap.delete();priHeap.toString();
priHeap.delete();priHeap.toString();