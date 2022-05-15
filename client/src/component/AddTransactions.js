import React, {useState, useContext} from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AddTransactions = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,amount: -amount
    }

    addTransaction(newTransaction)
  }

  const addSalary = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text: 'Income', 
      amount: +amount

    }
    addTransaction(newTransaction)
  }

  return (
    <>
     <h3 className='text-2xl font-bold p-2 m-2 border-b-2 border-cyan-900'>Add New Expenses</h3>
     <form onSubmit={onSubmit}>
       <div>
         <label htmlFor='text' className='inline my-4 mx-0'>Text</label>
         <input type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter text...' className='border-solid border-1 rounded-md block text-xl p-2 m-4 w-full' />
       </div>
       <div>
         <label htmlFor='amount' className='inline my-4 mx-0'>
           Amount :
         </label>
         <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' className='border-solid border-1 rounded-md block text-xl p-2 m-4 w-full'/>
       </div>
       <button className='cursor-pointer bg-red-200 text-teal-800 shadow-lg border-0 block text-xl m-4 p-4 w-full rounded-lg'>Add Expenses</button>
     </form>

     <h3 className='text-2xl font-bold p-2 m-2 border-b-2 border-cyan-900'>Add Income</h3>
     <form onSubmit={addSalary}>
        <div>
          <label htmlFor='amount' className='inline my-4 mx-0'>
           Amount :
          </label>
          <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...' className='border-solid border-1 rounded-md block text-xl p-2 m-4 w-full'/>
      </div>
      <button className='cursor-pointer bg-cyan-500 text-teal-800 shadow-lg border-0 block text-xl m-4 p-4 w-full rounded-lg'>Add Income</button>
    </form>
    </>
  )
}
