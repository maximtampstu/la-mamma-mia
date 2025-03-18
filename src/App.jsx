import './App.css'
import AddCustomer from "./components/AddCustomer"
import BillList from "./components/BillList"
import OrderList from "./components/OrderList"
import TableList from "./components/TableList"
import TotalEarned from "./components/TotalEarned"
import TotalServed from "./components/TotalServed"

import { useState } from 'react';

function App() {

  /*const [data, setData] = useState({
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
      },
      {
        id: 2,
        kind: null,
        tableId: 2,
        statusNumber: 0,
        consumentProducts: [],
        totalSpent: 0
      },
      {
        id: 3,
        kind: null,
        tableId: 3,
        statusNumber: 0,
        consumentProducts: [],
        totalSpent: 0
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
  });*/

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
        tableId: 1,
        clientId: 1,
        served: false,
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
    for (const table of data.tables) {
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
      tableId: tableId,
      clientId: clientId,
      products: productList
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
    let addedPrice = 0;
    order.products.forEach(product => {
      addedPrice = addedPrice + product.totalCost;
    });

    setData({
      ...data,
      orders: data.orders.slice(1),
      clients: data.clients.map(client =>
        client.id === order.clientId ? { ...client, statusNumber: client.statusNumber + 1, consumentProducts: [...client.consumentProducts, ...order.products]} : client
      ),
    })
  }

  return (
    <>
      <AddCustomer handleAddCustomer={handleAddCustomer}/>
      <BillList dataTables={data.tables} dataClients={data.clients} />
      <OrderList dataTables={data.tables} dataClients={data.clients} dataOrder={data.orders} handleServe={handleServe} />
      <TableList dataTables={data.tables} dataClients={data.clients} handleTableForm={handleTableForm} />
      <TotalEarned/>
      <TotalServed orderList={data.orders}/>
    </>
  )
}

export default App
