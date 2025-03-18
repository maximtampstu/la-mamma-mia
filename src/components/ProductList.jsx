import { nameFinder, totalServed } from "../services/calculator";

const ProductList = ({ title, products, course, orderList }) => {

    return (
        <li className="product-list">
            <h3>{title}</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>{nameFinder(course, product.id)}: {totalServed(course, product.id, orderList)}</li>
                ))}
            </ul>
        </li>
    );
};

export default ProductList;