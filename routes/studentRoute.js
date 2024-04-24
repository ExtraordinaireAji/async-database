const express = require('express');
const router = express.Router();
const {getAllStudents, createStudent, getOneStudent, updateStudent, deleteStudent} = require('../controller/studentController')



router.route('/students').get(getAllStudents).post(createStudent);
router.route('/students/:id').get(getOneStudent).put(updateStudent).delete(deleteStudent)



module.exports = router