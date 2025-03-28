import { totalPrice } from "../services/calculator"
import { useState } from 'react';

const Graphic = ({ orderList }) => {
    const [graphicData, setGraphicData] = useState({
        data: [],
        highestWorth: 0,
        averageWorth: 0,
        previosLength: 0
    })

    if (orderList.length >= 4 && orderList.length !== graphicData.previosLength) {
        let dataList = [];
        let highest = 0;
        let total = 0;

        for (let i = 1; i < 5; i++) {
            const order = orderList.find(item => item.id === orderList.length - i) //find omdat de vip orders van voor worden toegevoegd
            dataList.push({
                price: totalPrice(order.products),
                orderNumber: order.id + 1
            })
            if (totalPrice(order.products) > highest){
                highest = totalPrice(order.products)
            }
            total = total + totalPrice(order.products);
        }
        
        setGraphicData({
            data: dataList,
            highestWorth: highest,
            averageWorth: total / 4,
            previosLength: orderList.length
        })
    }

    return (
        <div className="graphic">
            <h2>Orders Worth</h2>
            <div className="graphic__content">
                <div className="graphic__numbers">
                    <p>{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(graphicData.highestWorth)}</p>
                    <p>{new Intl.NumberFormat('en-DE', {style: 'currency', currency: 'EUR' }).format(0)}</p>
                </div>
                <div className="graphic__data">
                    <ul className="graphic__pillars">
                        {graphicData.data.map((dataItem) => (
                            <li key={dataItem.orderNumber} className="graphic__pillar" style={{ height: `${(dataItem.price / graphicData.highestWorth) * 100}%` }}></li>
                        ))}
                    </ul>
                    <div className="graphic__average" style={{ height: `${(graphicData.averageWorth / graphicData.highestWorth) * 100}%` }}></div>
                </div>
                <ul className="graphic__labels">
                    {graphicData.data.map((dataItem) => (
                        <li key={dataItem.orderNumber}>Order {dataItem.orderNumber}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Graphic;