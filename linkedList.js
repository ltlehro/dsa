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
            this.tail.next = null
            this.length++
        }

        this.tail.next = node
        this.tail = node
        this.length++
    }

    pop() {

        if (!this.head) {
            return undefined
        }

        let temp = this.head
        let prev = this.head
        while (temp.next) {
            prev = temp
            temp = prev.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--

        if (this.length == 0) {
            this.head = null
            this.tail = null
        }

        return temp
    }

    unshift(value) {
        let node = new Node(value)
        if (!this.head) {
            this.head = node
            this.tail = node
        }

        node.next = this.head
        this.head = node
        this.length++
        return this
    }

    shift() {
        if (!this.head) {
            return undefined
        }

        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--

        if (this.length == 0 ) {
            this.tail = null
        }
        
        return temp
    }

    getfirst() {
        if (!this.head) {
            return undefined
        }
        return this.head
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.push(2)

console.log(myLinkedList)

myLinkedList.unshift(3)

console.log(myLinkedList)

myLinkedList.shift()

console.log(myLinkedList)

console.log(myLinkedList.shift())
