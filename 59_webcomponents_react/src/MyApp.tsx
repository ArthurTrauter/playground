import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { Home } from "./Home";
import { Detail } from "./Detail";
import {
    Avatar,
    ShellBar,
    ShellBarItem
} from "@ui5/webcomponents-react";
import addIcon from "@ui5/webcomponents-icons/dist/add.js";

export function MyApp() {
    const navigate = useNavigate();
    const handleLogoClick = () => {
        navigate("./");
    }

    return (
        <div>
            <ShellBar 
                primaryTitle="My App"
                logo={<img src="./images/reactLogo.png" />}
                profile={
                    <Avatar>
                        <img src="./images/profilePictureExample.png" />
                    </Avatar>
                }
                onLogoClick={handleLogoClick}
            >
                <ShellBarItem icon={addIcon} text="Add" />
            </ShellBar>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/detail" element={<Detail />} />
                <Route path="*" element={<Navigate replace to="/home" />} />
            </Routes>
       </div>
    );
}