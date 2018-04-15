var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27019/CourseRating');

module.exports = {
    mongoose: mongoose
}