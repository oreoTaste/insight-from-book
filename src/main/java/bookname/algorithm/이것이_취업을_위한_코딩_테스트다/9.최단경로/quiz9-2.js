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
            return this.binarySearch(mid+1, end, priority)
        } else {
            return this.binarySearch(start, mid, priority)
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
}

let pq = new PriorityQueue()
pq.offer(2)
pq.offer(5)
pq.offer(3)
pq.offer(1)
pq.offer(4)
console.log(pq.poll())
console.log(pq.poll())
console.log(pq.poll())
console.log(pq.poll())
console.log(pq.poll())
console.log(pq.poll())
