import React from 'react'
import './ExpenseDate.css'

const ExpenseDate = props => {
  const day = props.dateItem.toLocaleString('en-GB', { day: '2-digit' })
  const month = props.dateItem.toLocaleString('en-GB', { month: 'long' })
  const year = props.dateItem.getFullYear()
  return (
    <div className='expense-date' >
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  )
}

export default ExpenseDate
