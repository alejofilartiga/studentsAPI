import {getStudents, getStudentsByDNI,createStudent,deleteStudent, updateStudent} from "../controllers/students"
import { Router } from "express";

const router = Router();
router.get("/",getStudents);
router.get("/:dni",getStudentsByDNI);
router.post("/",createStudent);
router.delete("/:dni",deleteStudent);
router.patch("/:dni",updateStudent)

export default router;