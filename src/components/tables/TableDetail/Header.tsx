interface PaperProps {
    showDescricao?: boolean;
}

function Header({showDescricao}: PaperProps) {
    return (
        <thead>
            <tr>
                {showDescricao && <th>Descrição</th>}
                <th>Data Hora</th>
                <th className="text-right">Valor</th>
            </tr>
        </thead>
    )
}

export default Header