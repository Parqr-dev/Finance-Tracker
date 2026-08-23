import './budget.css';
import { useState } from 'react';

function Budget({ setBudget }) {
    const [budgetStatus, setBudgetStatus] = useState(false);
    const [budgetInfo, setBudgetInfo] = useState('');
    function AddBudget(){
        setBudget(Number(budgetInfo))
        setBudgetStatus(false)
    }
    return (
        <div className="tab">
            <button
                className="budget-button"
                onClick={() => setBudgetStatus(!budgetStatus)}
            >
                Budget
            </button>

            {budgetStatus && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Budget</h2>

                        <input
                            type="number"
                            placeholder="Enter the amount"
                            value={budgetInfo}
                            onChange={(e) => setBudgetInfo(e.target.value)}
                        />
                        <button onClick={AddBudget}>Add</button>
                        <button onClick={() => setBudgetStatus(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Budget;