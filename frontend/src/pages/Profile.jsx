// import React from 'react'
// import LineGraph from '../components/LineGraph'
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function Profile() {
//     const saveProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.remove('hidden');
//         saveDiv.classList.add('hidden');
//         toast.success("Profile Updated Successfully!", {});
//     };
//     const cancelProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.remove('hidden');
//         saveDiv.classList.add('hidden');
//     }
//     const editProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.add('hidden');
//         saveDiv.classList.remove('hidden');
//     }
//     return (
//         <div className='relative w-full p-8'>
//             <div className='text-3xl '>User Profile</div>
//             <div className='my-3'>
//                 <a href="/">Home</a>
//                 <span className='text-amber-600 hover:f'>
//                     <span className='mx-3'>/</span>
//                     <a href="/messaging">User Profile</a>
//                 </span>
//             </div>
//             <div className="flex flex-wrap lg:flex-nowrap gap-3 mt-7">
//                 <div className='w-full lg:w-1/3'>
//                     <div className='flex flex-col justify-center items-center rounded-lg bg-slate-200'>
//                         <div className=' mt-5 rounded-full overflow-hidden'>
//                             <img src="data:image/jpeg;base64,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" alt="" />
//                         </div>
//                         <form action="" className='w-full flex flex-col justify-around px-5 lg:p-5'>
//                             <label className='flex flex-col sm:flex-row justify-between my-2'>Name:<input type="text" size={25} /></label>
//                             <label className='flex flex-col sm:flex-row justify-between my-2'>Gender:<input type="text" size={25} /></label>
//                             <label className='flex flex-col sm:flex-row justify-between my-2'>Date of Birth:<input type="date" size={25} /></label>
//                             <label className='flex flex-col sm:flex-row justify-between my-2'>Religion:<input type="text" size={25} /></label>
//                             <label className='flex flex-col sm:flex-row justify-between my-2'>Email:<input type="email" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>Joining Date:<input type="date" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>Occup:<input type="text" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>Office:<input type="text" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>CNIC:<input type="text" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>Address:<input type="text" size={25} /></label>
//                             <label className='flex flex-col md:flex-row justify-between my-2'>Phone:<input type="text" size={25} /></label>
//                         </form>
//                         <div className='mb-5 hidden' id='saveDiv'>
//                             <button type="button" id='save-button' onClick={() => saveProfile()} className="font-medium rounded text-sm px-7 py-2.5 me-7 focus:outline-none bg-yellow-500 hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 text-white">Save</button>
//                             <button type="button" id='cancel-button' onClick={() => { cancelProfile() }} className="font-medium rounded text-sm px-8 py-2.5 me-2 focus:outline-none bg-blue-950 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 text-white">Cancel</button>
//                         </div>
//                         <div className="mb-5" id='editDiv'>
//                             <button type="button" onClick={() => editProfile()} className="font-medium rounded text-sm px-10 py-2.5 focus:outline-none bg-blue-950 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 text-white">Edit</button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-full lg:w-2/3 flex flex-col gap-3'>
//                     <div className='h-2/3 lg:h-1/2 flex flex-col lg:flex-row gap-3'>
//                         <div className='w-full lg:w-1/2 lg:h-full h-1/2 bg-slate-200 rounded-lg'></div>
//                         <div className='w-full lg:w-1/2 lg:h-full h-1/2 bg-slate-200 rounded-lg'></div>
//                     </div>
//                     <div className='h-1/3 lg:h-1/2 bg-slate-200 rounded-lg lg:overflow-hidden'>
//                         <LineGraph />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// import {React, useState} from 'react';
// import LineGraph from '../components/LineGraph';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button, TextField } from '@mui/material';

// export default function Profile() {
//     const [selectedImage, setSelectedImage] = useState(null);

//     const handleImageChange = (event) => {
//         const file = event.target.files[0];
//         setSelectedImage(file);
//     };

//     const saveProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.remove('hidden');
//         saveDiv.classList.add('hidden');
//         toast.success('Profile Updated Successfully!', {});
//     };
//     const cancelProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.remove('hidden');
//         saveDiv.classList.add('hidden');
//     };
//     const editProfile = () => {
//         const editBtn = document.getElementById('editDiv');
//         const saveDiv = document.getElementById('saveDiv');
//         editBtn.classList.add('hidden');
//         saveDiv.classList.remove('hidden');
//     };
//     return (
//         <div className="relative w-full p-8">
//             <div className="text-3xl">User Profile</div>
//             <div className="my-3">
//                 <a href="/">Home</a>
//                 <span className="text-amber-600 hover:f">
//                     <span className="mx-3">/</span>
//                     <a href="/messaging">User Profile</a>
//                 </span>
//             </div>
//             <div className="flex flex-wrap lg:flex-nowrap gap-3 mt-7">
//                 <div className="w-full lg:w-1/3">
//                     <div className="flex flex-col justify-center items-center rounded-lg bg-slate-200">
//                         {/* <div className="mt-5 rounded-full overflow-hidden">
//                             <img src="data:image/jpeg;base64,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" alt="" />
//                         </div> */}
//                         <div className="m-5 rounded-full overflow-hidden">
//                             <input
//                                 type="file"
//                                 accept="image/*"
//                                 id="imageInput"
//                                 onChange={handleImageChange}
//                                 style={{ display: 'none'}}
//                             />
//                             <label htmlFor="imageInput">
//                                 <img src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" width='150px' height='150px'/>
//                             </label>
//                         </div>
//                         <form className="w-full flex flex-col justify-around px-5 lg:p-5">
//                             <TextField label="Name" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Gender" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Date of Birth" type="date" variant="outlined" size="small" sx={{ mb: 2 }}/>
//                             <TextField label="Religion" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Email" type="email" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Joining Date" type="date" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Occupation" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Office" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="CNIC" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Address" variant="outlined" size="small" sx={{ mb: 2 }} />
//                             <TextField label="Phone No" variant="outlined" size="small" sx={{ mb: 2 }} />
//                         </form>
//                         <div className="mb-3 hidden" id="saveDiv">
//                             <Button
//                                 variant="contained"
//                                 onClick={() => saveProfile()}
//                                 className="me-7"
//                                 sx={{ bgcolor: '#FFD700', '&:hover': { bgcolor: '#FFC300' }, mb: 2, mx:2 }}
//                             >
//                                 Save
//                             </Button>
//                             <Button
//                                 variant="contained"
//                                 onClick={() => cancelProfile()}
//                                 sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' }, mb: 2, mx:2 }}
//                             >
//                                 Cancel
//                             </Button>
//                         </div>
//                         <div className="mb-3" id="editDiv">
//                             <Button
//                                 variant="contained"
//                                 onClick={() => editProfile()}
//                                 sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' }, mb: 2 }}
//                             >
//                                 Edit
//                             </Button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full lg:w-2/3 flex flex-col gap-3">
//                     <div className="h-2/3 lg:h-1/2 flex flex-col lg:flex-row gap-3">
//                         <div className="w-full lg:w-1/2 lg:h-full h-1/2 bg-slate-200 rounded-lg"></div>
//                         <div className="w-full lg:w-1/2 lg:h-full h-1/2 bg-slate-200 rounded-lg"></div>
//                     </div>
//                     <div className="h-1/3 lg:h-1/2 bg-slate-200 rounded-lg lg:overflow-hidden">
//                         <LineGraph />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

import React, { useState } from 'react';
import LineGraph from '../components/LineGraph';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, Typography, Link, Grid, Paper } from '@mui/material';
import DonorTotalpayment from '../pages/Donor/DonorTotalpayment';

