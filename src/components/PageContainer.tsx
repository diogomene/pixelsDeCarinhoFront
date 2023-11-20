import { ReactElement } from "react";
import "./PageContainer.css";
interface PageContainerProps {
    children: ReactElement|ReactElement[];
}

export default function PageContainer({ children }: PageContainerProps) {
    return <div className="page-container">{children}</div>;
}
