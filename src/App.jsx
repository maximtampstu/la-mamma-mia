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
            productName: "Espresso",
            amount: 3,
            totalCost: 6
          },
          {
            productName: "Pizza",
            amount: 3,
            totalCost: 37.5
          },
          {
            productName: "Tiramisu",
            amount: 2,
            totalCost: 13
          },
        ],
        totalSpent: 56.5
      },
      {
        id: 1,
        kind: "birthday",
        tableId: 1,
        statusNumber: 6,
        consumentProducts: [
          {
            productName: "Italian Wine",
            amount: 1,
            totalCost: 5.5
          },
          {
            productName: "Spaghetti",
            amount: 2,
            totalCost: 23
          }
        ],
        totalSpent: 28.5
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
    orders: [
      {
        tableId: 1,
        clientId: 1,
        products: [
          {
            productName: "Cotta",
            amount: 3,
            totalCost: 18
          },
          {
            productName: "Tiramisu",
            amount: 2,
            totalCost: 13
          },
        ]
      }
    ],
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
      <BillList dataTables={data.tables} dataClients={data.clients} />
      <OrderList dataTables={data.tables} dataClients={data.clients} dataOrder={data.orders} />
      <TableList dataTables={data.tables} dataClients={data.clients} dataProducts={data.products} />
      <TotalEarned data={data.totalEarned} />
      <TotalServed data={data.products} />
    </>
  )
}

export default App
