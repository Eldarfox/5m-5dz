import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getPostUsersSlice} from "../../reducer/getPostUsersSlice.js";
import {Link} from "react-router-dom";

const MainPage = () => {
    const {users} = useSelector((state) => state.getPostSlice)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostUsersSlice())
    }, []);
    console.log(users)
    return (
        <div style={{backgroundColor: "gray",
            width: "100%",
            height: "100vh" ,
            display: "flex",
            flexWrap: "wrap" ,
            gap:'20px',
            padding: "20px",
            boxSizing: "border-box"}}>
            {
                users?(
                    users.map((user,index) => (
                        <Link to={`/eldar/${index + 1}`} key={index} style={{
                            textDecoration: 'none',
                            color: 'inherit',
                            display: 'block',
                            width: "calc(200px + 20px)",
                            height: "calc(150px + 20px)",
                            boxSizing: 'border-box',
                        }}>
                            <div
                                 style={{
                                     width: "200px",
                                     height: "200px",
                                     backgroundColor: "white",
                                     padding: "24px",
                                     boxShadow: "10px 5px 5px black",
                                     cursor: "pointer",
                                     display: "flex",
                                     flexDirection: "column",
                                     alignItems: "center",
                                     boxSizing: "border-box",
                                     position: "relative"

                                 }}>
                                <img alt="" style={{ height: "50px"}}
                                     src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
                                />
                                <h1 style={{ fontSize: "24px"}}>{user.name}</h1>
                                <p>{user.username}</p>
                                <p>{user.email}</p>
                            </div>
                        </Link>
                    ))
                ):(
                    <span>
                        LOADING...
                    </span>
                )
            }
        </div>
    );
};

export default MainPage;