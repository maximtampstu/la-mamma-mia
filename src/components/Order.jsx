const Order = ({ dataTable, dataClient, dataOrder }) => {

    return (
        <li className="order">
            <div className="order__content">
                <div className="order__head">
                    <h3>Table {dataTable.tableNumber}</h3>
                    {dataClient && dataClient.kind !== "default" && (
                        dataClient.kind === "vip" ? (
                            <img src="src/assets/vip.svg" alt="VIP" />
                        ) : dataClient.kind === "birthday" ? (
                            <img src="src/assets/crown.svg" alt="Crown" />
                        ) : null
                    )}
                </div>
                <ul className="order__list">
                    {dataOrder.products.map((product, index) => (
                        <li key={index}>{product.productName}: {product.amount}</li>
                    ))}
                </ul>
            </div>
            <button>Serve</button>
        </li>
    );
};

export default Order;