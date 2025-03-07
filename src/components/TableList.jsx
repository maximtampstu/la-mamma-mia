import Table from "./Table"

const TableList = ({ dataTables, dataClients, dataProducts }) => {
    
    return (
        <section className="table-list">
            <h2 className="visually-hidden">Table list</h2>
            <ul className="table-list__list">
                {dataTables.map((table) => (
                    <Table key={table.id} dataTable={table} dataClient={dataClients[table.clientId]} dataProducts={dataProducts} />
                ))}
            </ul>
        </section>
    );
};

export default TableList;