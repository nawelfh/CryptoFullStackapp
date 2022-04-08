import { Button, Link as MuiLink, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const LoginForm : React.FC = () => {
    return (
        <div className = "flex justify-center items-center flex-col h-screen gap-8">
            <h1 className="text-6xl">
                CryptoStats
            </h1>
        <div className="flex flex-col gap-2">
            <TextField label="Email" className="w-80" type="email" required/>
            <TextField label="Password" className="w-80" type="password" required/>
            <Link to="/signup" className="justify-self-start self-start mt-2">
                <div className="w-80">
                    <text>you don't have an account yet ? </text>
                    <MuiLink>SignUp</MuiLink>
                </div>
            </Link>
        </div>

        <Button variant="contained" className="w-80">
            <span className="p-1">Login</span>
        </Button>

        </div>
    );
};

export {LoginForm}