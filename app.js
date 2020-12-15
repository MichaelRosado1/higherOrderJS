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

