import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

export default function RouterImplementation() {
    return (
        <div>
            <Navigation />
            <Outlet />
        </div>
    )
}