class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }

        let temp = this.root

        while (true) {
            if (newNode.value === temp.value) {
                return undefined
            }

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right
            }
        }
    }

    includes(value) {
        if (!this.root) {
            return false
        }

        let temp = this.root

        while (temp) {
        if (value < temp.value) {
            temp = temp.left
        } else if (value > temp.value) {
            temp = temp.right
        } else if (value == temp.value) {
            return true
        }
        }
        return false
    }
}

const tree = new BST()

tree.insert(1)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(5)

console.log(tree)

const result = tree.includes(4)

console.log(result)