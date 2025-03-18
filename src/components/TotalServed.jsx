import ProductList from "./ProductList"
import { products } from "../services/products";

const TotalServed = ({orderList}) => {
    return (
        <section className="total-served">
            <h2>Total Products served</h2>
            <ul>
                <ProductList title={"Drinks"} products={products.drinks} course={"drinks"} orderList={orderList} />
                <ProductList title={"Main Courses"} products={products.mainCourses} course={"mainCourses"} orderList={orderList} />
                <ProductList title={"Desserts"} products={products.desserts} course={"desserts"} orderList={orderList} />
            </ul>
        </section>
    );
};

export default TotalServed;