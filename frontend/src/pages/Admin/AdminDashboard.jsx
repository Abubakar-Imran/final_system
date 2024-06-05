import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function AdminDashboard() {
  const getRequestedCases = async ({ cases: sampleCases }) => {
    try {
      const url =
        "http://localhost:3333/ifl_system/adminCase/admin/get-all-requested-cases";
      const response = await axios.get(url, {
        headers: {
          "auth-token": localStorage.getItem("token"),
        },
      });
      if (!response.data) {
        throw new Error("Error fetching requested cases");
      }
      return response.data || [];
    } catch (error) {
      console.log(error);
      return {};
    }
  };
  const { data: cases } = useQuery({
    queryKey: ["cases"],
    queryFn: getRequestedCases,
  });

  return <div>{cases && console.log(cases)}</div>;
}
