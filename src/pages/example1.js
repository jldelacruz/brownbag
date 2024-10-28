import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

import { useGetPostsQuery } from '../services/sample';

const Example1 = () => {
    const { data: posts, isLoading, error } = useGetPostsQuery();

    return(
        <>
            <h2>Posts</h2>
            {/* <Button variant="contained">Load Posts</Button> */}
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

export default Example1;