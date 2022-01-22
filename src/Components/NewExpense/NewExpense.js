import React, { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString
    }
    props.onAddExpense(expenseData)
    console.log(expenseData)
    setIsEditting(false)
  }

  const startAddingHandler = () => {
    setIsEditting(true)
  }

  const cancelAddingHanlder = () => {
    setIsEditting(false)
  }

  //   ---------------------------------------------

  return (
    <div className='new-expense' >
      {!isEditting &&
        <button className='form-button'
          onClick={startAddingHandler}
        >
          New Expense
        </button>
      }
      {isEditting && <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={cancelAddingHanlder}
      />}
    </div>
  )
}

export default NewExpense
