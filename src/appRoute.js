import { Routes, Route } from "react-router-dom";
import { Album, Artists, Home, Playlist, Login } from "./pages";

export const AppRoute = ({ toggleNav }) => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home toggleNav={toggleNav} />} />
            <Route path="/playlist" element={<Playlist />} />
            <Route path="/album" element={<Album />} />
            <Route path="/artists" element={<Artists />} />
        </Routes>
    )
};