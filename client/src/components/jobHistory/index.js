// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import API from "../../utils/API";
// import { Col, Row, Container } from "../Grid";
// import { Link } from "react-router-dom";

// const useStyles = makeStyles({
//     table: {
//         minWidth: 650,
//     },
// });

// export default function BankTable() {
//     const classes = useStyles();

//     return (
//         <TableContainer component={Paper}>
//             <Table className={classes.table} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell>Job</TableCell>
//                         <TableCell>Room</TableCell>
//                         <TableCell >Allowance</TableCell>
//                         <TableCell >Completed?</TableCell>
//                         <TableCell >Checked?</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                 {/* {jobs.length ? ( */}
//                   {jobs.map((job) => (
//                       <TableRow key={job._id} >
//                         <TableCell component="th" scope="row">
//                           <Link to={"/jobs/" + job._id}>
//                             {job.job}
//                           </Link>
//                         </TableCell>
//                         <TableCell>
//                           <Link to={"/jobs/" + job._id}>
//                             {job.room}
//                           </Link>
//                         </TableCell>
//                         <TableCell >
//                           <Link to={"/jobs/" + job._id}>
//                             ${job.price}
//                           </Link>
//                         </TableCell>
//                         <TableCell >
//                           <Link to={"/jobs/" + job._id}>
//                             {job.completed}
//                           </Link>
//                         </TableCell>
//                         <TableCell >
//                           <Link to={"/jobs/" + job._id}>
//                             {job.checked}
//                           </Link>
//                         </TableCell>
//                       </TableRow>
//                     )
//                     // )
//                   )}
//               </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }