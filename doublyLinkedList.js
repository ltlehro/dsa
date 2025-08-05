class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        let node = new Node(value)
        this.head = node
        this.tail = this.head
        this.length = 1
    }

    push(value) {  
        let node = new Node(value)

        if (!this.head) {
            this.head = node
            this.tail = this.head
            this.length++
            return this
        }

        this.tail.next = node
        node.prev = this.tail
        this.tail = node
        this.length++
        return this
    }

    pop() {
        if(this.length==0) {
            return undefined
        }

        let temp = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        this.length--
        return this
    }

    unshift(value) {
        let node = new Node(value)
        if (this.length==0) {
            this.head = node
            this.tail = node
            return this
        }

        node.next = this.head
        this.head.prev = node
        this.head = node
        this.length++
        return this
    }

    shift() {
        if (this.length==0) {
            return undefined
        }
        
        let temp = this.head
        this.head = this.head.next
        this.head.prev = null
        temp.next = null
        this.length--
        return this
    }
}

const newDoublyLinkedList = new DoublyLinkedList(1)

newDoublyLinkedList.push(2)

newDoublyLinkedList.shift()

console.log(newDoublyLinkedList)