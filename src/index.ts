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
 * Write a function that takes a string that contains a number in base X with an integer in base X.
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
 * Write a function that converts the given number to a Roman numeral: the function must receive a
 * number and return a string (the number can be between 1 and 3999)
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

console.log(getRoman(47))

export { add, duplicateChar, convertToDecimal, getRoman }
