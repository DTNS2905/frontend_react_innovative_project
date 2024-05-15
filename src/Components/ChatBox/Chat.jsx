import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Messenger from "./Messenger";


export default function Chat() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Messenger />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </BrowserRouter>
    );
}
