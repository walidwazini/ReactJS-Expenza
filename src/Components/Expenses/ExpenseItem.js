import React from 'react'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const consoleHandler = () => {
    // const currentMonth = props.date.getMonth + 1
    const month = props.date.toLocaleString('en-GB', { month: 'long' })
    console.log(month)
  }

  return (
    <div className='expense-item'>
      <ExpenseDate dateItem={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        {/* <p> {subtitle} </p> */}
        <div className='expense-item__price'>RM {props.amount}</div>
      </div>
      {/* <button style={{ color: 'red', fontWeight: 'bold' }} onClick={clickHandler} >Change Title</button> */}
      <button
        style={{ color: 'blue', margin: '5px' }}
        onClick={consoleHandler}
      >
        Console.log
      </button>
    </div>
  )
}

export default ExpenseItem
