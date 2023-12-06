import Body from "./Body";
import Header from "./Header";
import "./index.css"


interface PaperProps {
    data: Base[];
    showDescricao?: boolean
}

function TableDetail({ data, showDescricao }: PaperProps) {
    return (
        <table className="table-detail">
            <Header showDescricao={showDescricao} />
            <Body key="table-child" data={data} showDescricao={showDescricao} />
        </table>
    )
}

export default TableDetail