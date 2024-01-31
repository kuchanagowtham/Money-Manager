// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {showBAlance, showIncome, showExpenses} = props
  return (
    <div className="main-container">
      <div className="balance">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="logo"
          />
        </div>
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs:{showBAlance}</p>
        </div>
      </div>
      <div className="income">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="logo"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs:{showIncome}</p>
        </div>
      </div>
      <div className="expenses">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
            alt="expenses"
            className="logo"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs:{showExpenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
