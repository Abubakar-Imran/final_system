import axios from 'axios';
import { React, useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Formik, Form } from "formik";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useNavigate } from 'react-router-dom';
import userAuthStore from '../store/userAuthStore/userAuthStore';
import { toast } from 'react-toastify';
import { LoginSchema } from '../utils/Schemas';
import { useMutation } from '@tanstack/react-query';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const [role, setRole] = useState('student');
  const navigate = useNavigate();
  const updateUser = userAuthStore((state) => state.setUser);
  const logout = userAuthStore((state) => state.logout);

  useEffect(() => {
    logout();
  }, []);

  const loginMutation = useMutation({  
    mutationFn: (values) => {
      const url = `http://localhost:3333/ifl_system/auth/login-${role}`;
      console.log(values);
      return axios.post(url, values);
    },
    onError: (error) => {
      console.log(error);
      toast.error("Error logging in user...");
    },
    onSuccess: (data) => {
      if (data.data.error) {
        toast.error(data.data.error, {});
        return;
      }
      toast.success(data.data.message, {});
      localStorage.setItem("access", data.data.access);

      setTimeout(() => {
        updateUser(data.data.UserType);
        navigate("/");
      }, 2000);
    },
  });

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={
          (values) => {
            loginMutation.mutate({
              email: values.email,
              password: values.password,
            });
          }
        }
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
            <ThemeProvider theme={defaultTheme}>
              <Container component="main" maxWidth="sm" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <CssBaseline />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    boxShadow: 3,
                    padding: '6%',
                    margin: '6%',
                    borderRadius: 2,
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <Box component="form" noValidate sx={{ my: 1 }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      error={errors.email && touched.email}
                      helperText={errors.email && touched.email && errors.email}
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      error={errors.password && touched.password}
                      helperText={
                        errors.password && touched.password && errors.password
                      }
                    />
                    {/* <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      style={{ display: 'flex', justifyContent: 'space-between' }}
                      id='role'
                      name='role'
                      defaultValue='student'
                      onChange={(e) => setRole(e.target.value)}
                    > 
                      <FormControlLabel value="student" control={<Radio />} label="Student" />
                      <FormControlLabel value="donor" control={<Radio />} label="Donor" />
                      <FormControlLabel value="admin" control={<Radio />} label="Admin" />
                    </RadioGroup> */}

                    <Grid container justifyContent="center" marginY={1} spacing={3}>
                      <Grid item xs={12} sm={4}>
                        <Button
                          fullWidth
                          value="student"
                          variant={
                            role === "student" ? "contained" : "outlined"
                          }
                          onClick={(e) => setRole(e.target.value)}
                        >
                          Student
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Button
                          fullWidth
                          value="donor"
                          variant={
                            role === "donor" ? "contained" : "outlined"
                          }
                          onClick={(e) => setRole(e.target.value)}
                        >
                          Donor
                        </Button>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                        <Button
                          fullWidth
                          value="admin"
                          variant={
                            role === "admin" ? "contained" : "outlined"
                          }
                          onClick={(e) => setRole(e.target.value)}
                        >
                          Admin
                        </Button>
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 2, mb: 2 }}
                      onClick={handleSubmit}
                    >
                      Sign In
                    </Button>

                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="/signup" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
                <Copyright sx={{ mt: 1, mb: 1 }} />
              </Container>
            </ThemeProvider>
          </Form>
        )}
      </Formik>
    </div>
  );
}
