function missingLetter(letters: string[]): string | undefined {
  for (let i = 0; i < letters.length - 1; i++) {
    const currentCharCode: number = letters[i].charCodeAt(0)
    const nextCharCode: number = letters[i + 1].charCodeAt(0)

    // Überprüfen, ob der nächste Buchstabe nicht direkt auf den aktuellen folgt
    if (nextCharCode !== currentCharCode + 1) {
      const missingCharCode: number = currentCharCode + 1
      const missingChar: string = String.fromCharCode(missingCharCode)
      return missingChar
    }
  }
  // Wenn kein fehlender Buchstabe gefunden wurde, wird undefined zurückgegeben
  return undefined
}
// Beispiel
console.log(missingLetter(['a', 'b', 'c', 'd', 'f']))
console.log(missingLetter(['O', 'Q', 'R', 'S']))
