const chunk = (array, size) => {
    let chunked = []
    index = 0
    while (index < array.length) {
        const chunk = array.slice(index, index+size)
        chunked.push(chunk)
        index += size
    }
    return chunked
}

const array = [1,2,3,4,5,6,7,8,9]

console.log(chunk(array, 3))