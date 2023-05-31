import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mod from "../pages/Mod";
import NewPost from "../pages/NewPost";
import RequireAuth from "../components/RequireAuth"
import Login from "../components/login"

export default function MainRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />

                <Route path="/new" element={<NewPost />} />
                <Route path="/login" element={<Login />} />
                <Route element={<RequireAuth />}>
                    <Route path="/mod" element={<Mod />} />
                </Route>
                <Route path="*" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}