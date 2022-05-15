import React, { useContext } from 'react'
import {numberWithCommas} from '../component/utilities/format'

import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const {transactions} = useContext(GlobalContext);

  const amounts = transactions.map(transactions => transactions.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className='text-center my-12 text-cyan-700'>
        <h4 className='m-2 text-xl font-bold relative -left-24 underline'>Your Balance</h4>
        <h1 className='text-3xl'>${numberWithCommas(total)}</h1>
    </div>
  )
}
