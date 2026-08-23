import './Expenses.css'
import { useState } from 'react'

function Expenses({ transactionList }) {
    const [search, setSearch] = useState('')

    const filteredList = transactionList.filter((transaction) =>
        transaction.transactionType
            .toLowerCase()
            .includes(search.toLowerCase())
    )

    return (
        <div className="expenses">
            <h2>Expenses</h2>

            <input
                type="text"
                placeholder="transaction type"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="showcase">
                {filteredList.map((transaction, index) => (
                    <div className="expense-card" key={index}>
                        <h3>{transaction.transactionType} : ₹{transaction.transactionInfo}</h3>
                        
                    </div>
                ))}
            </div>
            <div className= "total">
                <h3>Total Expenses : ₹{transactionList.reduce((acc, cur) => acc + cur.transactionInfo, 0)}</h3>
            </div>
        </div>
    )
}

export default Expenses