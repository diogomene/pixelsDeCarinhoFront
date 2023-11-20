import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/About.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/aboutus",
        Component: AboutUs,
    },
]);

export default router;