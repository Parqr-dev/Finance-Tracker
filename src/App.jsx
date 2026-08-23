import { useState } from 'react'
import './App.css'
import Transactions from './components/Transactions.jsx'
import Budget from './components/Budget.jsx'
import Expenses from './components/Expenses.jsx'
import Income from './components/Income.jsx'

function App() {
  const [transactionList, setTransactionList] = useState([])
  const [budget, setBudget] = useState(0)
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <div className="page-wrapper">
      <h1 className="header">Finance Tracker</h1>
      
      <div className="container">
        <div className="tabs">
          <Transactions 
            setTransactionList={setTransactionList} 
            isActive={activeTab === 'transactions'}
            onClick={() => setActiveTab('transactions')}
          />
          <Budget 
            setBudget={setBudget} 
            isActive={activeTab === 'budget'}
            onClick={() => setActiveTab('budget')}
          />
        </div>

        <div className="content">
          <div className="expenses">
            <Expenses transactionList={transactionList} />
          </div>
          
          <div className="income">
            <Income budget={budget} transactionList={transactionList} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App