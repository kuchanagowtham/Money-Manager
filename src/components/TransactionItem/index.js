// Write your code here
import './index.css'

const TransactionItem = props => {
  const {listItems, deleteListItem} = props
  const {id, title, amount, type} = listItems
  const deleteItem = () => {
    deleteListItem(id)
  }

  return (
    <li className="transaction-item">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>
      <button type="button" className="delete-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
          onClick={deleteItem}
        />
      </button>
    </li>
  )
}

export default TransactionItem
