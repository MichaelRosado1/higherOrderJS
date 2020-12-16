const myArray = []

//copys array and follows a specific instruction
const copyArrayAndDoSomething = (array, instruction) => {
	let resultArray =[]
	for (let i = 0; i < array.length; i++) {
		resultArray.push(instruction(array[i]))
	}
	return resultArray;
}

//instructions: 
const addFiveToElement = (num) => num+5;

const divideBy2 = (num) => num/2;


console.log(copyArrayAndDoSomething([1,2,3,4,5], addFiveToElement))
//outputs: [6,7,8,9,10]

//to increase legibility, the function itself can be a param

console.log(copyArrayAndDoSomething([1,2,3,4,5], num => num + 100))
//outputs: [101,102,103,104,105]


//returns a function that will add param num to the first param x
function addX(x) {
	return function(num) {
		return num + x
	}
}

//function that allows inputted function to be ran only once
function once(func) {
	let count = 0;
	let result = 0;
	return function(num) {
		if (count === 0) {
			count++
			result = func(num) 
			return func(num)
		}
		return result
	}
}

let addby4 = addX(4)

let onceFunc = once(addby4)

console.log(onceFunc(4))
console.log(onceFunc(10))
console.log(onceFunc(20))


