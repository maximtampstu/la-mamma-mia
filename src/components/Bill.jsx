import { useState } from "react";
import { nameFinder, productPrice, totalPrice } from "../services/calculator"

const Bill = ({tableNumber, dataClient}) => {
    let status = "Waiting"

    switch (dataClient.statusNumber) {
        case 1:
            status = "Ready to order Drinks"
            break;
        case 2:
            status = "Waiting on Drinks"
            break;
        case 3:
            status = "Ready to order Main Course"
            break;
        case 4:
            status = "Waiting on Main Course"
            break;
        case 5:
            status = "Ready to order Dessert"
            break;
        case 6:
            status = "Waiting on Dessert"
            break;
        case 7:
            status = "Ready to Pay"
            break;
    
        default:
            break;
    }

    const [isOpen, setIsOpen] = useState(true);

    const handleClickDropDown = (e) => {
        const billTag = e.target.parentElement.parentElement
        if(isOpen === true){
            billTag.querySelector(".bill__list").classList.add("visually-hidden")
            billTag.querySelector(".bill__head button").classList.remove("upsidedown")
            setIsOpen(false)
        } else {
            billTag.querySelector(".bill__list").classList.remove("visually-hidden")
            billTag.querySelector(".bill__head button").classList.add("upsidedown")
            setIsOpen(true)
        }
    }

    return (
        <li className="bill">
            <div className="bill__head">
                <div>
                    <h3>Table {tableNumber}</h3>
                    <p>{status}</p>
                </div>
                <button className="upsidedown" onClick={handleClickDropDown}>v</button>
            </div>
            <ul className="bill__list">
                {dataClient.consumentProducts.map((product, index) => (
                    <li key={index}>
                        <p>{product.amount}x {nameFinder(product.course, product.productId)}</p>
                        <p>{productPrice(product.course, product.productId, product.amount) === 0 ? "FREE" : new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(productPrice(product.course, product.productId, product.amount))}</p>
                    </li>
                ))}
            </ul>
            <div className="bill__total">
                <p>Total</p>
                <p>{new Intl.NumberFormat('en-DE', { style: 'currency', currency: 'EUR' }).format(totalPrice(dataClient.consumentProducts))}</p>
            </div>
        </li>
    );
};

export default Bill;