import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CompletedCases() {
  const [completedCasesCount, setCompletedCasesCount] = useState(0);

  useEffect(() => {
    const fetchCompletedCases = async () => {
      try {
        const url = `http://localhost:3333/ifl_system/adminCase/admin/get-all-completed-cases`;
        const response = await axios.get(url, {
          headers: {
            "auth-token": localStorage.getItem("token")
          }
        });
        if (response.data) {
          setCompletedCasesCount(response.data.length);
        } else {
          throw new Error('Error fetching completed cases data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchCompletedCases();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-slate-200 rounded p-3 flex justify-between items-center overflow-hidden shadow-md">
      <img
        className="w-20 h-20 md:w-28 md:h-28 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFyryQ57vKASc5kjwCaCLXR0awtXKQGj0Cog&s"
        alt="Completed Cases Icon"
      />
      <div className="flex flex-col items-baseline ">
        <div className="name mb-3 font-sans text-lg font-bold">Completed Cases</div>
        <div className="number mt-3 font-extrabold self-center">{completedCasesCount}</div>
      </div>
    </div>
  );
}
