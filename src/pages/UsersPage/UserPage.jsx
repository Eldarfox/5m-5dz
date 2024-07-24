import React, {useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getPostUser} from "../../reducer/getPostUsersSlice.js";
import classes from "./UserPage.module.css";

const UserPage = () => {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => state.getPostSlice)
    const {id} = useParams()
    useEffect(() => {
        dispatch(getPostUser(id))
    }, []);
    console.log(user)
    if (!user) {
        return <div>Loading...</div>;
    }
    return (
        <div className={classes.UserAll}>
            <Link to={`/`} style={{textDecoration:"none" ,display:"flex" ,width:"60px",height: "30px"}}><button>home</button></Link>
            <div className={classes.UserDat}>
                <h1>{user.name}</h1>
                <p>Username: {user.username}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Company: {user.company.name}</p>
                <p>Address: {user.address.street}, {user.address.city}</p>
            </div>
        </div>
    );
};

export default UserPage;