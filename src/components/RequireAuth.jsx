import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

export default function RequireAuth() {
    const { authenticate } = useContext(AuthContext);

    return authenticate ? (
        <Outlet />
    ) : (
        <Navigate to="/login" />
    );
}