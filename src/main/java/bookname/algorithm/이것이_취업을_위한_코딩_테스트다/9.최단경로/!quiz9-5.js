// 전보
// dijkstra
let [N, M, C] = '3 2 1'.split(' ').map(el => parseInt(el))
let GRAPH = '1 2 4 1 3 2'.split(' ').map(el => parseInt(el))

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

    binarySearch(start, end, dist) {
        if(start >= end) {
            return end
        }
        let mid = parseInt((start + end) / 2)
        if(this.#array[mid].dist == dist) {
            return mid
        }
        if(this.#array[mid].dist < dist) {
            return this.binarySearch(mid+1, end, dist)
        }
        return this.binarySearch(start, mid, dist)
    }
    offer(item, dist) {
        let node = {item, dist}
        let index = this.isEmpty ? 0 : this.binarySearch(this.#start, this.#end, dist)
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

let short = Array(N).fill(Number.MAX_SAFE_INTEGER)
let visited = Array(N).fill(false)

let graph = new Map()
let pq = new PriorityQueue()
for(let i = 0; i < M; i++) {
    let [start, end, dist] = GRAPH.slice(i * 3, (i + 1) * 3)
    if(start == C) {
        short[end - 1] = dist
        pq.offer(end-1, dist)
    }
    graph.set(start-1, [[end-1, dist], ...graph.get(start-1) || []])
}

function dijkstra(){
    // 1. 자기자신은 0이다
    short[C-1] = 0
    visited[C-1] = true

    // 2. pq에서 하나씩 꺼내자
    while(!pq.isEmpty) {
        let {item, dist} = pq.poll()
        visited[item] = true
        
        for([end, dist] of graph.get(item) || []) {
            if(!visited[end]) {
                short[end] = Math.min(short[end], short[item] + dist)
                pq.offer(end, short[end])
            }            
        }
    }
}
dijkstra()
let answer = short.filter(el => el > 0)
console.log(answer.length, answer.reduce((prev, cur) => Math.max(prev, cur)))
