const router = require("express").Router();
const Controller = require("../controllers");

router.get("/", Controller.Student.getStudents);
router.get("/:regno", Controller.Student.getStudentByRegNo);
router.patch("/update", Controller.Student.updateStudent);

module.exports = router;
