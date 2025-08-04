const twosum = (list, target) => {
    const position = []
    for (let i = 0 ; i < list.length ; i++) {
        for (let j = i+1 ; j < list.length ; j++) {
            if (list[i] + list[j]==target)
                return [i,j]
        }
    }
    return position
}

const list = [2,7,11,15]

console.log(twosum(list, 9))
