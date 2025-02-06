import { Link, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {
    const { logout } = useAuth();
    return (
        <div className="flex min-h-screen bg-gray-100 mx-20">
            {/* Sidebar */}
            <div className="w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/dashboard" className="block">Home</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/dashboard/create-teacher" className="block">Teacher Registration</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/dashboard/create-student" className="block">Student Registration</Link>
                        </li>

                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link to="/dashboard/reports" className="block">Reports</Link>
                        </li>
                        <li className="px-4 py-2 hover:bg-gray-700">
                            <Link onClick={logout} className="block">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1">
                {/* <h1 className="text-3xl font-bold mb-6">Welcome to the Dashboard</h1> */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;