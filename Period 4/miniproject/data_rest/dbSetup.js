const mongoose = require('mongoose');
const dbURI = "mongodb://mlc_user:developer@ds111279.mlab.com:11279/local_library";

mongoose.connect(dbURI);

mongoose.connection.on('connected', function() {
    console.log('Mongoose default connection open to ' + dbURI);
});

mongoose.connection.on('error', function(err) {
    console.log('Mongoose default connection error: ' + err);
});
