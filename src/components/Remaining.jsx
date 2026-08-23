import './Remaining.css'

function Remaining({ budget, transactionList }) {
    const totalExpenses = transactionList.reduce(
        (acc, cur) => acc + Number(cur.transactionInfo || 0), 
        0
    );

    const remaining = Number(budget) - totalExpenses;

    return (
        <div className="remaining-text">
            <p>Remaining : ₹{remaining}</p>
        </div>
    );
}

export default Remaining;