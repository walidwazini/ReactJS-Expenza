import React, { useState } from 'react'
// import { Card } from 'react-bootstrap'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'

const Expenses = props => {
  const [filteredYear, setFilteredYear] = useState('2021');
  const [filteredMonth, setFilteredMonth] = useState('january')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  const filterMonthHandler = selectedMonth => {
    setFilteredMonth(selectedMonth)
  }

  const filteredExpenses =
    props.items.filter(expense => {
      return (
        expense.date
          .getFullYear().toString() === filteredYear
      )
    })

  const filteredExpenses2 =
    props.items.filter(expense => {
      let options = { month: 'long' };
      let myDate = new Intl.DateTimeFormat('en-GB', options).format(expense.date)
      return (
        // expense.date
        // .getMonth().toString() === filteredMonth
        // .toLocaleString('en-GB', { month: 'long' }) === filteredMonth
        myDate === filteredMonth
      )
    })

  // ----------------------------------------------------

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          selectedMonth={filteredMonth}
          onChangeFilter={filterChangeHandler}
          onChangeMonth={filterMonthHandler}
        />
        {
          // Change from props.items data to filteredExpenses
          filteredExpenses2.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        }
      </Card>
    </div>
  )
}

export default Expenses
