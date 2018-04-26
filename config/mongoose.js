const mongoose = require('mongoose');

exports.start = (cb) => {
    mongoose.connect('mongodb://localhost/hungry', function (err, db) {
        if (err) {
            throw err;
        }
        cb();
        console.log('connect mongodb success!');
    });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        // we're connected!
    });
};