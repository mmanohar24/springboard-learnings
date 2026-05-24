import { useState } from "react";
import './NewItemForm.css';

function NewItemForm({ addItem }) {

    const INITIAL_STATE = {
        name: '',
        quantity: ''
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(
            formData => (
                {
                    ...formData,
                    [name]: value
                }
            )
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addItem({ ...formData });
        setFormData(INITIAL_STATE);
    }

    return (
        <div className="NewItemForm">

            <form
                className="NewItemForm-form"
                onSubmit={handleSubmit}
            >

                <label htmlFor="name"> Enter Product Name </label>
                <input
                    id="name"
                    type='text'
                    name="name"
                    placeholder="Product name"
                    value={formData.name}
                    onChange={handleChange}
                />

                <label htmlFor="quantity"> Enter Product Quantity </label>
                <input
                    id="quantity"
                    type='number'
                    name="quantity"
                    placeholder="Product quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                />

                <button
                    className="NewItemForm-button"
                > Add to Shopping List </button>
            </form>

        </div>
    )
}

export default NewItemForm;