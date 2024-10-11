import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';  
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  ////////////////////// YOUR CODE HERE //////////////////////


const BlogList = () => { 

    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);

    const getBlogs=  async () => {
        /*
        get the blogs from the backend  
        */     

    }
    return(
        /* 
        1. create a button to load the blogs
        2. map over the blogs and display them
        */
        
        <div>
            Add your code to /frontend/src/components/BlogList.js
        </div>
                

    );
};

////////////////////// YOUR CODE HERE //////////////////////

export default BlogList;