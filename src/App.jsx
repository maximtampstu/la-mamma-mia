import './App.css'
import AddCustomer from "./components/AddCustomer"
import BillList from "./components/BillList"
import OrderList from "./components/OrderList"
import TableList from "./components/TableList"
import TotalEarned from "./components/TotalEarned"
import TotalServed from "./components/TotalServed"

import { useState } from 'react';

function App() {

  const [data, setData] = useState({
    clients: [
      {
        id: 0,
        kind: "vip",
        tableId: 0,
        statusNumber: 7,
        consumentProducts: [
          {
            course: "drinks",
            productId: 2,
            amount: 3,
          },
          {
            course: "mainCourses",
            productId: 1,
            amount: 4,
          },
          {
            course: "desserts",
            productId: 3,
            amount: 2,
          },
        ],
      },
      {
        id: 1,
        kind: "birthday",
        tableId: 1,
        statusNumber: 6,
        consumentProducts: [
          {
            course: "drinks",
            productId: 3,
            amount: 1,
          },
          {
            course: "mainCourses",
            productId: 2,
            amount: 2,
          }
        ],
      },
      {
        id: 2,
        kind: null,
        tableId: 2,
        statusNumber: 0,
        consumentProducts: [],
      },
      {
        id: 3,
        kind: null,
        tableId: 3,
        statusNumber: 0,
        consumentProducts: [],
      }
    ],
    tables: [
      {
        id: 0,
        tableNumber: 1,
        taken: true,
        clientId: 0
      },
      {
        id: 1,
        tableNumber: 2,
        taken: true,
        clientId: 1
      },
      {
        id: 2,
        tableNumber: 3,
        taken: false,
        clientId: 2
      },
      {
        id: 3,
        tableNumber: 4,
        taken: false,
        clientId: 3
      }
    ],
    orders: [
      {
        id: 0,
        tableId: 1,
        clientId: 1,
        served: false,
        payed: false,
        products: [
          {
            course: "desserts",
            productId: 2,
            amount: 3,
          },
          {
            course: "desserts",
            productId: 1,
            amount: 1,
          },
        ]
      }
    ],
  });

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
      orders: data.clients[clientId].kind === "vip"
        ? [newOrder, ...data.orders] : [...data.orders, newOrder],
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
      <OrderList dataTables={data.tables} dataClients={data.clients} dataOrder={data.orders} handleServe={handleServe} />
      <TableList dataTables={data.tables} dataClients={data.clients} handleTableForm={handleTableForm} handlePay={handlePay} />
      <TotalEarned orderList={data.orders} />
      <TotalServed orderList={data.orders}/>
    </>
  )
}

export default App
