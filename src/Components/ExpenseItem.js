import React from 'react'
import { Card, Button } from 'react-bootstrap'
import './ExpenseItem.css'

const ExpenseItem = () => {
  return (
    <Card bg='dark' text='dark' >
      <Card.Body>
      <Card.Header className='item__date' >Date</Card.Header>
        <Card.Title className='item__title' >Expense Title</Card.Title>
          <div className='item__desc'>
            With supporting text below as a natural lead-in to additional content.
          </div>
          <Card.Text className='item__price' >
            RM 300
          </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ExpenseItem
