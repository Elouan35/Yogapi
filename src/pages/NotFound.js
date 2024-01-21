import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(-1);
    }, []);

    return <h1>Error 404</h1>;
};

export default NotFound;
