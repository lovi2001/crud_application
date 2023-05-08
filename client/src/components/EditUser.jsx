import React from "react";
import { FormControl, FormGroup, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useState, useEffect } from "react";
import {editUser, getUser} from "../service/api";
import {useNavigate, useParams} from "react-router-dom";

const Container = styled(FormGroup)`
    width: 50%;
    margin: auto;
    margin-top:50px;
`;
const Div = styled(FormControl)`
    margin-top: 30px;
`;

const EditUser = () => {
    const defaultValue ={
        name : "",
        username : "",
        email : "",
        phone : ""
    };

    const [user, setUser] = useState(defaultValue);
    
    const navigate = useNavigate();
    const {id} = useParams();
    
    useEffect(() => {
        loadUserDetails();
    }, []);
    
    const loadUserDetails = async() =>{
        const response = await getUser(id);
        setUser(response.data);
    };
    
    const onChangeValue = (e) => {
        setUser({...user , [e.target.name]:e.target.value})
    };

    const editUserDetails = async() => {
        await editUser(user, id);
        navigate("/allusers");
    }

    return(
        <>
            <Container>
                <Typography variant="h4">Edit User</Typography>
                <Div>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="name" value={user.name} />
                </Div>
                <Div>
                    <InputLabel>Username</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="username" value={user.username} />
                </Div>
                <Div>
                    <InputLabel>Email</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="email" value={user.email} />
                </Div>
                <Div>
                    <InputLabel>Phone</InputLabel>
                    <Input onChange={(e)=>onChangeValue(e)} name="phone" value={user.phone} />
                </Div>
                <Div>
                    <Button variant="contained" onClick={()=> editUserDetails()}>Edit User</Button>
                </Div>
            </Container>
        </>
    )
}

export default EditUser;