const donorIntro = {
    name: "Muhammad Ishaq",
    Gender: "Male",
    DOB: "14/12/1200",
    Religion: "Islam",
    Email: "ishaq10866@gmail.com",
    Occupation: "Businessman",
    Office: "nust",
    cnic: "2342342342",
    address: "hostel nust",
    phone: "234234"
};

export default function Profile() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isEditable, setIsEditable] = useState(false);
    const [formData, setFormData] = useState(donorIntro);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setSelectedImage(file);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveProfile = () => {
        setIsEditable(false);
        toast.success('Profile Updated Successfully!', {});
    };

    const cancelEdit = () => {
        setFormData(donorIntro);
        setIsEditable(false);
    };

    const editProfile = () => {
        setIsEditable(true);
    };

    return (
        <Grid container spacing={3} className="p-5 md:p-8">
            <Grid item xs={12}>
                <Typography variant="h4">User Profile</Typography>
            </Grid>
            <Grid item xs={12}>
                <Link href="/">Home </Link>
                <Typography variant="body">/ </Typography>
                <Link href="/messaging"> User Profile</Link>
            </Grid>
            <Grid item xs={12} lg={4}>
                <Paper className="flex flex-col justify-center items-center p-1 md:p-5">
                    <div className="m-5 rounded-full overflow-hidden">
                        <input
                            type="file"
                            accept="image/*"
                            id="imageInput"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                        />
                        <label htmlFor="imageInput">
                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" width='150px' height='150px' />
                        </label>
                    </div>
                    <form className="w-full flex flex-col justify-around px-5 lg:p-5">
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Gender"
                            name="Gender"
                            value={formData.Gender}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Date of Birth"
                            name="DOB"
                            type="date"
                            value={formData.DOB}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputLabelProps={{ shrink: true }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Religion"
                            name="Religion"
                            value={formData.Religion}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Email"
                            name="Email"
                            type="email"
                            value={formData.Email}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Occupation"
                            name="Occupation"
                            value={formData.Occupation}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Office"
                            name="Office"
                            value={formData.Office}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="CNIC"
                            name="cnic"
                            value={formData.cnic}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                        <TextField
                            label="Phone No"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            variant="outlined"
                            size="small"
                            sx={{ mb: 2 }}
                            InputProps={{ readOnly: !isEditable }}
                        />
                    </form>
                    {isEditable ? (
                        <div className="mb-3" id='saveDiv'>
                            <Button
                                variant="contained"
                                onClick={saveProfile}
                                sx={{ bgcolor: '#FFD700', '&:hover': { bgcolor: '#FFC300' }, mr: 2 }}
                            >
                                Save
                            </Button>
                            <Button
                                variant="contained"
                                onClick={cancelEdit}
                                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' } }}
                            >
                                Cancel
                            </Button>
                        </div>
                    ) : (
                        <div className="mb-3" id='editDiv'>
                            <Button
                                variant="contained"
                                onClick={editProfile}
                                sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' } }}
                            >
                                Edit
                            </Button>
                        </div>
                    )}
                </Paper>
            </Grid>
            <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                    <Grid item xs={12} lg={6}>
                        <Paper className="rounded-lg">
                            <DonorTotalpayment />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Paper className="rounded-lg">
                            <DonorTotalpayment />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className="rounded-lg overflow-hidden">
                            <LineGraph />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <ToastContainer />
        </Grid>
    );
}
