const mongo = require('mongodb').MongoClient;

const url = 'mongodb://192.168.0.18:27017'
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    console.error(err)
    return
  }
  
})
