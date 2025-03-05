import Order from "./Order"

const OrderList = () => {

    return (
        <section className="order-list">
            <h2 className="visually-hidden">Order list</h2>
            <div className="order-list__beam"></div>
            <ul className="order-list__list">
                <Order />
                <Order />
                <Order />
                <Order />
            </ul>
        </section>
    );
};

export default OrderList;