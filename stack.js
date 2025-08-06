class Node {
    constructor(value) {
        this.first = value
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const node = new Node(value)
        this.first = node
        this.length = 1
    }

    push(value) {
        const node = new Node(value)
        node.next = this.first
        this.first = node
        this.length++
        return this
    }

    pop() {
        if (this.length==0) {
            return false
        }
        let temp = this.first
        this.first = this.first.next
        temp.next = null
        this.length--
        return temp
    }
}

const myStack = new Stack(1)

myStack.push(2)
myStack.push(3)

console.log(myStack)

myStack.pop()

console.log(myStack)