const ProductList = ({title, data}) => {

    return (
        <li className="product-list">
            <h3>{title}</h3>
            <ul>
                {data.map((product) => (
                    <li key={product.id}>{product.name}: {product.timesOrderd}</li>
                ))}
            </ul>
        </li>
    );
};

export default ProductList;