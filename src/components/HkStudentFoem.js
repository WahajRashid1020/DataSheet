import axios from "axios";
import React, { useEffect, useState } from "react";

const HkStudentFoem = (props) => {
  const [student, setStudent] = useState({});
  const { regno } = props;
  useEffect(() => {
    axios.get(`/api/students/${regno}`).then((student) => {
      console.log(student.data);
      setStudent(student.data);
    });
  }, [regno]);
  let handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  let handleSave = () => {
    axios.patch(`/api/students/update`, student).then((res) => {
      if (res.status === 200) {
        console.log(res.data);
        props.showUpdated(res.data);
      }
    });
  };

  return (
    <div>
      <table>
        <tbody>
          {Object.keys(student).map((key, i) => (
            <tr key={i}>
              <th style={{ textAlign: "right" }}>{key}:</th>
              <td>
                {key !== "_id" ? (
                  <input
                    type="text"
                    name={key}
                    value={student[key]}
                    onChange={handleChange}
                  />
                ) : (
                  student[key]
                )}
              </td>
            </tr>
          ))}
          <tr>
            <th></th>
            <td>
              <button onClick={handleSave}>Save</button>
            </td>
          </tr>
        </tbody>
      </table>
      <pre>{JSON.stringify({ student, props }, null, 2)}</pre>
    </div>
  );
};

export default HkStudentFoem;
