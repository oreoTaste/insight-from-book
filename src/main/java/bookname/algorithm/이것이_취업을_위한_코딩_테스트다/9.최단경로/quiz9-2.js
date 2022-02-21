// 개선된 다익스트라 (Priority Queue or Heap)
// Stack (push, pop), Queue (enqueue, dequeue), Priority Queue(offer, poll)
class Stack {
    #array = []
    #start = 0
    #end = 0

    get isEmpty() {
        if(this.#start == this.#end) {
            this.#array = []
            this.#start = this.#end = 0
            return true
        }
        return false
    }
    push(item) {
        return this.#array[this.#end++] = item
    }
    pop() {
        if(this.isEmpty) {
            return false
        }
        return this.#array[--this.#end]
    }
}

class Queue {
    #array = []
    #start = 0
    #end = 0

    get isEmpty() {
        if(this.#start == this.#end) {
            this.#array = []
            this.#start = this.#end = 0
            return true
        }
        return false
    }

    enqueue(item){
        return this.#array[this.#end++] = item
    }
    dequeue() {
        if(this.isEmpty) {
            return false
        }
        return this.#array[this.#start++]
    }
}

class PriorityQueue {
    #array = []
    #start = 0
    #end = 0

    get isEmpty() {
        if(this.#start == this.#end) {
            this.#array = []
            this.#start = this.#end = 0
            return true
        }
        return false
    }

    binarySearch(begin, end, priority) {
        if(begin >= end) {
            return end
        }
        let mid = parseInt((begin + end)/2)
        if(this.#array[mid].priority == priority) {
            return mid
        } else if(this.#array[mid].priority > priority) {
            return this.binarySearch(begin, mid, priority)
        } else {
            return this.binarySearch(mid+1, end, priority)
        }
    }
    offer(item, priority=item) {
        let pt = this.binarySearch(this.#start, this.#end, priority)
        this.#array.splice(pt, 0, {item, priority})
        this.#end++
        return item
    }
    poll() {
        if(this.isEmpty) {
            return false
        }
        return this.#array[this.#start++]
    }
}

const [node, path] = '6 11'.split(' ').map(el => parseInt(el))
const start = 1
const GRAPH = '1 2 2 1 3 5 1 4 1 2 3 3 2 4 2 3 2 3 3 6 5 4 3 3 4 5 1 5 3 1 5 6 2'.split(' ').map(el => parseInt(el))
// 개선된 다익스트라 알고리즘
let visited = Array(node + 1).fill(Number.MAX_SAFE_INTEGER)
let confirm = Array(node + 1).fill(false)
visited[0] = 0
confirm[0] = true

let graph = new Map()
let pq = new PriorityQueue()
for(let i = 0; i < path; i++) {
    let [begin, end, dist] = GRAPH.slice(i * 3, (i+1) * 3)
    graph.set(begin, [[end, dist], ...graph.get(begin) || []])
    if(begin == start) {
        pq.offer([begin, end], dist)
    }
}
function dijkstra(){
    visited[start] = 0
    confirm[start] = true

    while(!pq.isEmpty) {
        let {item:[begin, end], priority} = pq.poll()
        if(confirm[end]) {
            break
        }
        visited[end] = priority
        confirm[end] = true

        for(let [end2, dist] of graph.get(end) || []) {
            pq.offer([start, end2], dist + visited[end])
        }
    }
}
dijkstra()
console.log(visited.slice(1,))
console.log(confirm.slice(1,))