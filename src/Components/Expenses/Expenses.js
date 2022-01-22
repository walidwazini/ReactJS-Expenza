import React, { useState } from 'react'
// import { Card } from 'react-bootstrap'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import ExpensesList from './ExpensesList'

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
      let myDate2 = expense.date.toLocaleString('en-GB', options)
      // .getMonth().toString() === filteredMonth
      return (
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
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses
