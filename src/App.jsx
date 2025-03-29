import './App.css'
import AddCustomer from "./components/AddCustomer"
import BillList from "./components/BillList"
import OrderList from "./components/OrderList"
import TableList from "./components/TableList"
import TotalEarned from "./components/TotalEarned"
import TotalServed from "./components/TotalServed"
import Graphic from "./components/Graphic"
import { restaurantData } from "./services/data";
import { useState } from 'react';

function App() {

  const [data, setData] = useState({ ...restaurantData });

  const handleAddCustomer = (kind) => {
    for (const table of data.tables) { //zorgt er voor dat bij de eerste tafel die vrij is hij stopt
      if (!table.taken) {
        setData({
          ...data,
          tables: data.tables.map(tableItem =>
            tableItem.id === table.id ? { ...tableItem, taken: true } : tableItem
          ),
          clients: data.clients.map(client => 
            client.id === table.clientId ? { ...client, statusNumber: 1, kind: kind } : client
          ),
        })
        
        break;
      }
    }
  }

  const handleTableForm = (products, course, tableId, clientId) => {
    let productList = [];

    products.forEach(product => {
      productList.push({
        course: course,
        productId: parseInt(product.id),
        amount: parseInt(product.value)
      })
    });

    let newOrder = {
      id: data.orders.length,
      tableId: tableId,
      clientId: clientId,
      products: productList,
      served: false,
      payed: false,
    }

    setData({
      ...data,
      orders: data.clients[clientId].kind === "vip" ? [newOrder, ...data.orders] : [...data.orders, newOrder],
      clients: data.clients.map(client =>
        client.id === clientId ? { ...client, statusNumber: client.statusNumber + 1} : client
      )
    })
  }

  const handleServe = (order) => {
    setData({
      ...data,
      orders: data.orders.map(orderItem =>
        orderItem.id === order.id ? { ...orderItem, served: true} : orderItem
      ),
      clients: data.clients.map(client =>
        client.id === order.clientId ? { ...client, statusNumber: client.statusNumber + 1, consumentProducts: [...client.consumentProducts, ...order.products]} : client
      ),
    })
  }

  const handlePay = (clientId) => {
    setData({
      ...data,
      orders: data.orders.map(order =>
        order.clientId === clientId ? { ...order, payed: true } : order
      ),
      clients: data.clients.map(client =>
        client.id === clientId ? { ...client, statusNumber: 0, consumentProducts: [], kind: null } : client
      ),
      tables: data.tables.map(table =>
        table.clientId === clientId ? { ...table, taken: false } : table
      ),
    })
  }

  return (
    <>
      <AddCustomer handleAddCustomer={handleAddCustomer}/>
      <BillList dataTables={data.tables} dataClients={data.clients} />
      <OrderList data={data} handleServe={handleServe} />
      <TableList dataTables={data.tables} dataClients={data.clients} handleTableForm={handleTableForm} handlePay={handlePay} />
      <TotalEarned orderList={data.orders} />
      <TotalServed orderList={data.orders}/>
      <Graphic orderList={data.orders} />
    </>
  )
}

export default App
