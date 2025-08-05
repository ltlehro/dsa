class Node {
    constructor(value) {
        this.head = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        let node = new Node(value)

        if(!this.head) {
            this.head = node
            this.tail = node
            this.head.next = null
            this.length++
        }

        this.head.next = node
        this.tail = node
        this.length++
    }

    pop(value) {
        
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.push(2)

console.log(myLinkedList)
