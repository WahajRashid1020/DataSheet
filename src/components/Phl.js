import axios from "axios";
import React, { useEffect, useState } from "react";
import Phf from "./Phf";

const Phl = () => {
  const [students, setStudents] = useState([]);
  const [regno, setRegno] = useState(null);
  useEffect(() => {
    axios.get("/api/students").then((students) => {
      setStudents(students.data);
    });
  }, []);
  let handleClick = (regno) => {
    setRegno(regno);
  };
  let showUpdated = (student) => {
    setStudents(students.map((s) => (s._id === student._id ? student : s)));
    setRegno(null);
  };

  let url = "#";
  return (
    <div>
      <table className="col">
        <thead>
          <tr>
            <th>Regno</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.regno}</td>
              <td>
                <a href={url} onClick={() => handleClick(student.regno)}>
                  {student.studentname}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col">
        {regno !== null && <Phf regno={regno} showUpdated={showUpdated} />}
      </div>
    </div>
  );
};

export default Phl;
