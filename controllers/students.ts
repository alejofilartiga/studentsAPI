import {Request, Response} from "express";
import Student, {IStudent} from "../models/student";

export const getStudents = async ({}, res:Response) => {
  const condition = {estado:true};
  const students = await Student.find(condition)
  res.json(
    {
        students
    }
  )
}

export const getStudentsByDNI = async (req:Request, res:Response) => {
    const {dni} = req.params
    const student:IStudent | null = await Student.findOne({dni:dni})
    res.json(
        {
            student
        }
    )
}

export const createStudent = async (req:Request, res:Response) => {
    const studentData : IStudent = req.body
    const student = new Student(studentData)
    await student.save()
    res.json(
        {
            msg:"Estudiante Creado",
            student
        }
    )
}

export const deleteStudent = async (req:Request, res:Response) => {
    const {dni} = req.params
    const student = await Student.findOneAndDelete({dni:dni})
    if(!student){
        res.json(
            {
                msg:"Ese estudiante no existe"
            }
        )
        return
    }
    res.json(
        {
            msg:"El estudiante ha sido borrado correctamente",
            student
        }
    )
}

export const updateStudent = async (req:Request, res:Response) => {
    const {dni} = req.params
    const {estado, camada, ...data} = req.body

    const student = await Student.findOneAndUpdate(
        {dni:dni},data,{new:true}
    )
    res.json(
        {
            msg:"Estudiante actualizado correctamente",
            student
        }
    )
}