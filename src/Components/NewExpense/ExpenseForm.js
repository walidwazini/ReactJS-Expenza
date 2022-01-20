import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const titleChangeHandler = ev => {
    setEnteredTitle(ev.target.value)
    // setUserInput({...userInput,enteredTitle: ev.target.value,})

    // Our state update depends on previous state
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: ev.target.value}
    // })
  }
  const amountChangeHandler = (amount) => {
    // setUserInput({...userInput,enteredAmount: amount.target.value,})
    setEnteredAmount(amount.target.value)
  }

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, enteredDate: event.target.value })
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form onSubmit={submitHandler} >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            onChange={titleChangeHandler}
            value={enteredTitle}
            />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number' min='0.01' step='0.01'
            onChange={amountChangeHandler}
            value={enteredAmount}
            />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date' min='2019-01-01' max='2022-12-31'
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className='new-expense__actions' >
        <button 
        type='submit'
        >Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
