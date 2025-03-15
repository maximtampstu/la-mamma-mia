import Order from "./Order"

const OrderList = ({dataTables, dataClients, dataOrder}) => {
    console.log(dataOrder)
    return (
        <section className="order-list">
            <h2 className="visually-hidden">Order list</h2>
            <div className="order-list__beam"></div>
            <ul className="order-list__list">
                {dataOrder.map((order, index) => (
                    <Order key={index} dataTable={dataTables[order.tableId]} dataClient={dataClients[order.clientId]} dataOrder={order} />
                ))}
            </ul>
        </section>
    );
};

export default OrderList;