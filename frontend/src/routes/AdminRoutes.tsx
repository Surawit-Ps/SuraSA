import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import Loadable from "../components/third-patry/Loadable";
import FullLayout from "../layout/FullLayout";


// Authentication pages
const MainPages = Loadable(lazy(() => import("../pages/authentication/Login")));
const Dashboard = Loadable(lazy(() => import("../pages/Customer/BookAjob/Home")));

// Resume pages
const ResumeList = Loadable(lazy(() => import("../pages/Resume")));
const PersonalCreate = Loadable(lazy(() => import("../pages/Resume/create/personal")));
const StudyCreate = Loadable(lazy(() => import("../pages/Resume/create/study")));
const ExperienceCreate = Loadable(lazy(() => import("../pages/Resume/create/experience")));
const SkillCreate = Loadable(lazy(() => import("../pages/Resume/create/skill")));

// Edit Resume pages
const PersonalEdit = Loadable(lazy(() => import("../pages/Resume/edit/personal")));
const StudyEdit = Loadable(lazy(() => import("../pages/Resume/edit/study")));
const ExperienceEdit = Loadable(lazy(() => import("../pages/Resume/edit/experience")));
const SkillEdit = Loadable(lazy(() => import("../pages/Resume/edit/skill")));

// Freelance pages
const Post = Loadable(lazy(() => import("../pages/Customer/BookAjob/Post")));
const Sent = Loadable(lazy(() => import("../pages/Customer/BookAjob/Sent")));

// Postwork pages
const Postwork = Loadable(lazy(() => import("../pages/Freelance/Post")));
const EditWork = Loadable(lazy(() => import("../pages/Freelance/Post/edit")));
const CreateWork = Loadable(lazy(() => import("../pages/Freelance/Post/create")));

// Booking management pages
const Inpost = Loadable(lazy(() => import("../pages/Customer/BookAjob/Inpost")));
const Managebooking = Loadable(lazy(() => import("../pages/Customer/BookAjob/managebooking")));
const Getwork = Loadable(lazy(() => import("../pages/Customer/BookAjob/Getwork")));
const Booking = Loadable(lazy(() => import("../pages/Customer/BookAjob/Bookingwork")));

// Customer profile pages
const Customer = Loadable(lazy(() => import("../pages/Customer/Profile/index")));
const EditCustomer = Loadable(lazy(() => import("../pages/Customer/Profile/edit/index")));
const ProfileCustomer = Loadable(lazy(() => import("../pages/Customer/Profile/profile/index")));

// Payment pages
const PaymentOptions = Loadable(lazy(() => import("../pages/Payment/options")));
const QR = Loadable(lazy(() => import("../pages/Payment/options/QRcode")));
const DebitCard = Loadable(lazy(() => import("../pages/Payment/options/DebitCard")));

const Rating = Loadable(lazy(() => import("../pages/Rating")));

const AdminRoutes = (isLoggedIn: boolean): RouteObject => {
    return {
        path: "/",
        element: isLoggedIn ? <FullLayout /> : <MainPages />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "resume",
                children: [
                    {
                        path: "",
                        element: <ResumeList />,
                    },
                    {
                        path: "create",
                        children: [
                            { path: "personal", element: <PersonalCreate /> },
                            { path: "study", element: <StudyCreate /> },
                            { path: "experience", element: <ExperienceCreate /> },
                            { path: "skill", element: <SkillCreate /> },
                        ],
                    },
                    {
                        path: "edit",
                        children: [
                            { path: "personal", element: <PersonalEdit /> },
                            { path: "study", element: <StudyEdit /> },
                            { path: "experience", element: <ExperienceEdit /> },
                            { path: "skill", element: <SkillEdit /> },
                        ],
                    },
                ],
            },
            {
                path: "works",
                children: [
                    { path: "", element: <Post /> },
                    { path: ":workID/bookings", element: <Managebooking /> },
                    { path: ":workID/track", element: <Getwork /> },
                ],
            },
            {
                path: "post/:postId",
                element: <Inpost />,
            },
            {
                path: "Rating",
                element: <Rating/>
            },
            {
                path: "post/:postId/sent",
                element: <Sent />,
            },
            {
                path: "bookingbyF",
                children: [
                    { path: "", element: <Booking /> },
                ],
            },
            {
                path: "work",
                children: [
                    { path: "", element: <Postwork /> },
                    { path: "create", element: <CreateWork /> },
                    { path: "edit/:id", element: <EditWork /> },
                ],
            },
            {
                path: "payment",
                children: [
                    { path: "",element: <PaymentOptions />,},
                    { path: "QRcodePayment",element: <QR />},
                    { path: "DebitCardPayment",element: <DebitCard />}
                ]
            },
            {
                path: "customer",
                children: [
                    { path: "", element: <Customer /> },
                    { path: "edit/:id", element: <EditCustomer /> },
                    { path: "profile/:id", element: <ProfileCustomer /> },
                ],
            },
        ],
    };
};

export default AdminRoutes;
