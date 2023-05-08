import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Button,
  styled
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width:90%;
  margin:auto;
  margin-top:50px
`;

const StyledTableCell = styled(TableCell)`
  background-color:black;
  color:white;
  font-size:20px
`;
const StyledTableCells = styled(TableCell)`
  font-size:20px
`;

const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const deleteUserDetail =async(id) => {
    await deleteUser(id);
    getAllUsers();
  };

  const getAllUsers = async () => {
    let response = await getUsers();
    setUsers(response.data);
  };

  return (
    <>
      <StyledTable> 
        <TableHead >
          <TableRow >
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>USERNAME</StyledTableCell>
            <StyledTableCell>EMAIL</StyledTableCell>
            <StyledTableCell>PHONE</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => {
            return (
              <TableRow key={user._id}>
                <StyledTableCells>{user._id}</StyledTableCells>
                <StyledTableCells>{user.name}</StyledTableCells>
                <StyledTableCells>{user.username}</StyledTableCells>
                <StyledTableCells>{user.email}</StyledTableCells>
                <StyledTableCells>{user.phone}</StyledTableCells>
                <StyledTableCells>
                  <Button variant="contained" style={{marginRight:10, backgroundColor:"green"}} component={Link} to={`/edituser/${user._id}`}>Edit</Button>
                  <Button variant="contained" style={{backgroundColor:"red"}} onClick={()=>{deleteUserDetail(user._id)}}>Delete</Button>
                </StyledTableCells>

              </TableRow>
            );
          })}
        </TableBody>
      </StyledTable>
    </>
  );
};

export default AllUser;
