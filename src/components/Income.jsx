import './Income.css'
import Remaining from './Remaining'

function Income({ budget, transactionList }) {
    return (
        <div className="budget">
            <p>Income : ₹{budget}</p>
             <Remaining budget={budget} transactionList={transactionList} />
        </div>
    )
}

export default Income