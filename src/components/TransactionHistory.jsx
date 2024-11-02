const TransactionHistory = (props) => 
{
    return (
        <>
            <table className="transaction-table">
                <thead className="table_header">
                    <tr className="table_header-row">
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody className="table_body table-body-row-odd">
                    {
                        props.transactions.map(
                            (transaction, index) =>
                            (
                                <tr key={transaction.id} className={`table-body-row ${index % 2 !== 0 ? "table-body-row-even": "table-body-row-odd"}`}>
                                    <td>{transaction.type}</td>
                                    <td>{transaction.amount}</td>
                                    <td>{transaction.currency}</td>
                                </tr>  
                            )
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default TransactionHistory;