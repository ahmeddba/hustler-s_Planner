const Task = require('../Models/TaskSchema');

   exports.addTask = async (req, res) => {

    try {
      const { name, deadline,description } = req.body;
      const nowDate = new Date();
      const dayy = nowDate.getDay();
      const monthh = nowDate.getMonth();
      const yearr = nowDate.getFullYear();
      const isDone = false;
      const value = 8;
      // Create a formatted date string (e.g., "YYYY-MM-DD")

      const register_time = `${dayy}-${monthh}-${yearr}`;

      const newTask = new Task({ name, register_time, deadline, value,isDone ,description});
      await newTask.save();
      res.status(201).send({success : {msg:"Task created successfuly" , newTask}});
  } catch (error) {
      res.status(400).send({errors : [{msg:error.message}]});
      }
    }

 exports.allTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).send({success:{msg:"All tasks" , tasks}});

    } catch (error) {
        res.status(400).send({errors : [{msg:error.message}]});

    }

    }

    exports.getTaskById = async (req, res) => {
        const {_id} = req.params;
       try {
        const task = await Task.findById({_id:_id});
        if(!task){
            return res.status(404).send({errors : [{msg:"Task not found"}]});
        }
    res.status(200).send({success:{msg:"Task found" , task}});

       } catch (error) {
    res.status(400).send({errors : [{msg:error.message}]});
       }
    }

exports.updateById =async (req, res) => {
        const { _id } = req.params;
    try {
        const newTask = req.body;
        await Task.updateOne({_id},{$set:newTask});
        res.status(200).send({success:{msg:"Task updated successfuly" , newTask}});

    } catch (error) {
        res.status(400).send({errors : [{msg:error.message}]});
    }
}

exports.deleteTask = async (req, res) => {
        const { _id } = req.params;
    try {

        const deletedTask = await Task.findByIdAndRemove({ _id: _id });
        !deletedTask ?
        res.status(404).send({errors : [{msg:"Task not found"}]})
        :
        res.status(200).send({success : {msg:"Task deleted successfuly" , deletedTask}});
    } catch (error) {
        res.status(400).send({errors : [{msg:error.message}]});
    }
}
