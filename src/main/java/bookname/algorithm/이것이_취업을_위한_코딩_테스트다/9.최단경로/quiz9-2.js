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
            this.#start = this.#end = 0
            this.#array = []
            return true
        }
        return false
    }

    enqueue(item) {
        return this.#array[this.#end++] = item
    }
    dequeue() {
        if(this.isEmpty) {
            return false
        }
        return this.#array[this.#start++]
    }
}

