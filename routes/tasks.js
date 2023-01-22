const express = require('express');
const router = express.Router();

const { 
    getAllTasks,
    createTask, 
    getTask, 
    updateTask, 
    deleteTask 
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);

// we use patch here instead of put because if we use put and pass some updated values, then it is expected that the other values will be overwritten and with patch, we can only update a few parts of the ool values
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;