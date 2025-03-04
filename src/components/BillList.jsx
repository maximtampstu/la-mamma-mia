import Bill from "./Bill"

const BillList = () => {

    return (
        <section className="bill-list">
            <h2 className="visually-hidden">Bill list</h2>
            <ul>
                <Bill />
                <Bill />
                <Bill />
                <Bill />
            </ul>
        </section>
    );
};

export default BillList;