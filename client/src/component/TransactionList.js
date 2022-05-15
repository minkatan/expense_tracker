import React, {useContext, useEffect} from 'react'
// import {numberWithCommas} from '../component/utilities/format'
import { Transactions } from './Transactions';

import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>
        <h3 className='text-2xl font-bold p-2 m-2 border-b-2 border-cyan-900'>History</h3>
            <ul className='list-none text-cyan-900 w-full mb-10'>
                {transactions.map(transaction => (
                  <Transactions key={transaction.id} transactions={transaction} />
                ))}
            </ul>
    </>
  )
}
