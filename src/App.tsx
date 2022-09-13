import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HomePage } from "./pages";

const Router: React.FC<unknown> = () => {
    return (
        <div className="relative">
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </div>
    );
};

const App: React.FC<unknown> = () => {
    return (
        <BrowserRouter>
            <Router />
        </BrowserRouter>
    );
};

export default App;
