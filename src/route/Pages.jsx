import React from 'react';
import {Route, Routes} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage.jsx";
import UserPage from "../pages/UsersPage/UserPage.jsx";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>}/>
            <Route path='/eldar/:id' element={<UserPage/>}/>
        </Routes>
    );
};

export default Pages;