import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const [subtitle, setSubtitle] = useState(props.title)

  const clickHandler = () => {
    if (subtitle === props.title){
      setSubtitle('changes')
    } else {
      setSubtitle(props.title)
    }
  }
  return (
    <div className='expense-item'>
      <ExpenseDate dateItem={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <p> {subtitle} </p>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button style={{ color: 'red', fontWeight: 'bold' }} onClick={clickHandler} >Change Title</button>
    </div>
  )
}

export default ExpenseItem
