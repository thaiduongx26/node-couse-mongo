const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todoapp',(err, db) => {
	if(err){
		return console.log('Unable to connect MongoDB Server');
	}
	console.log('Connected to MongoDB Server');

	// db.collection('Todos').insertOne({
	// 	text: 'Something',
	// 	completed : false
	// },(err, result) => {
	// 	if(err){
	// 		console.log('Unable to insert todo ', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined , 2));
	// });
	var id = new ObjectID('59bd3dee97dff51354664b0d');
	db.collection('Users').find({_id : id}).toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
		// console.log(docs[0]._id);
	}, (err) => {
		console.log('Unable to fetch users : ', err);
	});
	//db.close();
});