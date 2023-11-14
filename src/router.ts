import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
]);

export default router;