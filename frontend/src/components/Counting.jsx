import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Counting() {
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    const fetchTotalStudents = async () => {
      try {
        const url = `http://localhost:3333/ifl_system/adminCase/admin/get-all-students`;
        const response = await axios.get(url, {
          headers: {
            "auth-token": localStorage.getItem("token"),
          }
        });
        if (response.data) {
          setStudentCount(response.data.length);
        } else {
          throw new Error('Error fetching student data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchTotalStudents();
  }, []); 
  return (
    <div className="bg-slate-200 rounded p-3 flex justify-between items-center overflow-hidden shadow-md">
      <img
        className="w-20 h-20 md:w-28 md:h-28 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPFrCKQ1lCYG-z6jbyvb2CBc2jfwAStlQ7Q&s"
        alt="Donor Icon"
      />
      <div className="flex flex-col items-baseline ">
        <div className="name mb-3 font-sans text-lg font-bold">Student</div>
        <div className="number mt-3 font-extrabold self-center">  {studentCount}</div>
      </div>
    </div>
  );
}
