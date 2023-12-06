import "./Body.css"

interface PaperProps {
    data: Base[];
    showDescricao?: boolean;
}

function Body({ data, showDescricao }: PaperProps) {
    return (
        <tbody key={Date.now()}>
            {data.map(({ data, valor, descricao }: Base) =>
                <tr key={new Date().getTime() * Math.random()}>
                    {showDescricao && <td>{descricao}</td>}
                    <td>{data}</td>
                    <td className="text-right">{valor.toLocaleString(
                        "pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    })}
                    </td>
                </tr>
            )}
        </tbody>
    )
}

export default Body