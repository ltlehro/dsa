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
        let temp = this.head
        let prev = this.head
        while (temp.next) {
            prev = temp
            temp = prev.next
        }

        this.tail = prev
        this.tail.next = null
        this.length--

        return temp
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.push(2)

console.log(myLinkedList)

myLinkedList.pop()

console.log(myLinkedList)
