import { products } from "./products"

export const productPrice = (course, productId, amount) => {
    const product = products[course].find((product) => product.id === productId)
    const price = amount * product.price
    return price;
};

export const totalPrice = (productList) => {
    let totalPrice = 0;
    console.log(productList)
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

export const totalServed = (course, productId, orders) => {
    let amountServed = 0
    orders.forEach(order => {
        if(order.served === true){
            order.products.forEach(product => {
                if(product.productId === productId && product.course === course){
                    console.log(course, productId)
                    amountServed = amountServed + product.amount
                }
            });
        }
    });
    return amountServed;
};