import { useFormik } from 'formik';
import * as Yup from "yup";

import "./ItemForm.css"

function ItemForm({ addItem }) {

    const INITIAL_STATE =
    {
        name: "",
        quantity: "",
        purpose: ""
    }

    const validationSchema = Yup.object(
        {
            name: Yup.string().required('Item name is required'),
            quantity: Yup.number().typeError('Quantity must be a number').required('Quantity is required').positive('Quantity must be positive number').integer('Quantity must be integer'),
            purpose: Yup.string().required('Purpose is required')
        }
    );


    const formik = useFormik(
        {
            initialValues: INITIAL_STATE,
            validationSchema: validationSchema,
            onSubmit: (values, { resetForm }) => {
                addItem(values),
                    resetForm()
            }
        }
    )


    return (
        <div className="ItemForm">

            <form
                className="ItemForm-form"
                onSubmit={formik.handleSubmit}
            >

                <label htmlFor="name"> Enter Item Name </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Item name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    style={
                        {
                            border: (formik.touched.name && formik.errors.name) ? '2px solid red' : '1px solid purple'
                        }
                    }
                />

                {
                    formik.touched.name && formik.errors.name && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.name}
                        </div>
                    )
                }

                <label htmlFor="quantity"> Enter Quantity: {formik.values.quantity} </label>
                <input
                    id="quantity"
                    type="range"
                    min='1'
                    max='100'
                    name="quantity"
                    placeholder="Enter Quantity "
                    value={formik.values.quantity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    style={
                        {
                            border: (formik.touched.quantity && formik.errors.quantity) ? '2px solid red' : '1px solid purple'
                        }
                    }
                />
                {
                    formik.touched.quantity && formik.errors.quantity && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.quantity}
                        </div>
                    )
                }

                <label htmlFor="purpose"> Enter Purpose </label>
                <input
                    id="purpose"
                    type="text"
                    name="purpose"
                    placeholder="What's the purpose of this item? "
                    value={formik.values.purpose}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    style={
                        {
                            border: (formik.touched.purpose && formik.errors.purpose) ? '2px solid red' : '1px solid purple'
                        }
                    }
                />
                {
                    formik.touched.purpose && formik.errors.purpose && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.purpose}
                        </div>
                    )
                }

                <button
                    className="ItemForm-formBtn"
                    type="submit"
                > Add Items to Inventory </button>
            </form>

        </div>
    )
}

export default ItemForm;