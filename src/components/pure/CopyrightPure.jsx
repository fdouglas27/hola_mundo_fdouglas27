import React from 'react';

//Material UI Components
import { Typography, Link } from '@mui/material';

const CopyrightPure = () => {
    return (

<Typography variant="body2" color='GrayText' align='center'>
  { `Copyright © `}
  <Link color='inherit' href='https://www.google.com'>
  GOOGLE
  </Link>
  { ' ' }
  { new Date().getFullYear() }
</Typography>


    );
}

export default CopyrightPure;
