const TableForm = ({ course }) => {
    return (
        <form className="table__form">
            {course.map((product) => (
                <div key={product.id}>
                    <label htmlFor={product.name} >{product.name}</label>
                    <input type="number" id={product.name} min="0" />
                </div>
            ))}
            <button type="submit">Order</button>
        </form>
    );
};

export default TableForm;