import Table from "./Table"

const TableList = () => {

    return (
        <section className="table-list">
            <h2 className="visually-hidden">Table list</h2>
            <ul className="table-list__list">
                <Table />
                <Table />
                <Table />
                <Table />
            </ul>
        </section>
    );
};

export default TableList;