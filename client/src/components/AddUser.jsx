import React from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useState } from "react";
import {addUser} from "../service/api";
import {useNavigate} from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    margin-top:50px;
`;
const Div = styled(FormControl)`
    margin-top: 30px;
`;

const AddUser = () => {
    const defaultValue ={
        name : "",
        username : "",
        email : "",
        phone : ""
    };

    const [user, setUser] = useState(defaultValue);

    const navigate = useNavigate();
    
    const onChangeValue = (e) => {
        setUser({...user , [e.target.name]:e.target.value})
    };

    const addUserDetails = async() => {
        await addUser(user);
        navigate("/allusers");
    }

    return(
        <>
            <Container>
                <Typography variant="h4">Add User</Typography>
                <Div>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="name" />
                </Div>
                <Div>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="username" />
                </Div>
                <Div>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="email" />
                </Div>
                <Div>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="phone" />
                </Div>
                <Div>
                    <Button variant="contained" onClick={()=> addUserDetails()}>Add User</Button>
                </Div>
            </Container>
        </>
    )
}

export default AddUser;