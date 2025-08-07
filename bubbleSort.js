function bubbleSort(array) {
    for (let i = array.length -1 ; i > 0 ; i--) {
        for (let j = 0 ; j < i ; j++) {
            if (array[j] > array[j+1]) {
            let temp = array[j]
            array[j] = array[j+1]
            array[j+1] = temp
            }
        }
    }
    return array
}

const n = [5,4,7,6,9,1]
const result = bubbleSort(n)
console.log(result)