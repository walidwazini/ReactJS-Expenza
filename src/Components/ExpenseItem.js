import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <ExpenseDate dateItem={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem
