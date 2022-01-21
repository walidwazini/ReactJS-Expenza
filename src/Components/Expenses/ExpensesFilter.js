import React, { useState } from 'react'

import './ExpensesFilter.css'

const ExpensesFilter = props => {
  
  const dropdownChangeHandler = (event) => {
    console.log(event.target.value)
    props.onChangeFilter(event.target.value);
  };

  const dropdownMonth = month => {
    console.log(month.target.value)
    props.onChangeMonth(month.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
        </select>
      </div>
      <div className='expenses-filter__control'>
        <label>Filter by Month</label>
        <select value={props.selectedMonth} onChange={dropdownMonth} >
          <option value='January' >January</option>
          <option value='February' >Feb</option>
          <option value='March' >March</option>
          <option value='April' >April</option>
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter
