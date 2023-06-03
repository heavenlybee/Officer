import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DataEditing.css"; // Import the CSS file
import '../App.css';

function FeeReminders() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  return (
    <div className="table-layout">
      <table className="student-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Register Number</th>
            <th>Date of Birth</th>
            <th>Age</th>
            <th>Branch</th>
            <th>Semester</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Religion</th>
            <th>Caste</th>
            <th>Category</th>
            <th>Plus Two Mark Percentage</th>
            <th>Tenth Mark Percentage</th>
            <th>First Year Fees</th>
            <th>Second Year Fees</th>
            <th>Third Year Fees</th>
            <th>Fourth Year Fees</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.registerNumber}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.age}</td>
              <td>{student.branch}</td>
              <td>{student.semester}</td>
              <td>{student.address}</td>
              <td>{student.gender}</td>
              <td>{student.religion}</td>
              <td>{student.caste}</td>
              <td>{student.category}</td>
              <td>{student.plusTwoPercentage}</td>
              <td>{student.tenthPercentage}</td>
              <td>{student.firstYearFees}</td>
              <td>{student.secondYearFees}</td>
              <td>{student.thirdYearFees}</td>
              <td>{student.fourthYearFees}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FeeReminders;
