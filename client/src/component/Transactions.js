import React, { useContext } from 'react'
import { numberWithCommas } from '../component/utilities/format'
import { GlobalContext } from '../context/GlobalState'

export const Transactions = ({ transactions }) => {
    const { deleteTransaction } = useContext(GlobalContext);
    
    const sign = transactions.amount < 0 ? '-' : '+';
    
    return (
        <li className={`hover:font-bold cursor-pointer my-1 flex justify-between relative ${transactions.amount < 0 ? 'border-r-4 border-red-600' : 'border-r-4 border-green-600'}`}>
        {transactions.text} 
            <span className=''>{sign}${numberWithCommas(Math.abs(transactions.amount))}</span>
            <button onClick={() => deleteTransaction(transactions._id)}className='absolute -top-0 -left-8 opacity-0 hover:opacity-100 text-red-700 bg-red-300 shadow border-0 px-2 rounded-lg'>X</button>
        </li>                
  )
}
