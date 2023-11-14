import App from "./App.tsx";
import {createBrowserRouter} from "react-router-dom";
const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
    },
]);

export default router;