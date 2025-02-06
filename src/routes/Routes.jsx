import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/Error/ErrorPage";
import Login from "../pages/Authentication/Login";
import Dashboard from "../layouts/Dashboard";
import TeacherRegistration from "../pages/Dashboard/User/TeacherRegistration";
import StudentRegistration from "../pages/Dashboard/User/StudentRegistration";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Login />
            },
        ]
    },
    {
        path: "dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: 'create-teacher',
                element: <TeacherRegistration />
            },
            {
                path: 'create-student',
                element: <StudentRegistration />
            },
        ]
    },
]);

export default router;