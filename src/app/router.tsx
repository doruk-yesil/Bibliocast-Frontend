import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../shared/components/layout/MainLayout";
import AuthLayout from "../shared/components/layout/AuthLayout";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import StudentHomePage from "../features/student/pages/StudentHomePage";
import MyCoursesPage from "../features/student/pages/MyCoursesPage";
import StudentProfilePage from "../features/student/pages/StudentProfilePage";

import InstructorDashboardPage from "../features/instructor/pages/InstructorDashboardPage";
import CreateCoursePage from "../features/instructor/pages/CreateCoursePage";
import EarningsPage from "../features/instructor/pages/EarningsPage";

import AdminDashboardPage from "../features/admin/pages/AdminDashboardPage";
import UserManagementPage from "../features/admin/pages/UserManagementPage";

import ModeratorDashboardPage from "../features/moderator/pages/ModeratorDashboardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <div>Home</div>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/student",
    element: <MainLayout />,
    children: [
      { index: true, element: <StudentHomePage /> },
      { path: "courses", element: <MyCoursesPage /> },
      { path: "profile", element: <StudentProfilePage /> },
    ],
  },
  {
    path: "/instructor",
    element: <MainLayout />,
    children: [
      { index: true, element: <InstructorDashboardPage /> },
      { path: "create-course", element: <CreateCoursePage /> },
      { path: "earnings", element: <EarningsPage /> },
    ],
  },
  {
    path: "/admin",
    element: <MainLayout />,
    children: [
      { index: true, element: <AdminDashboardPage /> },
      { path: "users", element: <UserManagementPage /> },
    ],
  },
  {
    path: "/moderator",
    element: <MainLayout />,
    children: [
      { index: true, element: <ModeratorDashboardPage /> },
    ],
  },
]);

export default router;
