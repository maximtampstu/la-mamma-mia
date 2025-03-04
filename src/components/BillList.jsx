import Bill from "./Bill"

const BillList = () => {

    return (
        <section>
            <h2>Bill list</h2>
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