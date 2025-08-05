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

    reverse() {
        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let next = temp
        let prev = null

        for (let i = 0 ; i < this.length ; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
}

const newLinkedList = new LinkedList(10)

newLinkedList.push(20)
newLinkedList.push(30)
newLinkedList.push(40)

console.log(newLinkedList.reverse())