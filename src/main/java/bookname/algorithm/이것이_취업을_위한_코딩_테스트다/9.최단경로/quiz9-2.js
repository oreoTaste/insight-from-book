// 개선된 다익스트라 (Priority Queue or Heap)
class Stack {
    #array = []
    #start = 0
    #end = 0
    get size() {
        return this.#end - this.#start
    }
    get isEmpty() {
        return this.#start == this.#end
    }
    push(item) {
        this.#array[this.#end] = item
        this.#end++
        return item
    }
    pop() {
        if(!this.isEmpty) {
            return this.#array[--this.#end]
        }
        return false
    }
}

class Queue {
    #array = []
    #start = 0
    #end = 0
    get isEmpty(){
        return this.#start == this.#end
    }
    enqueue(item) {
        this.#array[this.#end++] = item
        return item
    }
    dequeue() {
        if(this.isEmpty) {
            this.#start = this.#end = 0
            return false
        }
        let item = this.#array[this.#start]
        this.#start++
        return item
    }
}

class PriorityQueue {
    #array = []
    #start = 0
    #end = 0
    get isEmpty(){
        return this.#start == this.#end
    }
    binarySearch(start, end, priority) {
        if(start >= end || start == end) {
            return end
        }
        let mid = parseInt((start + end)/2)

        if(this.#array[mid].priority == priority) {
            return mid
        } else if(this.#array[mid].priority > priority) {
            return this.binarySearch(start, mid, priority)
        } else {
            return this.binarySearch(mid+1, end, priority)
        }
    }
    peek() {
        return this.#array[this.#start]
    }
    offer(item, priority) {
        let node = {item, priority}
        if(this.isEmpty) {
            this.#array[this.#end] = node
            this.#end++
            return node
        }
        let point = this.binarySearch(this.#start, this.#end, priority)
        this.#array.splice(point,0,node)
        this.#end++
    }

    poll() {
        if(this.isEmpty) {
            this.#start = this.#end = 0
            return false
        }
        let item = this.#array[this.#start]
        this.#start++
        return item
    }
    get toString() {
        return this.#array
    }
}

// 개선된 다익스트라
const [node, path] = '6 11'.split(' ').map(el => parseInt(el))
const start = 1
const GRAPH = '1 2 2 1 3 5 1 4 1 2 3 3 2 4 2 3 2 3 3 6 5 4 3 3 4 5 1 5 3 1 5 6 2'.split(' ').map(el => parseInt(el))

let graph = new Map()
for(let i = 0; i < path; i++) {
    let [begin, end, dist] = GRAPH.slice(3 * i, 3 * (i+1))
    graph.set(begin, [[end, dist], ...graph.get(begin) || []])
}
let visited = Array.from(Array(node + 1), (_)=>Number.MAX_SAFE_INTEGER)
let confirm = Array.from(Array(node + 1), (_)=>false)
visited[0]=0
confirm[0]=true

let pq = new PriorityQueue()
function dijkstra() {
    visited[start] = 0
    confirm[start] = true
    for([end, dist] of graph.get(start) || []) {
        visited[end] = dist
        pq.offer(end, dist)
    }

    while(!pq.isEmpty) {
        let {item, priority} = pq.poll()
        if(confirm[item] == true) {
            break;
        }
        visited[item] = priority
        confirm[item] = true
        for(let [end, dist] of graph.get(item)||[]) {
            pq.offer(end, visited[item] + dist)
        }        
    }
}
dijkstra()
console.log(visited.slice(1,))
console.log(confirm.slice(1,))

