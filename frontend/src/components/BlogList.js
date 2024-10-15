import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import React, { useState } from 'react';

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
  const [blogs, setBlogs] = useState([]);
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('userId');
    console.log(userId);

    const getBlogs=  async () => {
        /*
        get the blogs from the backend
        // */
      
        // async function getBlogs() => {
              const response = await fetch(`http://localhost:8000/filter?userId=${userId}`);
              const data = await response.json();
              setBlogs(data);
              console.log(data);
        
    
    }
    return(
        /*
        1. create a button to load the blogs
        2. map over the blogs and display them
        */
        
        <div>
            <Box sx={{marginBottom: 2}}>
            <Button variant="contained"
            onClick={getBlogs}
            margin="normal"
            padding="normal"
            >Load Blogs</Button>
            {/* margin */}
            </Box>

            <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Title</StyledTableCell>
                  <StyledTableCell align="center">Body</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogs.map((blog) => (
                  <TableRow
                  hover
                  sx={{
                      "&:hover":{
                      cursor: "pointer",
                      backgroundColor: "#f5f5f5",
                      width: "100%"
                      }
                  }}
                  // onClick={() => window.location.href=`/filter?userId=${author._id}`}
                    key={blog._id}

                    >
                    <TableCell align="center">{blog.title}</TableCell>
                    <TableCell align="center">{blog.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
                

    );
};

////////////////////// YOUR CODE HERE //////////////////////

export default BlogList;