import "./Body.css"
import { Dictionary, keys } from 'lodash'
import TableDetail from '../TableDetail';
import { Fragment, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface PaperProps {
    data: Dictionary<Base[]>;
    showDescricao?: boolean
}

function Body({ data, showDescricao }: PaperProps) {
    const total = ((key: string): number => (data[key]).reduce((t: number, c: Base) => t + c.valor, 0))

    return (
        <tbody>
            {
                keys(data).map((e: string) => {
                    const [hide, setHide] = useState<boolean>(true)

                    return (
                        <Fragment key={e}>
                            <tr className={`fab-plus row-expand ${hide ? '' : 'expanded'}`} onClick={() => setHide(!hide)}>
                                <td className="text-left">
                                    <FontAwesomeIcon icon={faChevronRight} />
                                    <span style={{ marginLeft: '10px' }}>{e}</span>
                                </td>
                                <td className="text-right valor">
                                    {
                                        total(e).toLocaleString("pt-BR", {
                                            style: "currency",
                                            currency: "BRL",
                                        })
                                    }
                                </td>
                            </tr>
                            <tr className={`show ${hide ? 'hide' : ''}`}>
                                <td colSpan={2} className="text-right">
                                    <TableDetail key={`child-${e}`} data={data[e]} showDescricao={showDescricao} />
                                </td>
                            </tr>
                        </Fragment>
                    )
                }
                )
            }

        </tbody>
    )
}

export default Body