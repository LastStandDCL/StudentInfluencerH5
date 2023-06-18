import NewsPage from "../pages/HomePage/NewsPage";
import TeamHomePage from "../pages/TeamPage/TeamHomePage";
import TeamsListPage from "../pages/TeamPage/TeamsListPage";
import ProfilePage from "../pages/TeamPage/ProfilePage";
import ImagePage from "../pages/HomePage/ImagePage";
import MaterialPage from "../pages/TeamPage/MaterialPage";
import CertificatePage from "../pages/TeamPage/CertificatePage";
import UploadPersonReportPage from "../pages/TeamPage/UploadPersonReportPage";
import UploadFinalReportPage from "../pages/TeamPage/UploadFinalReportPage";
import UploadMidReportPage from "../pages/TeamPage/UploadMidReportPage";
import CheckMidReportPage from "../pages/AdminPage/CheckMidReportPage";
import CheckFinalReportPage from "../pages/AdminPage/CheckFinalReportPage";
import CheckPersonPage from "../pages/AdminPage/CheckPersonPage";
import CheckMaterialPage from "../pages/AdminPage/CheckMaterialPage";
import CheckPassagePage from "../pages/AdminPage/CheckPassagePage";
import InfoPage from "../pages/AdminPage/InfoPage";
import AdminSettingsPage from "../pages/AdminPage/AdminSettingsPage";
import TeamsManagePage from "../pages/AdminPage/TeamsManagePage";
import LoginPage from "../pages/AuthPage/LoginPage";
import RegisterPage from "../pages/AuthPage/RegisterPage";
import FoundPasswordPage from "../pages/AuthPage/FoundPasswordPage";
import NotFoundPage from "../pages/NotFoundPage";
import {Navigate} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AuthPage from "../pages/AuthPage";
import AdminPage from "../pages/AdminPage";
import TeamPage from "../pages/TeamPage";
import UploadPassagePage from "../pages/TeamPage/UploadPassagePage";
import TeamImagesPage from "../pages/TeamPage/TeamImagesPage";
import TimeLinePage from "../pages/TeamPage/TimeLinePage";
import ActivityManage from "../pages/AdminPage/ActivityManage";

const routes = [
    {
        path: "/",
        element: <Navigate to={"/home/news"}/>,
        meta: {
            auth: false,
        }
    },
    {
        path: "/404",
        element: <NotFoundPage/>,
        meta: {
            auth: false,
            title: "学生大使 | 404"
        },
    },
    {
        path: "/auth",
        element: <AuthPage/>,
        children: [
            {
                path: "login",
                element: <LoginPage/>,
                meta: {
                    auth: false,
                    title: "学生大使 | 登录",
                }
            },
            {
                path:"register",
                element: <RegisterPage/>,
                meta: {
                    auth: false,
                    title: "学生大使 | 注册",
                }
            },
            {
                path:"found-password",
                element: <FoundPasswordPage/>,
                meta: {
                    auth: false,
                    title: "学生大使 | 找回密码",
                }
            }
        ]
    },
    {
        path:"/home",
        element: <HomePage/>,
        children: [
            {
                path:"news",
                element: <NewsPage/>,
                meta: {
                    auth: false,
                }
            },
            {
                path:"images",
                element: <ImagePage/>,
                meta: {
                    auth: false,
                }
            },
        ]
    },
    {
        path:"/team",
        element: <TeamPage/>,
        children: [
            {
                path:"teams",
                element: <TeamsListPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"timeline",
                element: <TimeLinePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"my-team",
                element: <TeamHomePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"my-profile",
                element: <ProfilePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"material",
                element: <MaterialPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"passage",
                element: <UploadPassagePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"team-images",
                element: <TeamImagesPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"certificate",
                element: <CertificatePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"upload-my-report",
                element:<UploadPersonReportPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"upload-final-report",
                element:<UploadFinalReportPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"upload-mid-report",
                element:<UploadMidReportPage/>,
                meta: {
                    auth: true,
                }
            }
        ]
    },
    {
        path:"/admin",
        element: <AdminPage/>,
        children: [
            {
                path:"check-mid",
                element:<CheckMidReportPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"check-final",
                element: <CheckFinalReportPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"check-person",
                element:<CheckPersonPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"check-material",
                element:<CheckMaterialPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"check-passage",
                element:<CheckPassagePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"info",
                element:<InfoPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"admin-settings",
                element: <AdminSettingsPage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"teams-manage",
                element: <TeamsManagePage/>,
                meta: {
                    auth: true,
                }
            },
            {
                path:"activity-manage",
                element: <ActivityManage/>,
                meta: {
                    auth: true,
                }
            },
        ]
    },
]
export default routes;
