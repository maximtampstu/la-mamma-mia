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
            amount: 3
          }
        ]
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
            amount: 1
          },
          {
            course: "mainCourses",
            productId: 2,
            amount: 3
          }
        ]
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
        clientId: null
      },
      {
        id: 3,
        tableNumber: 4,
        taken: false,
        clientId: null
      }
    ],
    orders: "mango",
    totalEarned: 1000,
    products: {
      drinks: [
        {
          id: 0,
          name: "Water",
          price: 2.5,
          timesOrderd: 0
        },
        {
          id: 1,
          name: "San Pellegrino",
          price: 3.5,
          timesOrderd: 0
        },
        {
          id: 2,
          name: "Espresso",
          price: 2,
          timesOrderd: 0
        },
        {
          id: 3,
          name: "Italian Wine",
          price: 5.5,
          timesOrderd: 0
        }
      ],
      mainCourses: [
        {
          id: 0,
          name: "Pizza",
          price: 12.5,
          timesOrderd: 0
        },
        {
          id: 1,
          name: "Spaghetti",
          price: 11.5,
          timesOrderd: 0
        },
        {
          id: 2,
          name: "Lasagne",
          price: 13,
          timesOrderd: 0
        },
        {
          id: 3,
          name: "Risotto",
          price: 14.5,
          timesOrderd: 0
        }
      ],
      desserts: [
        {
          id: 0,
          name: "Tiramisu",
          price: 6.5,
          timesOrderd: 0
        },
        {
          id: 1,
          name: "Panna Cotta",
          price: 6,
          timesOrderd: 0
        },
        {
          id: 2,
          name: "Gelato",
          price: 4.5,
          timesOrderd: 0
        },
        {
          id: 3,
          name: "Cake",
          price: 5.5,
          timesOrderd: 0
        }
      ]
    }
  });

  return (
    <>
      <AddCustomer />
      <BillList />
      <OrderList />
      <TableList dataTables={data.tables} dataClients={data.clients} dataProducts={data.products} />
      <TotalEarned data={data.totalEarned} />
      <TotalServed data={data.products} />
    </>
  )
}

export default App
