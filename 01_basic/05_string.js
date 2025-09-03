const name = "Hitesh"
const repo = 50

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('hitesh-hc-com');

console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))

const newString = gameName.substring(0, 4)
console.log(newString)

const anotherString = gameName.slice(-2, 4)
console.log("anotherString : "+ anotherString)

const newStringOne = "   hitesh   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://google.com/rama%20rao";

console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))
console.log(gameName.split('-'))

