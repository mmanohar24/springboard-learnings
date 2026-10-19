import { Route, Routes, Navigate } from "react-router-dom";
import SignUp from "./pages/Signup";
import Admin from "./pages/Admin";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/signup" replace />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
}

export default Router;