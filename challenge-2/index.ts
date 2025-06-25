function maskify(input: string): string {
  return input
    .split('')
    .map((char, index) => {
      // Maskiere alle Zeichen außer den letzten 4
      return index < input.length - 4 ? '#' : char
    })
    .join('')
}

// Tests
console.log(maskify('4556364607935616')) // "############5616"
console.log(maskify('64607935616')) // "#######5616"
console.log(maskify('1')) // "1"
console.log(maskify('')) // ""
