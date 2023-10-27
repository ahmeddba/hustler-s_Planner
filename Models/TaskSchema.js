const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
         },
    register_time:Date,
    deadline:Date,
    value: Number
});


module.exports = Task = mongoose.model('task', TaskSchema);
 