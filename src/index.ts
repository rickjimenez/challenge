/**
 * Problem: Write a function that adds two numbers without using any arithmetic operators.
 * Solution: Using binary bytewise operators and recursion.
 *
 * @param {number} a
 * @param {number} b
 *
 * @returns {number} The sum of a & b
 */
const add = (a: number, b: number): number => (b ? add(a ^ b, (a & b) << 1) : a)

/**
 * Problem: Given 2 strings of unknown characters (but cannot be repeated) create a function
 * that returns an array of characters that are repeated in both strings the most efficient way.
 *
 * Solution: use Set. The Set object lets you store unique values of any type
 *
 * @param {string} strA
 * @param {string} strB
 *
 * @returns {string[]} An array with the duplicate characters on two strings
 */
const duplicateChar = (strA: string, strB: string): string[] => {
  const arrA = [...new Set(strA.split(''))]
  const arrB = [...new Set(strB.split(''))]
  return arrA
    .concat(arrB)
    .filter(((el) => (a: any) => el.has(a) || !el.add(a))(new Set()))
}

/**
 * Problem: Write a function that takes a string that contains a number in base X with an integer in base X.
 * The function must return the integer value of that string / base pair
 *
 * Solution: validate number and base, then convert the number with parseInt to decimal
 *
 * @param {string} number
 * @param {number} base
 *
 * @returns {number} Decimal value
 */
const convertToDecimal = (number: string, base: number) => {
  const baseDictionary = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.slice(0, base)

  const isValid = number
    .toUpperCase()
    .split('')
    .every((e: string) => baseDictionary.indexOf(e) >= 0)

  if (isValid) return Number(parseInt(number, base).toString(10))
  throw new TypeError('foo')
}

/**
 * Problem: Write a function that converts the given number to a Roman numeral: the function must receive a
 * number and return a string (the number can be between 1 and 3999) /
 */
const map = new Map([
  ['M', 1000],
  ['CM', 900],
  ['D', 500],
  ['CD', 400],
  ['C', 100],
  ['XC', 90],
  ['L', 50],
  ['XL', 40],
  ['X', 10],
  ['IX', 9],
  ['V', 5],
  ['IV', 4],
  ['I', 1],
])
/**
 *
 * Solution: create a map with the roman values the iterate to get the roman
 *
 * @param {number} num
 *
 * @returns {string} Roman value
 */
const getRoman = (num: number): any => {
  if (num === 0) return ''
  for (let [key, value] of map.entries()) {
    if (num >= value) return key + getRoman(num - value)
  }
}

/**
 * Write a function such that if an element in an MxN matrix is 0,
 * its entire row and column are set to 0 and then printed out.
 *
 * @param {number[][]} matrix
 * @return {number[][]} matrix result
 */
const setMatrix = (matrix: Array<any[]>): Array<number[]> => {
  for (let i = 0; i < matrix.length; i++) {
    const col = matrix[i]
    for (let j = 0; j < col.length; j++) {
      if (matrix[i][j] === 0) {
        let q = 0
        while (q < matrix.length) {
          if (matrix[q][j] !== 0) {
            matrix[q][j] = undefined
          }
          q++
        }
        q = 0
        while (q < col.length) {
          if (matrix[i][q] !== 0) {
            matrix[i][q] = undefined
          }
          q++
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    const col = matrix[i]
    for (let j = 0; j < col.length; j++) {
      if (matrix[i][j] === undefined) {
        matrix[i][j] = 0
      }
    }
  }
  return matrix
}

/**
 * Write a function to print all permutations of a string.
 *
 */
const permutations = (word: string, tmp: any = '', res: any[] = []) => {
  if (!word) {
    res.push(tmp)
    return
  }
  for (let i = 0; i < word.length; i++) {
    tmp += word[i]
    permutations(word.slice(0, i) + word.slice(i + 1), tmp, res)
    tmp = tmp.slice(0, tmp.length - 1)
  }
  return [...new Set(res)]
}

export {
  add,
  duplicateChar,
  convertToDecimal,
  getRoman,
  setMatrix,
  permutations,
}
