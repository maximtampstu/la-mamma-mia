const AddCustomer = ({handleAddCustomer}) => {

    const handleSubmitAddCustomer = (e) => {
        e.preventDefault()
        handleAddCustomer(e.target.kind.value)
    }

    return (
        <section className="add-customer">
            <h2>Add new Customer</h2>
            <form onSubmit={handleSubmitAddCustomer}>
                <label htmlFor="kind" className="visually-hidden">Add new Customer</label>
                <select name="kind" id="kind">
                    <option value="default">Default</option>
                    <option value="vip">VIP</option>
                    <option value="birthday">Birthday</option>
                </select>
                <button type="submit">Add</button>
            </form>
        </section>
    );
};

export default AddCustomer;