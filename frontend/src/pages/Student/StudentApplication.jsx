import React, { useRef, useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Link,
  Grid,
  Paper,
} from "@mui/material";
import { Form, Formik } from "formik";
import { studentApplicationSchema } from "../../utils/Schemas";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";

export default function StudentApplication() {
    const studentApplicationMutation = useMutation({
        mutationFn: async (values) => {
            console.log(values);
            try {
                const response = await axios.post('http://localhost:3333/ifl_system/studentCase/student/request_by_student', values, {
                    headers: {
                        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYzMjExNGZhMjBiYmNhZjY4NTRkMThmIn0sImlhdCI6MTcxNDY3OTMxNX0.u4pVX4XnicYm88BvTjpdXHfrTggcQEcj2rf144Jwokw'
                    }
                });
                console.log(response)
            } catch (error) {
                throw error;
            }
        },
        onError: (error) => {
            console.log(error);
            toast.error("Error sending request...");
        },
        onSuccess: (data) => {
            if (data && data.error) {
                toast.error(data.error);
            } else {
                toast.success("Request sent successfully!");
            }
        },
    });

    return (
        <div>
            <Formik
                initialValues={{
                    title: "",
                    description: ""
                }}
                validationSchema={studentApplicationSchema}
                onSubmit={(values) => {
                    studentApplicationMutation.mutate({
                        title: values.title,
                        description: values.description,
                    });
                }}
            >
                {({
                    errors,
                    touched,
                    values,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <Form>
                        <Grid container spacing={3} className="p-5 md:p-8">
                            <Grid item xs={12}>
                                <Typography variant="h4">User Profile</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Link href="/">Home </Link>
                                <Typography variant="body">/ </Typography>
                                <Link href="/messaging"> User Profile</Link>
                            </Grid>
                            {/* <Grid item xs={12} lg={4}>

                                <Paper className="flex flex-col justify-center items-center p-1 md:p-5">
                                    <div className="m-5 rounded-full "> */}
              {/* <input
                                            type="file"
                                            accept="image/*"
                                            id="imageInput"
                                            style={{ display: 'none' }}
                                            onChange={onImageChange}
                                        /> */}
              {/* <label htmlFor="imageInput">
                                            <img src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg'} alt="" width='150px' height='150px' />
                                        </label> */}
              {/* <i className="fa-regular fa-images mx-2 my-2" ></i> 
                                         <input type="file" accept='image/*' onChange={onImageChange} /> 
                                    </div> */}
              {/* <div className='flex justify-center items-center'>
                                        <Button
                                            variant="contained"
                                            component="span"
                                            sx={{ bgcolor: '#1E3A8A', '&:hover': { bgcolor: '#1C2D61' }, mt: 2 }}
                                        >
                                            Upload
                                        </Button>
                                    </div> */}
              {/* </Paper>
                            </Grid> */}
              <Grid item xs={12} lg={8}>
                <Grid container spacing={3}>
                  <Grid item xs={12} lg={12}>
                    <Paper className="rounded-lg">
                      <Grid container>
                        <Grid item xs={12} lg={12}>
                          <form className="w-full flex flex-col justify-around px-5 lg:p-5">
                            <TextField
                              required
                              fullWidth
                              id="title"
                              label="Title"
                              name="title"
                              sx={{ mb: 3 }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.title}
                              error={errors.title && touched.title}
                              helperText={
                                errors.title && touched.title && errors.title
                              }
                              autoComplete="title"
                              autoFocus
                            />
                            <TextField
                              required
                              fullWidth
                              id="description"
                              label="Description"
                              name="description"
                              sx={{ mb: 3 }}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.description}
                              error={errors.description && touched.description}
                              helperText={
                                errors.description &&
                                touched.description &&
                                errors.description
                              }
                              autoComplete="description"
                              autoFocus
                            />
                          </form>
                        </Grid>
                      </Grid>
                      <Grid item xs={12} lg={12}>
                        <div className="w-full flex justify-center">
                          <div className="mb-3">
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={handleSubmit}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </Grid>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
}
