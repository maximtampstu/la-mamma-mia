import './App.css'
import AddCustomer from "./components/AddCustomer"
import BillList from "./components/BillList"
import OrderList from "./components/OrderList"
import TableList from "./components/TableList"
import TotalEarned from "./components/TotalEarned"
import TotalServed from "./components/TotalServed"

function App() {

  return (
    <>
      <AddCustomer />
      <BillList />
      <OrderList />
      <TableList />
      <TotalEarned />
      <TotalServed />
    </>
  )
}

export default App
