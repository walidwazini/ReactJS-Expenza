// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

import Expenses from './Components/Expenses/Expenses.js';
import NewExpense from './Components/NewExpense/NewExpense';
// import 'bootstrap/dist/css/bootstrap.min.css';

const DUMMY_2 = [
  {
    id: 'd1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 0, 14),
  },
  {
    id: 'd2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 1, 12),
  },
  {
    id: 'd3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 8),
  },
  {
    id: 'd4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 2, 12),
  },
]

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2021, 10, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 11, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2022, 0, 8),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2022, 0, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_2)

  const addExpenseHandler = newExpense => {
    console.log(newExpense)
    console.log('in app .js')
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses]
    })
  }

  return (
    <div className='App' >
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses
        items={expenses}
      />
    </div>
  );
}

export default App;
