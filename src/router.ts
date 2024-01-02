import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";
import AboutUs from "./pages/About.tsx";
import Transparency from "./pages/Transparency.tsx";
import Desenvolvimento from "./pages/Desenvolvimento.tsx";
import Contact from "./pages/Contact.tsx";
import Galeria from "./pages/Galeria.tsx";
import Help from "./pages/Help.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/about-us",
        Component: AboutUs,
    },
    {
        path: "/transparency",
        Component: Transparency,
    },
    {
        path: "/contact",
        Component: Contact,
    },
    {
        path: "/galeria",
        Component: Galeria,
    },
    {
        path: "/help",
        Component: Help,
    },
    {
        path: "*",
        Component: Desenvolvimento
    }
]);

export default router;