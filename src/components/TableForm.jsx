import { useState } from 'react';

const TableForm = ({ course, handleTableForm, tableId, clientId, clientStatusNumber }) => {

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
            products.push(e.target[i])
        }

        if(totalValue > 0){
            document.querySelectorAll(".table__input").forEach(item => {
                item.classList.remove("red-input")
            });
            document.querySelector(".table__error").classList.add("visually-hidden")
            handleTableForm(products, course, tableId, clientId, clientStatusNumber)
        } else {
            document.querySelectorAll(".table__input").forEach(item => {
                item.classList.add("red-input")
            });
            document.querySelector(".table__error").classList.remove("visually-hidden")
        }
    }

    return (
        <form onSubmit={handleSubmitTable} className="table__form">
            {course.map((product, index) => (
                <div key={product.id}>
                    <label htmlFor={product.name} >{product.name}</label>
                    <input className="table__input" type="number" id={index} value={values[index]} onChange={handleChange} min="0" />
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