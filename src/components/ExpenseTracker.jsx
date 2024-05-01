import React from 'react'
import ExpenseHeader from './header/ExpenseHeader'
import Transaction from './transactions/Transaction'

function ExpenseTracker() {
  return (
    <>
    <h1>ExpenseTracker</h1>
    <ExpenseHeader/>
    <Transaction/>
    </>
    
  )
}

export default ExpenseTracker