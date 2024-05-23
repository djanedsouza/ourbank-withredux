import React from "react";
import empList from "./../utils/EmpData.js";

function Employee() {
  return (
    <div className="emp-list">
      {empList.map(({ name, age, salary, designation }) => (
        <div className="emp-card">
          <img src="/user.png"></img>
          <p className="emp-name">{name}</p>
          <p className="emp-designation">{designation}</p>
        </div>
      ))}
    </div>
  );
}

export default Employee;
