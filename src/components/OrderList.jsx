import Order from "./Order"

const OrderList = ({ dataTables, dataClients, dataOrder, handleServe }) => {
    return (
        <section className="order-list">
            <h2 className="visually-hidden">Order list</h2>
            <div className="order-list__beam"></div>
            <ul className="order-list__list">
                {dataOrder.map((order, index) => (
                    <Order key={index} tableNumber={dataTables[order.tableId].tableNumber} clientKind={dataClients[order.clientId].kind} dataOrder={order} firstOrder={true} handleServe={handleServe} />
                ))}
            </ul>
        </section>
    );
};

export default OrderList;