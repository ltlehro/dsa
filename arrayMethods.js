class Array {
    constructor() {
        this.length = 0
        this.data= {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    pop() {
        const lastItem = this.data[this.length-1]
        delete this.data[this.length-1]
        this.length--
        return lastItem
    }

    shift() {
        const firstItem = this.data[0]
        for (let i=0 ; i<this.length; i++){
            this.data[i]=this.data[i+1]
            delete this.data[this.length-1]
            this.length--
        }
        return firstItem
    }

    deleteByIndex(index) {
        const deleted = this.data[index]
        for (let i = index ; i < this.length-1 ; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--
        return deleted
    }

    get(index) {
        return this.data[index]
    }
}

const newArray = new Array()
newArray.push("apple")
newArray.push("banana")

console.log(newArray)

console.log(newArray.deleteByIndex(1))

console.log(newArray)
