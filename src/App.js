import React, { useEffect } from "react";
import MainRoutes from "./app/routes/MainRoutes";

export default function App() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return <MainRoutes />;
}
