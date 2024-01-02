type HeaderParams = {
    title: string
}
function Header({title} : HeaderParams) {
    return (
        <thead>
            <tr>
                <th>{title}</th>
                <th className="text-right valor">Total</th>
            </tr>
        </thead>
    )
}

export default Header