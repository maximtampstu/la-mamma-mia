import { useState } from 'react';
import { nameFinder } from '../services/calculator';
import { products } from "../services/products";


const TableForm = ({ tableId, clientId, clientStatusNumber, handleTableForm, clientKind }) => {
    let course = "";
    if(clientStatusNumber === 1){
        course = "drinks"
    } else if (clientStatusNumber === 3) {
        course = "mainCourses"
    } else if (clientStatusNumber === 5) {
        course = "desserts"
    }
    console.log(clientKind)

    const [values, setValues] = useState({
        0: 0,
        1: 0,
        2: 0,
        3: 0
    })

    const handleChange = (e) => {
        const valuesCopy = values
        setValues({
            ...valuesCopy,
            [e.target.id]: e.target.value
        })
    }

    const handleSubmitTable = (e) => {
        e.preventDefault()

        let totalValue = 0; 
        let products = []

        for (let i = 0; i < 4; i++) {
            totalValue = totalValue + parseInt(e.target[i].value)
            if (e.target[i].value > 0) {
                products.push(e.target[i])
                console.log(e.target[i])
            }
        }

        if(totalValue > 0){
            e.target.querySelectorAll(".table__input").forEach(item => {
                item.classList.remove("red-input")
            });
            e.target.querySelector(".table__error").classList.add("visually-hidden")
            handleTableForm(products, course, tableId, clientId)
        } else {
            e.target.querySelectorAll(".table__input").forEach(item => {
                item.classList.add("red-input")
            });
            e.target.querySelector(".table__error").classList.remove("visually-hidden")
        }
    }

    return (
        <form onSubmit={handleSubmitTable} className="table__form">
            {products[course].map((product, index) => (
                <div key={product.id} className={course === "desserts" && product.id === 3 && clientKind != "birthday" ? "visually-hidden" : ""}>
                    <label htmlFor={product.name} className={course === "desserts" && product.id === 3 && clientKind === "birthday" ? "table__birthday" : ""}>{nameFinder(course, product.id)}</label>
                    <input className="table__input" type="number" id={index} value={values[index]} onChange={handleChange} min="0" max={course === "desserts" && product.id === 3 && clientKind === "birthday" ? "1" : "99"} />
                </div>
            ))}
            <div className="table__bottom">
                <p className="table__error visually-hidden">1 product required</p>
                <button type="submit">Order</button>
            </div>
        </form>
    );
};

export default TableForm;