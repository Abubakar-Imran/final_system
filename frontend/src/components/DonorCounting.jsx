import React, { useEffect, useState } from "react";
import axios from "axios";

export default function DonorCounting() {
  const [donorCount, setDonorCount] = useState(0);

  useEffect(() => {
    const fetchDonorDetails = async () => {
      try {
        const url = `http://localhost:3333/ifl_system/adminCase/admin/get-all-donors/`;
        const response = await axios.get(url, {
          headers: {
            "auth-token": localStorage.getItem("token"),
          }
        });
        console.log(response)
        if (response.data) {
          setDonorCount(response.data.length);
        } else {
          throw new Error('Error fetching donor data');
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchDonorDetails();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-slate-200 rounded p-3 flex justify-between items-center overflow-hidden shadow-md">
      <img
        className="w-20 h-20 md:w-28 md:h-28 rounded-full"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkit_tzoCTq4oI9WfM2tvtpiArtg4fc5jbag&s"
        alt="Donor Icon"
      />
      <div className="flex flex-col items-baseline ">
        <div className="name mb-3 font-sans text-lg font-bold">Sponsored Donor</div>
        <div className="number mt-3 font-extrabold self-center">  {donorCount}</div>
      </div>
    </div>
  );
}
