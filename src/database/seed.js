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

let stagesLoaded = ['https://quarkbackend.com/getfile/mariohd/stageone',
					'https://quarkbackend.com/getfile/mariohd/stagetwo',
					'https://quarkbackend.com/getfile/mariohd/stagethree'].map(stageURL => fetch(stageURL));

Promise.all(stagesLoaded).then(responses => {
	let parsedResponses = responses.map(r => r.json());

	Promise.all(parsedResponses).then(stages => {
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
	});
});