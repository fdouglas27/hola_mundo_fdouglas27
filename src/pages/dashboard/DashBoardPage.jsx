import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CopyrightPure from '../../components/pure/CopyrightPure';

const DashBoardPage = () => {

    const history = useNavigate();

    const logout = () => {
            history('/login')
    }

    return (
        <div>
        <h1>Fede</h1>
             <Button variant="contained" onClick={ logout }>Logout</Button>
             <CopyrightPure></CopyrightPure>
        </div>
    );
}

export default DashBoardPage;
