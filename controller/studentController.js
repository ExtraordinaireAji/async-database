const Student = require('../models/studentModel');

const getAllStudents = async (req, res) => {
    try {
        
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json(error)
    }
}

const createStudent = async (req, res) => {
   if(!req.body.name) {
    return res.status(400).json({message: 'Name is required'})
   }
   if(!req.body.email) {
    return res.status(400).json({message: 'Email is required'})
   }
   if(!req.body.phone) {
    return res.status(400).json({message: 'Phone is required'})
   }
   if(!req.body.password) {
    return res.status(400).json({message: 'Password is required'})
   }

   try {
    const newStudent = await Student.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    })

    res.status(201).json(newStudent)
   }
    catch (error) {
        res.status(500).json(error)
 
   }
}

const getOneStudent = async (req, res) => {
    try {
        const singleStudent = await Student.findById(req.params.id)
        res.status(200).json(singleStudent)
    } catch (error) {
        res.status(500).json(error)
    }
}

const updateStudent = async (req, res) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body,{new: true})
        if(updatedStudent) {
            return res.status(200).json(updatedStudent);
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteStudent = async (req, res) => {
    try {
        const deletedStudent = await Student.findByIdAndDelete(req.params.id)
        if(deletedStudent) {
            return res.status(200).json({message: 'student deleted successfully'})
        }
    } catch (error) {
        return res.status(500).json(error);
    }
}


module.exports = {getAllStudents, createStudent, getOneStudent, updateStudent, deleteStudent}