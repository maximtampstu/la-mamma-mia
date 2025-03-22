import { nameFinder } from "../services/calculator";

const Order = ({ tableNumber, clientKind, dataOrder, firstOrder, handleServe }) => {
    const handleClickServe = () => {
        handleServe(dataOrder)
    }

    return (
        <li className={dataOrder.served ? "order visually-hidden" : "order"}>
            <div className="order__content">
                <div className="order__head">
                    <h3>Table {tableNumber}</h3>
                    { clientKind !== "default" && (
                        clientKind === "vip" ? (
                            <img src="src/assets/vip.svg" alt="VIP" />
                        ) : clientKind === "birthday" ? (
                            <img src="src/assets/crown.svg" alt="Crown" />
                        ) : null
                    )}
                </div>
                <ul className="order__list">
                    {dataOrder.products.map((product, index) => (
                        <li key={index}>{nameFinder(product.course, product.productId)}: {product.amount}</li>
                    ))}
                </ul>
            </div>
            <button className={firstOrder === true ? "" : "visually-hidden"} onClick={handleClickServe}>Serve</button>
        </li>
    );
};

export default Order;