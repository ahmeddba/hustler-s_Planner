const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
         },
    register_time:String,
    deadline:String,
    value: Number,
    isDone: Boolean,
    description:String
    // category :String
});

module.exports = Task = mongoose.model('task', TaskSchema);
