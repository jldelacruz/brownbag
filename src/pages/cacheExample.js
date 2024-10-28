

import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { useGetPostsByUserIdQuery } from '../services/sample';

const CacheExample = () => {
    const [userId, setUserId] = useState(1);

    const { data: posts, isLoading, error } = useGetPostsByUserIdQuery(userId);

    const handleChange = (event) => {
        setUserId(event.target.value);
    };

    return(
        <>
            <h2>Posts</h2>
            <FormControl style={{width: '200px'}}>
                <InputLabel id="demo-simple-select-label">Select User</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userId}
                    label="Age"
                    onChange={handleChange}
                >
                <MenuItem value={1}>User 1</MenuItem>
                <MenuItem value={2}>User 2</MenuItem>
                <MenuItem value={3}>User 3</MenuItem>
                <MenuItem value={4}>User 4</MenuItem>
                <MenuItem value={5}>User 5</MenuItem>
                </Select>
            </FormControl> <br/><br/>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Body</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {posts?.map((post) => (
                        <TableRow
                        key={post.id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {post.title}
                            </TableCell>
                            <TableCell>{post.body}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

export default CacheExample;