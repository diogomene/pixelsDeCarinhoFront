import Header from "./Header";
import { Dictionary } from "lodash";
import Body from "./Body";

interface PaperProps {
    data: Dictionary<Base[]>,
    showDescricao?: boolean
}

function TableMaster({ data, showDescricao }: PaperProps) {

    return (
        <table className="table-entradas">
            <Header />
            <Body data={data} showDescricao={showDescricao} />
        </table>
    )
}

export default TableMaster