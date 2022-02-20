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
    dequeue(){
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
            this.#start = this.#end = 0
            this.#array = []
            return true
        }
        return false
    }
    binarySearch(start, end, priority) {
        let mid = parseInt((start + end)/2)
        if(start == end || start > end) {
            return end
        }
        if(this.#array[mid].priority == priority) {
            return mid
        } else if(this.#array[mid].priority > priority) {
            return this.binarySearch(start, mid, priority)
        } else {
            return this.binarySearch(mid+1, end, priority)
        }
    }
    offer(item, priority=item) {
        let ind = this.binarySearch(this.#start, this.#end, priority)
        this.#array.splice(ind, 0, {item, priority})
        this.#end++
        return item
    }
    poll() {
        if(this.isEmpty) {
            return false
        }
        return this.#array[this.#start++]
    }
    get toString() {
        return this.#array
    }
}

const [node, path] = '6 11'.split(' ').map(el => parseInt(el))
const start = 1
const GRAPH = '1 2 2 1 3 5 1 4 1 2 3 3 2 4 2 3 2 3 3 6 5 4 3 3 4 5 1 5 3 1 5 6 2'.split(' ').map(el => parseInt(el))

let graph = new Map()
let pq = new PriorityQueue()
for(let i = 0; i < path; i++) {
    let [begin, end, dist] = GRAPH.slice(i * 3, (i+1) * 3)
    graph.set(begin, [[end, dist], ...graph.get(begin) || []])
}

// 개선된 다익스트라
let visited = Array(node+1).fill(Number.MAX_SAFE_INTEGER)
let confirm = Array(node+1).fill(false)
visited[0] = 0
confirm[0] = true

function dijkstra() {
    visited[start] = 0
    confirm[start] = true

    for(let [end, dist] of graph.get(start) || []) { // start부터 시작하는 노선 찾기
        visited[end] = dist
        pq.offer([start, end], dist)
    }

    for(let i = 1; i < path; i++) {
        let {item:[begin, end], priority} = pq.poll()

        if(visited[begin] + priority < visited[end]) {
            visited[end] = visited[begin] + priority
        }

        confirm[end] = true
        for(let [end2, priority] of graph.get(end) || []) {
            pq.offer([end, end2], priority)
        }
    }

}

dijkstra()
console.log(visited.slice(1,))
console.log(confirm.slice(1,))