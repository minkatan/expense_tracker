import React, { useContext } from 'react'
import {numberWithCommas} from '../component/utilities/format'

import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {

  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);

  const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item), 0).toFixed(1)
  const expenses = amounts.filter(item => item < 0).reduce((acc,item) => (acc += item), 0).toFixed(1)


  return (
    <div className='flex bg-neutral-100 shadow py-2 px-4 justify-evenly my-4'>
        <div className='flex-1 w-36 py-2 text-center border-r-2 border-cyan-900'>
          <h4>Income</h4>
          <p className='tracking-wide mx-0 my-1 text-green-600'> +${numberWithCommas(income)} </p>
        </div>
        <div className='flex-1 w-36 py-2 text-center'>
          <h4>Expenses</h4>
          <p className='tracking-wide mx-0 my-1 text-red-600'> -${numberWithCommas(Math.abs(expenses))} </p>
        </div>
    </div>
  )
}
