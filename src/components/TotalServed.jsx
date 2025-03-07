import ProductList from "./ProductList"

const TotalServed = ({data}) => {
    return (
        <section className="total-served">
            <h2>Total Products served</h2>
            <ul>
                <ProductList title={"Drinks"} data={data.drinks}/>
                <ProductList title={"Main Courses"} data={data.mainCourses} />
                <ProductList title={"Desserts"} data={data.desserts} />
            </ul>
        </section>
    );
};

export default TotalServed;