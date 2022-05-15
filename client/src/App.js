import "./index.css"
import { Header } from "./component/Header"
import { Balance } from "./component/Balance"
import { IncomeExpenses } from "./component/IncomeExpenses"
import { TransactionList } from "./component/TransactionList"
import { AddTransactions } from "./component/AddTransactions"

import {GlobalProvider} from "./context/GlobalState"


function App() {
  return (
    <GlobalProvider>
    <div className='relative flex flex-col items-start justify-center container mx-auto bg-cyan-100 rounded-xl shadow-border p-8 m-10'>
      <Header />
      <div className='text-gray-500 text-lg'>
        <Balance />
        <TransactionList />
        <AddTransactions />
      </div>
      <IncomeExpenses />
    </div>
    </GlobalProvider>
  );
}

export default App;
