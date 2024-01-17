import React, { useEffect, useState } from "react";
import DepartmentCard from "./DepartmentCard";
import DepartmentForm from "./DepartmentForm";
const Department = () => {
  const [allDepartment, setAllDepartment] = useState([]);
  const [postMode, setPostMode] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getDepartments = async () => {
      const url = "http://127.0.0.1:8000/api/v1/department";
      fetch(url, { method: "GET", signal })
        .then((res) => res.json())
        .then((res) => {
          setAllDepartment((prev) => res.data);
        })
        .catch((error) => {
          console.log("error 💥", error);
        });
    };

    getDepartments();
  }, []);

  const Departments = allDepartment.map((dep) => {
    const props = { key: dep.id, ...dep };
    return <DepartmentCard {...props} />;
  });

  return (
    <div className="card-wrapper">
      <div className="header">
        <h1>Department</h1>
        <button
          onClick={() => setPostMode((prev) => !prev)}
          className={`btn ${postMode ? "active" : ""}`}
        >
          Add
        </button>
      </div>
      {postMode ? <DepartmentForm /> : Departments}
    </div>
  );
};
export default Department;
