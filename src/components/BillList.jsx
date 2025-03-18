import Bill from "./Bill"

const BillList = ({ dataTables, dataClients }) => {
    return (
        <section className="bill-list">
            <h2 className="visually-hidden">Bill list</h2>
            <ul>
                {dataTables.map((table) => (
                    table.taken === true ? <Bill key={table.id} tableNumber={table.tableNumber} dataClient={dataClients[table.clientId]}/> : null
                ))}
            </ul>
        </section>
    );
};

export default BillList;