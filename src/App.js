import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Grocery',
    amount: 1000,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 79999, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 3600,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 18000,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'Fruits',
    amount: 1000,
    date: new Date(2019, 8, 16),
  },
  {
    id: 'e6',
    title: 'SmartPhone',
    amount: 16000,
    date: new Date(2020, 2, 18),
  },
  {
    id: 'e7',
    title: 'Laptop',
    amount: 88000,
    date: new Date(2019, 4, 22),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  // Behind the scenes transformation of JSX code
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, `Let's get started!`),
  //   React.createElement(Expenses, { items: expenses }),
  // )
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses])
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
