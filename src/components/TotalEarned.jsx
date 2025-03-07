const TotalEarned = (data) => {
    return (
        <section className="total-earned">
            <h2 className="visually-hidden">Total Earned</h2>
            <p>Total Earned: €{data.data}</p>
        </section>
    );
};

export default TotalEarned;