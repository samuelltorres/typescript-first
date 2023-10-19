// Tipos primitivos
let age: number = 21;
let fullName: string = 'Kurt Cobain';
let isAlive: boolean = false;

// Inferencia de Tipos
let animal = 'Cat';
let quantity = 23

// Parametros e retornos de funçoes
function sum(a: number, b: number): number {
  const result = a +b 
  return result
}


// Função com retorno opcional
function greeting(fullName: string): string | void {
  if (fullName) {
    return `Hello, ${fullName}!`
    }
}


// Função com parametros opcionais
function stringOrNumberSize(value: string | number): number {
 if(typeof value === 'string') {
  return value.length
 }
  return value
}

console.log(stringOrNumberSize('abcc'))
console.log(stringOrNumberSize(22))
