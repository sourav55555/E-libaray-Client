import { Outlet } from "react-router-dom";
import Sidenav from "../components/sidenav/Sidenav";

const Dashboard = () => {
    return (
        <div className="flex min-h-screen">
            <Sidenav/>
            <div className="ps-[260px] w-full">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;