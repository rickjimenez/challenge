import { add, convertToDecimal, duplicateChar, getRoman } from './index'

describe('Sum two numbers without using any arithmetic operators', () => {
  test('Case 1 + 2', () => {
    expect(add(1, 2)).toBe(3)
  })
  test('Case 357 + 143', () => {
    expect(add(357, 143)).toBe(500)
  })
  test('Case 1678 + 9395', () => {
    expect(add(1678, 9395)).toBe(11073)
  })
})

describe('Get duplicate characters', () => {
  test("Case 'abc', 'abc'", () => {
    expect(duplicateChar('abc', 'abc')).toStrictEqual(['a', 'b', 'c'])
  })
  test("Case 'asdfgh', 'qwtferoh'", () => {
    expect(duplicateChar('asdfgh', 'qwtferoh')).toStrictEqual(['f', 'h'])
  })
  test("Case 'aaabccc', 'xxxbzzz'", () => {
    expect(duplicateChar('aaabccc', 'xxxbzzz')).toStrictEqual(['b'])
  })
})

describe('Convert a number with his base to decimal', () => {
  test("Case Binary '11001100', 2", () => {
    expect(convertToDecimal('11001100', 2)).toBe(204)
  })
  test("Case Octal '765432', 8", () => {
    expect(convertToDecimal('765432', 8)).toBe(256794)
  })
  test("Case Hexadecimal 'A4FC9', 8", () => {
    expect(convertToDecimal('A4FC9', 16)).toBe(675785)
  })
  test("Case 'V4F58H', 32", () => {
    expect(convertToDecimal('V4F58H', 32)).toBe(1044878609)
  })
  test("Case 'ZWX45C', 36", () => {
    expect(convertToDecimal('ZWX45C', 36)).toBe(2171608896)
  })
})

describe('Get Roman numbers', () => {
  test('Case 47', () => {
    expect(getRoman(47)).toBe('XLVII')
  })
  test('Case 512', () => {
    expect(getRoman(512)).toBe('DXII')
  })
  test('Case 3999', () => {
    expect(getRoman(3999)).toBe('MMMCMXCIX')
  })
})
