
const AddCustomer = () => {

    return (
        <section className="add-customer">
            <h2>Add new Customer</h2>
            <form>
                <label htmlFor="" className="visually-hidden">Add new Customer</label>
                <select name="" id="">
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