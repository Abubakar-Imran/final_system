import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

//  this is sample data for testing purpose ------------------------------------------------
const sampleCases = [
    {
        title: 'Case 1',
        description: 'This is the description of Case 1.',
    },
    {
        title: 'Case 2',
        description: 'This is the description of Case 2.',
    },
    {
        title: 'Case 3',
        description: 'This is the description of Case 3.',
    },
];

const createData = (id, title, description, payment) => {
    return { id, title, description, payment };
};

const rows = [
    createData('1', 'Case 1', 'Description for Case 1', '4'),
    createData('2', 'Case 2', 'Description for Case 2', '5'),
    createData('3', 'Case 3', 'Description for Case 3', '6'),
];

// --------------------------------------------------------------------------------------------------------------

const getDonor = async () => {
    try {
        const url = 'http://localhost:3333/ifl_system/auth/donor/get-profile';
        const response = await axios.get(url, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        });

        if (!response.data) {
            throw new Error('Error fetching donor');
        }
        return response.data || {}; // Return an empty object if data is undefined
    } catch (error) {
        console.log(error);
        return {}; // Return an empty object on error
    }
}

const getSponsoredCases = async () => {
    try {
        const url = 'http://localhost:3333/ifl_system/donor/sponsored-cases';
        const response = await axios.get(url, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        });

        if (!response.data) {
            throw new Error('Error fetching sponsored cases');
        }
        return response.data || []; // Return an empty array if data is undefined
    } catch (error) {
        console.log(error);
        return []; // Return an empty array on error
    }
}

const getApprovedCases = async ({ cases: sampleCases }) => {
    try {
        const url = 'http://localhost:3333/ifl_system/donor/approved-cases';
        const response = await axios.get(url, {
            headers: {
                "auth-token": localStorage.getItem('token')
            }
        });

        if (!response.data) {
            throw new Error('Error fetching approved cases');
        }
        return response.data || []; // Return an empty array if data is undefined
    } catch (error) {
        console.log(error);
        return []; // Return an empty array on error
    }
}


function DonorDashboard() {
    const [cases, setCases] = React.useState(sampleCases);

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: getDonor,
    });

    // const { data: sponsoredCases } = useQuery({
    //     queryKey: ['sponsoredCases'],
    //     queryFn: getSponsoredCases,
    // });

    return (
        <ThemeProvider theme={createTheme()}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        flexGrow: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        backgroundColor: '#f0f0f0', // Light gray background color
                                    }}
                                >
                                    <Typography variant="h4" gutterBottom>
                                        Profile
                                    </Typography>
                                    {profile && (
                                        <>
                                            <Typography variant="body1" gutterBottom>
                                                First Name: {profile.first_name}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                Last Name: {profile.last_name}
                                            </Typography>
                                            <Typography variant="body1" gutterBottom>
                                                Email: {profile.email}
                                            </Typography>
                                        </>
                                    )}
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={8}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,

                                    }}
                                >
                                    Sponsored Cases
                                    <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>Id </TableCell>
                                                    <TableCell align="right">Title</TableCell>
                                                    <TableCell align="right">Description</TableCell>
                                                    <TableCell align="right">Payment</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {rows.map((row) => (
                                                    <TableRow
                                                        key={row.id}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row">
                                                            {row.id}
                                                        </TableCell>
                                                        <TableCell align="right">{row.title}</TableCell>
                                                        <TableCell align="right">{row.description}</TableCell>
                                                        <TableCell align="right">{row.payment}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            </Grid>


                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    <Typography variant="h5" gutterBottom>
                                        Requested Cases
                                    </Typography>
                                    {cases.map((caseItem, index) => (
                                        <Card key={index}>
                                            <CardContent>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={8}>
                                                        <Typography variant="h6" component="div">
                                                            {caseItem.title}
                                                        </Typography>
                                                        <Typography variant="body1" color="text.secondary">
                                                            {caseItem.description}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={12} md={4}>
                                                        <Typography variant="h6" component="div">
                                                            Payment
                                                        </Typography>
                                                        <Button variant="contained" color="primary">Donate</Button>
                                                        </Grid>
                                                </Grid>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </Paper>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" color="text.secondary" align="center">
                            <Link color="inherit" href="https://mui.com/">
                                Your Website
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default DonorDashboard;


