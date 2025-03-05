const Order = () => {

    return (
        <li className="order">
            <div className="order__content">
                <div className="order__head">
                    <h3>Table 1</h3>
                    <img src="#" alt="VIP" />
                </div>
                <ul className="order__list">
                    <li>Pizza: 1</li>
                    <li>Spaghetti: 2</li>
                    <li>Lasagne: 3</li>
                    <li>Risotto: 1</li>
                </ul>
            </div>
            <button>Serve</button>
        </li>
    );
};

export default Order;