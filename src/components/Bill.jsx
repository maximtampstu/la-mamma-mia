const Bill = () => {

    return (
        <li>
            <div>
                <div>
                    <h3>Table 1</h3>
                    <p>Status: Ready to order</p>
                </div>
                <button>v</button>
            </div>
            <ul>
                <li>
                    <p>1x Pizza</p>
                    <p>€14.00</p>
                </li>
                <li>
                    <p>3x Risotto</p>
                    <p>€38.00</p>
                </li>
                <li>
                    <p>4x Gelato</p>
                    <p>€24.00</p>
                </li>
            </ul>
            <div>
                <p>Total</p>
                <p>€76.00</p>
            </div>
        </li>
    );
};

export default Bill;