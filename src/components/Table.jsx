const Table = () => {

    return (
        <li>
            <div>
                <h3>Table 1</h3>
                <img src="#" alt="VIP" />
            </div>
            <div>
                <p>Waiting on order</p>
                <form>
                    <div>
                        <label htmlFor="pizza">Pizza</label>
                        <input type="number" id="pizza" value={0} min="0"/>
                    </div>
                    <div>
                        <label htmlFor="spaghetti">Spaghetti</label>
                        <input type="number" id="spaghetti" value={0} min="0" />
                    </div>
                    <div>
                        <label htmlFor="lasagne">Lasagne</label>
                        <input type="number" id="lasagne" value={0} min="0" />
                    </div>
                    <div>
                        <label htmlFor="risotto">Risotto</label>
                        <input type="number" id="risotto" value={0} min="0" />
                    </div>
                    <button type="submit">Order</button>
                </form>
            </div>
        </li>
    );
};

export default Table;