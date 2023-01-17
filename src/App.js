import React, { useState } from "react";
import './App.css';
import { Login } from "./Pages/Home/Login";
import { Register } from "./Pages/Home/Register";

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return ( <
        div className = "App" > {
            currentForm === "login" ? < Login onFormSwitch = { toggleForm }
            /> : <Register onFormSwitch={toggleForm} / >
        } <
        /div>
    );
}

export default App;