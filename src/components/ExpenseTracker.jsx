import React, { useState } from 'react'
import ExpenseHeader from './header/ExpenseHeader'
import Transaction from './transactions/Transaction'

function ExpenseTracker() {
  const [reload, setReload] = useState(0);

  return (
    <>
    <h1>ExpenseTracker</h1>
    <ExpenseHeader reload={setReload}/>
    <Transaction reload={reload}/>
    </>
    
  )
}

export default ExpenseTracker