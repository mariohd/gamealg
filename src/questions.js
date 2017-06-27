import operations from './utils/operations';

const questionsStage1 = [{
	operand_1: 6,
	operand_2: 2,
	result: 8,
	answer: true,
	options: [true, false],
	operation: operations.plus
},{
	operand_1: 23,
	operand_2: 13,
	result: 37,
	answer: false,
	options: [true, false],
	operation: operations.plus
},{
	operand_1: 74,
	operand_2: 52,
	result: 21,
	answer: false,
	options: [true, false],
	operation: operations.minus
},{
	operand_1: 47,
	operand_2: 24,
	result: 23,
	answer: true,
	options: [true, false],
	operation: operations.minus
},{
	operand_1: 3,
	operand_2: 7,
	result: 21,
	answer: true,
	options: [true, false],
	operation: operations.multiply
}];

const questionsStage2 = [{
	operand_1: 18,
	operand_2: 2,
	result: '?',
	answer: 20,
	options: [32, 16, 20, 19],
	operation: operations.plus
},{
	operand_1: 32,
	operand_2: 9,
	result: '?',
	answer: 41,
	options: [40, 41, 47, 51],
	operation: operations.plus
},{
	operand_1: 74,
	operand_2: 52,
	result: '?',
	answer: 22,
	options: [15, 25, 22, 29],
	operation: operations.minus
},{
	operand_1: 47,
	operand_2: 24,
	result: '?',
	answer: 23,
	options: [23, 19, 27, 21],
	operation: operations.minus
},{
	operand_1: 77,
	operand_2: 212,
	result: '?',
	answer: 289,
	options: [279, 294, 289, 303],
	operation: operations.plus
}];

const questionsStage3 = [{
	operand_1: 20,
	operand_2: 2,
	result: '?',
	answer: 22,
	options: [22, 10, 20, 19],
	operation: operations.plus
},{
	operand_1: 32,
	operand_2: 9,
	result: 41,
	answer: true,
	options: [true, false],
	operation: operations.plus
},{
	operand_1: 20,
	operand_2: 25,
	result: '?',
	answer: -5,
	options: [0, -5, 45, -45],
	operation: operations.minus
},{
	operand_1: 10,
	operand_2: 78,
	result: -68,
	answer: true,
	options: [true, false],
	operation: operations.minus
},{
	operand_1: 22,
	operand_2: 13,
	result: '?',
	answer: 286,
	options: [279, 274, 286, 296],
	operation: operations.multiply
}];

const stages = [questionsStage1, questionsStage2, questionsStage3];

export default stages;