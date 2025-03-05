import ProductList from "./ProductList"

const TotalServed = () => {

    return (
        <section className="total-served">
            <h2>Total Products served</h2>
            <ul>
                <ProductList />
                <ProductList />
                <ProductList />
            </ul>
        </section>
    );
};

export default TotalServed;