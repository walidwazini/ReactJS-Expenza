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
  return (
    <React.Fragment>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          selectedMonth={filteredMonth}
          onChangeFilter={filterChangeHandler}
          onChangeMonth={filterMonthHandler}
        />
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        />
      </Card>
    </React.Fragment>
  )
}

export default Expenses
