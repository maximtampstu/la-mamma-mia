import { totalEarned } from "../services/calculator";

const TotalEarned = ({ orderList }) => {
    return (
        <section className="total-earned">
            <h2 className="visually-hidden">Total Earned</h2>
            <p>Total Earned: {new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(totalEarned(orderList))}</p>
        </section>
    );
};

export default TotalEarned;