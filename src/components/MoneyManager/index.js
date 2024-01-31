import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const transactionList = []
class MoneyManager extends Component {
  state = {
    mytransactionList: transactionList,
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
  }

  onChangeOptionId = event => {
    this.setState({typeInput: event.target.value})
  }

  changeTitle = event => {
    this.setState({titleInput: event.target.value})
  }

  changeAmount = event => {
    this.setState({amountInput: event.target.value})
  }

  addData = event => {
    event.preventDefault()
    const {titleInput, amountInput, typeInput} = this.state
    const getdata = {
      id: uuidv4(),
      title: titleInput,
      amount: amountInput,
      type: typeInput,
    }

    this.setState(prevState => ({
      mytransactionList: [...prevState.mytransactionList, getdata],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  deleteListItem = id => {
    const {mytransactionList} = this.state
    const deleteitems = mytransactionList.filter(each => each.id !== id)
    this.setState({mytransactionList: deleteitems})
  }

  addIncome = () => {
    const {mytransactionList} = this.state
    let income = 0
    mytransactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        income += parseInt(each.amount)
      }
    })
    return income
  }

  addExpenses = () => {
    const {mytransactionList} = this.state
    let expenses = 0
    mytransactionList.forEach(each => {
      if (each.type === transactionTypeOptions[1].optionId) {
        expenses += parseInt(each.amount)
      }
    })
    return expenses
  }

  updateBalance = () => {
    const {mytransactionList} = this.state
    let getincome = 0
    let getExpenses = 0
    let getBalance = 0

    mytransactionList.forEach(each => {
      if (each.type === transactionTypeOptions[0].optionId) {
        getincome += parseInt(each.amount)
      } else {
        getExpenses += parseInt(each.amount)
      }
      getBalance = getincome - getExpenses
    })
    return getBalance
  }

  render() {
    const {mytransactionList, titleInput, amountInput, typeInput} = this.state
    const showIncome = this.addIncome()

    const showExpenses = this.addExpenses()
    const showBAlance = this.updateBalance()

    return (
      <div className="app-container">
        <div className="responsive-container">
          <div className="header-container">
            <h1 className="heading">Hi,Richad</h1>
            <p className="header-content">
              Welcome back to your
              <span className="money-manager-text">Money Manager</span>
            </p>
          </div>

          <MoneyDetails
            showIncome={showIncome}
            showExpenses={showExpenses}
            showBAlance={showBAlance}
          />
          <div className="transaction-details">
            <form className="transaction-form" onSubmit={this.addData}>
              <h1 className="transaction-header">Add Transaction</h1>
              <label className="input-label" htmlFor="title">
                TITLE
              </label>
              <input
                value={titleInput}
                type="text"
                className="input"
                id="text"
                onChange={this.changeTitle}
              />
              <label className="input-label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                value={amountInput}
                type="text"
                className="input"
                onChange={this.changeAmount}
                id="amount"
              />
              <label className="input-label" htmlFor="type">
                TYPE
              </label>
              <select
                id="select"
                className="input"
                value={typeInput}
                onChange={this.onChangeOptionId}
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <div className="history-transactions">
              <h1 className="transaction-header">History</h1>

              <div className="transactions-table-container">
                <ul className="transactions-table">
                  <li className="table-header">
                    <p className="table-header-cell">Title</p>
                    <p className="table-header-cell">Amount</p>
                    <p className="table-header-cell">Type</p>
                  </li>
                  {mytransactionList.map(each => (
                    <TransactionItem
                      deleteListItem={this.deleteListItem}
                      key={each.id}
                      listItems={each}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
