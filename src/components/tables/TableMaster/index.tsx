import Header from "./Header";
import { Dictionary } from "lodash";
import Body from "./Body";
import "./index.css"
import Footer from "./Footer.tsx";

interface PaperProps {
    data: Dictionary<Base[]>,
    showDescricao?: boolean
}

function TableMaster({ data, showDescricao }: PaperProps) {

    return (
        <table className="table-entradas flex">
            <Header />
            <Body data={data} showDescricao={showDescricao} />
            <Footer data={data} />
        </table>
    )
}

export default TableMaster