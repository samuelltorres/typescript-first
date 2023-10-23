function getFirstElement<T>(data: T[]): T |  null {
  if (!data.length) {
    return null
  }
  const [firstElement] = data;

  return firstElement
}

const stringArray: string[] = ['Lucas', 'Fernanda', 'Gabriel', 'Maria'];
const numberArray: number[] = [0, 1, 2, 3];

console.log(getFirstElement<string>(stringArray))
console.log(getFirstElement<number>(numberArray))