import axios from "axios";
import React, { useEffect, useState } from "react";
import HkStudentFoem from "./HkStudentFoem";

const HkStudentList = () => {
  const [students, setStudents] = useState([]);
  const [regno, setRegno] = useState(null);
  useEffect(() => {
    axios
      .get("/api/students")
      .then((students) => setStudents(students), console.log(students));
  }, []);
  let handleClick = (regno) => {
    console.log(regno);
    setRegno(regno);
  };
  let showUpdated = (student) => {
    //console.log('updated', std);
    setStudents(students?.map((s) => (s._id === student._id ? student : s)));
    setRegno(null);
  };
  let url = `#`;
  return (
    <div>
      <div className="col">
        <table>
          <thead>
            <tr>
              <th>Reg #</th>
              <th>Student Name</th>
              <th>Father Name</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {students?.map((student) => (
              <tr key={student._id}>
                <td>{student.regno}</td>
                <td>
                  <a href={url} onClick={() => handleClick(student.regno)}>
                    {student.studentname}
                  </a>
                  {/* <a href={url} onClick={() => handleClick(student.regno)}>
									</a> */}
                </td>
                <td>{student.fathername}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="col">
        {regno !== null && (
          <HkStudentFoem regno={regno} showUpdated={showUpdated} />
        )}
      </div>
    </div>
  );
};

export default HkStudentList;
