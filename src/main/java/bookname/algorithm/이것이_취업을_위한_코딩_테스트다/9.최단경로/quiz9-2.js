// 개선된 다익스트라 (Priority Queue or Heap)
// Stack (push, pop), Queue (enqueue, dequeue), Priority Queue(offer, poll)

class Stack {
    #array = []
    #start = 0
    #end = 0
    get isEmpty() {
        if(this.#start == this.#end) {
            this.#start = this.#end = 0
            this.#array = []
            return true
        }
        return false
    }
    push(item) {
        this.#array[this.#end++] = item
        return item
    }
    pop() {
        if(this.isEmpty) {
            return null
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
            this.#start = this.#end = 0
            this.#array = []
            return true
        }
        return false
    }

    enqueue(item) {
        this.#array[this.#end++] = item
        return item
    }
    dequeue() {
        if(this.isEmpty) {
            return null
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
            this.#start = this.#end = 0
            this.#array = []
            return true
        }
        return false
    }

    binarySearch(start, end, priority) {
        if(start >= end) {
            return end
        }
        let mid = parseInt((start + end) / 2)
        if(this.#array[mid].priority == priority) {
            return mid
        }
        if(this.#array[mid].priority < priority) {
            return this.binarySearch(mid+1, end, priority)
        }
        return this.binarySearch(start, mid, priority)
    }

    offer(item, priority=0) {
        let node = {item, priority}
        let index = this.binarySearch(this.#start, this.#end, priority)
        this.#array.splice(index, 0, node)
        this.#end++
        return node
    }
    poll() {
        if(this.isEmpty) {
            return null
        }
        return this.#array[this.#start++]
    }
}

const [node, path] = '6 11'.split(' ').map(el => parseInt(el))
const start = 1
const GRAPH = '1 2 2 1 3 5 1 4 1 2 3 3 2 4 2 3 2 3 3 6 5 4 3 3 4 5 1 5 3 1 5 6 2'.split(' ').map(el => parseInt(el))

let graph = new Map()
for(let i = 0; i < path; i++) {
    let [start, end, dist] = GRAPH.slice(i * 3, (i+1) * 3)
    graph.set(start, [[end, dist], ...graph.get(start) || []])
}

let short = Array(node+1).fill(Number.MAX_SAFE_INTEGER)
let visited = Array(node+1).fill(false)
visited[0] = true

function dijkstra() {
    let pq = new PriorityQueue()
    for (let [end, dist] of graph.get(start)) {
        short[end] = dist
        pq.offer(end, dist)
    }

    short[start] = 0
    visited[start] = true

    while(!pq.isEmpty) {
        // 최소값 꺼내기
        let {item, priority} = pq.poll()
        visited[item] = true

        // 최소값에서 연동되는 다음 값 찾아서 넣기
        for (let [end, dist] of graph.get(item)||[]) {
            if(short[end] > short[item] + dist) {
                short[end] = short[item] + dist
                pq.offer(end, dist)
            }
        }
    }
}
dijkstra()
console.log(short.slice(1,))
