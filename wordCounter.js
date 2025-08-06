const wordCounter = (text) => {
    const loweredText = text.toLowerCase()
    const wordMap = {}

    const words = loweredText.split(/\s+/)

    for (const word of words) {
        if (word in wordMap) {
            wordMap[word]++
        } else {
            wordMap[word] = 1
        }
    }
    return wordMap
}

console.log(wordCounter("hello my name is zayn zayn"))