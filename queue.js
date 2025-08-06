class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Queue {
    constructor(value) {
        const node = new Node(value)
        this.first = node
        this.last = node
        this.length = 1
    }

    enqueue(value) {
        let node = new Node(value)
        if (this.length==0) {
            this.first = node
            this.last = node
        }
    
        this.last = node
        this.first.next = this.last
        this.length++
        return this
    }
}

let myQueue = new Queue(20)

console.log(myQueue)

myQueue.enqueue(30)

console.log(myQueue)