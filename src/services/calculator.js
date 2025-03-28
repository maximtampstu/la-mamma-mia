import { products } from "./data"

export const productPrice = (course, productId, amount) => {
    const product = products[course].find((product) => product.id === productId)
    const price = amount * product.price
    return price;
};

export const totalPrice = (productList) => {
    let totalPrice = 0;
    productList.forEach(product => {
        totalPrice = totalPrice + productPrice(product.course, product.productId, product.amount)
    });
    return totalPrice;
};

export const nameFinder = (course, productId) => {
    const product = products[course].find((product) => product.id === productId)
    const name = product.name
    return name;
};

export const firstOrderCheck = (orderId, orders) => {
    let orderValue = false;
    for (const order of orders) { //zorgt er voor dat bij de eerste oder die niet geserved is true is en bij de rest false
        if (!order.served) {
            if (order.id === orderId){
                orderValue = true
                return orderValue;
            }
            break;
        }
    }
    return orderValue;
};

export const totalServed = (course, productId, orders) => {
    let amountServed = 0
    orders.forEach(order => {
        if(order.served === true){
            order.products.forEach(product => {
                if(product.productId === productId && product.course === course){
                    amountServed = amountServed + product.amount
                }
            });
        }
    });
    return amountServed;
};

export const totalEarned = (orders) => {
    let amountEarned = 0
    orders.forEach(order => {
        if (order.payed === true) {
            order.products.forEach(product => {
                amountEarned = amountEarned + productPrice(product.course, product.productId, product.amount)
            });
        }
    });
    return amountEarned;
};