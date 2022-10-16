import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {Error} from "./route/Error";
import {Login} from "./route/Login";
import {NewPass} from "./route/NewPass";
import {Profile} from "./route/Profile";
import {RecoveryPass} from "./route/RecoveryPass";
import {Registration} from "./route/Registration";
import {NavBar} from "./route/NavBar";
import SuperButton from "./features/SuperButton";
import SuperCheckbox from "./features/SuperCheckbox";
import SuperInputText from "./features/SuperInputText";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <SuperButton/>
            <SuperCheckbox/>
            <SuperInputText/>
            <Routes>
                <Route path='/error' element={<Error/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/newpass' element={<NewPass/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/recoverypass' element={<RecoveryPass/>}/>
                <Route path='/registration' element={<Registration/>}/>
            </Routes>
        </div>
    );
}

export default App;
