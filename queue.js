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

        this.last.next = node
        this.last = node
        this.length++
        return this
    }

    dequeue() {
        if (this.length==0) {
            return undefied
        }
        
        let temp = this.first

        if (this.length==1) {
            this.first = null
            this.last = null
        }
        
        this.first = this.first.next
        temp.next = null
        
        this.length--
        return temp
    }
}

let myQueue = new Queue(20)

myQueue.enqueue(30)
myQueue.enqueue(40)

console.log(myQueue)

myQueue.dequeue()

console.log(myQueue)

