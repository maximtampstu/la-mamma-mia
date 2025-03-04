import ProductList from "./ProductList"

const TotalServed = () => {

    return (
        <section>
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