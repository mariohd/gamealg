import Stage from './stage';
import Parse from './parseConnection';

let clearStages = () => {
	var parseStage = new Stage();
	var query = new Parse.Query(parseStage);
	query.find({
		success: function(stages) {
			stages.forEach(stage => stage.destroy({}));
		},
		error: function(object, error) {
			console.error(object, error);
		}
	});
};

clearStages();

stages = [
	{"_id":"ByXIcw16yw","questions":[{"statement":"Responda sobre a afirmação abaixo","operand_1":6,"operand_2":2,"result":8,"answer":true,"options":[true,false],"operation":{"symbol":"+"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":23,"operand_2":13,"result":37,"answer":false,"options":[true,false],"operation":{"symbol":"+"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":74,"operand_2":52,"result":21,"answer":false,"options":[true,false],"operation":{"symbol":"-"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":47,"operand_2":24,"result":23,"answer":true,"options":[true,false],"operation":{"symbol":"-"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":3,"operand_2":7,"result":21,"answer":true,"options":[true,false],"operation":{"symbol":"x"}}],"intro":"\u003cdiv class='stage-header'\u003e\u003cspan class='level'\u003eFase 1\u003c/span\u003e \u003cbr\u003e ARITMÉTICA \u003c/div\u003e","level":1,"type":"QA","_created_at":{"$date":"2017-07-07T19:37:32.160Z"},"_updated_at":{"$date":"2017-07-07T19:37:32.160Z"}},
	{"_id":"yHg8TvUxDg","questions":[{"statement":"Responda sobre a afirmação abaixo","operand_1":18,"operand_2":2,"result":"?","answer":20,"options":[32,16,20,19],"operation":{"symbol":"+"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":32,"operand_2":9,"result":"?","answer":41,"options":[40,41,47,51],"operation":{"symbol":"+"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":74,"operand_2":52,"result":"?","answer":22,"options":[15,25,22,29],"operation":{"symbol":"-"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":47,"operand_2":24,"result":"?","answer":23,"options":[23,19,27,21],"operation":{"symbol":"-"}},{"statement":"Responda sobre a afirmação abaixo","operand_1":77,"operand_2":212,"result":"?","answer":289,"options":[279,294,289,303],"operation":{"symbol":"+"}}],"intro":"\u003cdiv class='stage-header'\u003e\u003cspan class='level'\u003eFase 2\u003c/span\u003e \u003cbr\u003e VALOR DESCONHECIDO \u003c/div\u003e","level":2,"type":"QA","_created_at":{"$date":"2017-07-07T19:37:32.283Z"},"_updated_at":{"$date":"2017-07-07T19:37:32.283Z"}},
	{"_id":"zmwaMVcCyX","questions":[{"statement":"Qual o valor de X?","operand_1":20,"operand_2":2,"result":"?","answer":22,"options":[22,10,20,19],"operation":{"symbol":"+"}},{"statement":"Qual o valor de X?","operand_1":32,"operand_2":9,"result":41,"answer":true,"options":[true,false],"operation":{"symbol":"+"}},{"statement":"Qual o valor de X?","operand_1":20,"operand_2":25,"result":"?","answer":-5,"options":[0,-5,45,-45],"operation":{"symbol":"-"}},{"statement":"Qual o valor de X?","operand_1":10,"operand_2":78,"result":-68,"answer":true,"options":[true,false],"operation":{"symbol":"-"}},{"statement":"Qual o valor de X?","operand_1":22,"operand_2":13,"result":"?","answer":286,"options":[279,274,286,296],"operation":{"symbol":"x"}}],"intro":"\u003cdiv class='stage-header'\u003e\u003cspan class='level'\u003eFase 3\u003c/span\u003e \u003cbr\u003e INCÓGNITA \u003c/div\u003e","level":3,"type":"QA","_created_at":{"$date":"2017-07-07T19:37:32.295Z"},"_updated_at":{"$date":"2017-07-07T19:37:32.295Z"}},
	{"_id":{"$oid":"59b8614bf36d284a7e7c2c21"},"questions":[{"statement":"Para atingir o equilíbrio, quanto vale X?","right":["500g"],"left":["X","250g"],"options":["150g","200g","250g","300g"],"answer":"250g"},{"statement":"Para atingir o equilíbrio, quanto vale X?","right":["15g","5g","5g"],"left":["X","X","5g"],"options":["9g","10g","12g","15g"],"answer":"10g"},{"statement":"Para atingir o equilíbrio, quanto vale X?","right":["1kg","1kg","100g"],"left":["X","X","X"],"options":["600g","650g","700g","750g"],"answer":"700g"},{"statement":"Para atingir o equilíbrio, quanto vale X?","right":["1kg","500g"],"left":["X","250g"],"options":["750g","1kg","1kg 250g","1kg 500g"],"answer":"1kg 250g"},{"statement":"Para atingir o equilíbrio, quanto vale X?","right":["400kg","500g"],"left":["X","X"],"options":["500g","400g","540g","450g"],"answer":"450g"}],"type":"BALANCE","intro":"\u003cdiv class='stage-header'\u003e\u003cspan class='level'\u003eFase 4\u003c/span\u003e \u003cbr\u003e EQUILÍBRIO \u003c/div\u003e","level":4}
];

stages.forEach(stage => {
	var stageConnection = new Stage();

	stageConnection.save(stage, {
		success: function(savedStage) {
			alert(`New object created with objectId: ${savedStage.id}`);
		},
		error: function(gameScore, error) {
			alert(`Failed to create new object, with error code: ${error.message}`);
		}
	});
});