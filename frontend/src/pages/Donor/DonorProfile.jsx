import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import DonorProfileEdit from '../../components/DonorProfileEdit';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function DonorProfile() {

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
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    const { data: profile } = useQuery({
        queryKey: ['profile'],
        queryFn: getDonor,
    });

    return (
        <>
            {profile && <DonorProfileEdit profile={profile} />}
        </>
    )
}