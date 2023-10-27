const express = require('express');
const router = express.Router();
const Task = require('../Models/TaskSchema');
const { addTask , allTasks , getTaskById , updateById} = require('../Controllers/taskController');

//create and save a recor of task
router.post('/addTask', addTask);

// get all tasks
router.get('/allTasks',allTasks);

// get a task by id
router.get('/task/:_id', getTaskById);

// update a task by id
router.put('/task/:_id',updateById );

//delete task by id
router.delete('/task/:_id', async (req, res) => {
    const { _id } = req.params;
    try {

        const deletedTask = await Task.findByIdAndRemove({ _id: _id });
        !deletedTask ?
        res.status(404).send({errors : [{msg:"Task not found"}]})
        :
        res.status(200).send({success:{msg:"Task deleted successfuly" , deletedTask}});
    } catch (error) {
res.status(400).send({errors : [{msg:error.message}]});
    }
});

module.exports = router;
