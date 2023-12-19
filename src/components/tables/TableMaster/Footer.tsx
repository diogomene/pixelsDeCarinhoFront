import { Dictionary, keys } from "lodash";

interface PaperProps {
    data: Dictionary<Base[]>,
    showDescricao?: boolean
}
function Footer({ data }: PaperProps) {
    const subtotal = ((key: string): number => (data[key]).reduce((t: number, c: Base) => t + c.valor, 0))
    const total = (t: number, e: number): number => t + e

    return (
        <tfoot>
            <tr>
                <th>Total geral</th>
                <th className="text-right valor">{
                    keys(data)
                        .map(subtotal)
                        .reduce(total, 0)
                        .toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                    })
                }</th>
            </tr>
        </tfoot>
    )
}

export default Footer