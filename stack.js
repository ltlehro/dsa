class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.length = 0
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

     min() {
        if (this.length === 0) {
            return undefined;
        }

        let min = this.first.value;
        let temp = this.first.next;

        while (temp) {
            if (temp.value < min) {
                min = temp.value;
            }
            temp = temp.next;
        }
        return min;
    }
}

const myStack = new Stack()

myStack.push(37)
myStack.push(24)
myStack.push(100)

console.log(myStack)

console.log(myStack.min())