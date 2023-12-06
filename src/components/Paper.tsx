import { ReactElement } from "react";
import "./Paper.css";

interface PaperProps {
    backgroundColor?: string;
    children: ReactElement | ReactElement[];
}

export default function Paper({ children, backgroundColor }: PaperProps) {
    return (
        <div
            className="paper-container"
            style={backgroundColor?{backgroundColor:backgroundColor}:{}}
        >
            {children}
        </div>
    );
}
