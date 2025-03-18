import TableForm from "./TableForm"
import { totalPrice } from "../services/calculator";

const Table = ({ dataTable, dataClient, handleTableForm }) => {
    return (
        <li className="table">
            <div className="table__head">
                <h3>Table {dataTable.tableNumber}</h3>
                {dataClient && dataClient.kind !== "default" && (
                    dataClient.kind === "vip" ? (
                        <img src="src/assets/vip.svg" alt="VIP" />
                    ) : dataClient.kind === "birthday" ? (
                        <img src="src/assets/crown.svg" alt="Crown" />
                    ) : null
                )}
            </div>
            <div className="table__content">
                {dataTable.taken === false ? (
                    <div className="table__info">
                        <p>Empty</p>
                    </div>
                ) : dataClient.statusNumber > 0 && dataClient.statusNumber < 8 ? (
                        dataClient.statusNumber === 7 ? (
                            <div className="table__info">
                                <p>Total of: {new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice(dataClient.consumentProducts))}</p>
                                <button>Pay</button>
                            </div>
                        ) : dataClient.statusNumber % 2 === 0 ? (
                            <div className="table__info">
                                <p>Waiting on {dataClient.statusNumber === 2 ? "Drinks" : dataClient.statusNumber === 4 ? "Main Course" : dataClient.statusNumber === 6 ? "Dessert" : ""}</p>
                            </div>
                        ) : (
                            < TableForm tableId={dataTable.id} clientId={dataClient.id} clientStatusNumber={dataClient.statusNumber} handleTableForm={handleTableForm} />
                        )
                ) : null}
            </div>
        </li>
    );
};

export default Table;