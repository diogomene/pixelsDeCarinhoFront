import { ReactElement } from "react";
import "./Paper.css";''

interface PaperProps {
    children: ReactElement|ReactElement[];
}

export default function Paper({ children }: PaperProps) {
    return <div className="paper-container">{children}</div>;
}