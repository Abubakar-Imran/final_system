// import React from "react";
// import LineGraph from "../components/LineGraph"
// import BarGraph from "../components/BarGraph";
// import PieGraph from "../components/PieGraph";
// import TopBox from "../components/TopBox";

// export default function DashBoard() {
//   return (
//     <div className="relative w-full md:h-screen md:p-8 p-1">
//       <div className='text-3xl '>Admin Dashboard</div>
//       <div className='my-3'>
//         <a href="/">Home</a>
//         <span className='text-amber-600 hover:f'>
//           <span className='mx-3'>/</span>
//           <a href="/messaging">Admin</a>
//         </span>
//       </div>
//       <div class="grid md:grid-row-7">
//         <div className="m-3 grid md:grid-cols-4 grid-row-4 gap-4">
//           <TopBox />
//           <TopBox />
//           <TopBox />
//           <TopBox />
//         </div>
//         <div className="m-3 row-span-3 grid md:grid-cols-4 gap-4">
//           <div className="md:col-span-2 "><BarGraph /></div>
//           <div><PieGraph/></div>
//           <div><PieGraph/></div>
//         </div>
//         <div className="m-3 row-span-3 grid md:grid-cols-3 grid-row-3 gap-4">
//           <div><LineGraph /></div>
//           <div><LineGraph /></div>
//           <div><LineGraph /></div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { Link } from "react-router-dom";
import { Typography, Grid, Box } from "@mui/material";

import DonorCounting from "../components/DonorCounting";
import CompletedCases from "../components/CompletedCases";
import Counting from "../components/Counting";
import MainContainer from "../components/MainContainer";

// import StudentDetailsCounting from "../components/studentDetailsCounting";


export default function Dashboard() {
  return (
    <Box className="relative w-full md:p-8 p-5">
      <Typography variant="h4">Admin Dashboard</Typography>
      <Box my={2}>
        <Link to="/">Home</Link>
        <span className="text-amber-600 hover:f">
          <span className="mx-3">/</span>
          <Link to="/messaging">Admin</Link>
        </span>
      </Box>
      <Grid container spacing={2}>
        <Grid item md={4} xs={12}>
          <DonorCounting />
        </Grid>
        <Grid item md={4} xs={12}>
          <Counting />
        </Grid>
        <Grid item md={4} xs={12}>
          <CompletedCases />
        </Grid>
      </Grid>
      <Grid item md ={12} xs={12} style={{marginTop: "3rem"}} >
        <MainContainer/>
      </Grid>
    </Box>
  );
}
