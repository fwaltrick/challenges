interface WordOrder {
  word: string
  order: number
}

function wordsOrder(words: string): string {
  return words
    .split(' ')
    .map((word: string): WordOrder => {
      const match = word.match(/\d/)
      return {
        word,
        order: Number(match![0]),
      }
    })
    .sort((a: WordOrder, b: WordOrder) => a.order - b.order)
    .map((item: WordOrder) => item.word)
    .join(' ')
}

console.log(wordsOrder('is2 Thi1s T4est 3a'))
