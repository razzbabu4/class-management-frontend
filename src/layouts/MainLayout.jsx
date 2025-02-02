import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <h1>This is navbar</h1>
            <Outlet />
            <h1>This is footer</h1>
        </div>
    );
};

export default MainLayout;