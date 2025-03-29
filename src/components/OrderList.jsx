import Order from "./Order"
import { firstOrderCheck } from "../services/calculator";

const OrderList = ({ data, handleServe }) => {
    return (
        <section className="order-list">
            <h2 className="visually-hidden">Order list</h2>
            <div className="order-list__beam"></div>
            <ul className="order-list__list">
                {data.orders.map((order) => (
                    <Order key={order.id} tableNumber={data.tables[order.tableId].tableNumber} clientKind={data.clients[order.clientId].kind} dataOrder={order} firstOrder={firstOrderCheck(order.id, data.orders)} handleServe={handleServe} />
                ))}
            </ul>
        </section>
    );
};

export default OrderList;