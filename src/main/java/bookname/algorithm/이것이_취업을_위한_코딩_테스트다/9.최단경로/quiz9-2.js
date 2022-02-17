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
            return this.binarySearch(mid+1, end, priority)
        } else {
            return this.binarySearch(start, mid, priority)
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
let pq = new PriorityQueue()
let time = 100
while(time-- > 0) {
    pq.offer(parseInt(Math.random() * 100), parseInt(Math.random() * 100))
}
console.log(pq.toString)
console.log('poll', pq.poll())
console.log('poll', pq.poll())
console.log('poll', pq.poll())
console.log('poll', pq.poll())
console.log('poll', pq.poll())
console.log('poll', pq.poll())
