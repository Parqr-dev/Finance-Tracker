
import './Transactions.css'
import { useState, useEffect } from 'react'

function Transactions({ setTransactionList }) {
    const [transactionInfo, setTransactionInfo] = useState(0)
    const [transactions, setTransactions] = useState(false)
    const [transactionType, setTransactionType] = useState('Food')

    useEffect(() => {
        if (transactions) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [transactions])

    const Setinfo = () => {
        setTransactionList(prev => [
            ...prev,
            {
                transactionInfo,
                transactionType
            }
        ])

        setTransactions(false)
        setTransactionInfo(0)
        setTransactionType('Food')
    }

    return (
        <div className="tab">
            <button className = "tabbing" onClick={() => setTransactions(true)}>
                Transactions
            </button>

            {transactions && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Transactions</h2>

                        <input
                            type="number"
                            placeholder="Enter the amount"
                            onChange={(e) =>
                                setTransactionInfo(Number(e.target.value))
                            }
                        />

                        <select
                            onChange={(e) =>
                                setTransactionType(e.target.value)
                            }
                        >
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Clothes">Clothes</option>
                            <option value="Other">Other</option>
                        </select>

                        <button className = "functions" onClick={Setinfo}>Add</button>

                        <button className = "functions" onClick={() => setTransactions(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Transactions

