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
	answer: 20,
	options: [32, 16, 20, 19],
	operation: operations.plus
},{
	operand_1: 32,
	operand_2: 9,
	answer: 41,
	options: [40, 41, 47, 51],
	operation: operations.plus
},{
	operand_1: 74,
	operand_2: 52,
	answer: 22,
	options: [15, 25, 22, 29],
	operation: operations.minus
},{
	operand_1: 47,
	operand_2: 24,
	answer: 23,
	options: [23, 19, 27, 21],
	operation: operations.minus
},{
	operand_1: 77,
	operand_2: 212,
	answer: 289,
	options: [279, 294, 289, 303],
	operation: operations.plus
}];

const stages = [questionsStage1, questionsStage2];

export default stages;