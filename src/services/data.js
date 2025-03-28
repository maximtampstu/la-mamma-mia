//changing data
export const restaurantData = {
    clients: [
        {
            id: 0,
            kind: "vip",
            tableId: 0,
            statusNumber: 3,
            consumentProducts: [
                {
                    course: "drinks",
                    productId: 2,
                    amount: 3,
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
            tableId: 0,
            clientId: 0,
            served: true,
            payed: false,
            products: [
                {
                    course: "drinks",
                    productId: 2,
                    amount: 3,
                },
            ]
        },
        {
            id: 1,
            tableId: 1,
            clientId: 1,
            served: true,
            payed: false,
            products: [
                {
                    course: "drinks",
                    productId: 3,
                    amount: 1,
                },
            ]
        },
        {
            id: 2,
            tableId: 1,
            clientId: 1,
            served: true,
            payed: false,
            products: [
                {
                    course: "mainCourses",
                    productId: 2,
                    amount: 2,
                },
            ]
        },
        {
            id: 3,
            tableId: 1,
            clientId: 1,
            served: false,
            payed: false,
            products: [
                {
                    course: "desserts",
                    productId: 2,
                    amount: 1,
                },
                {
                    course: "desserts",
                    productId: 1,
                    amount: 1,
                },
            ]
        }
    ],
};

//static data
export const products = {
    drinks: [
        { id: 0, name: "Water", price: 2.5 },
        { id: 1, name: "San Pellegrino", price: 3.5 },
        { id: 2, name: "Espresso", price: 2 },
        { id: 3, name: "Italian Wine", price: 5.5 }
    ],
    mainCourses: [
        { id: 0, name: "Pizza", price: 12.5 },
        { id: 1, name: "Spaghetti", price: 11.5 },
        { id: 2, name: "Lasagne", price: 13 },
        { id: 3, name: "Risotto", price: 14.5 }
    ],
    desserts: [
        { id: 0, name: "Tiramisu", price: 6.5 },
        { id: 1, name: "Panna Cotta", price: 6 },
        { id: 2, name: "Gelato", price: 4.5 },
        { id: 3, name: "Birthday Cake", price: 0 }
    ]
};