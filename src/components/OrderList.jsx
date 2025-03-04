import Order from "./Order"

const OrderList = () => {

    return (
        <section>
            <h2>Order list</h2>
            <ul>
                <Order />
                <Order />
                <Order />
                <Order />
            </ul>
        </section>
    );
};

export default OrderList;