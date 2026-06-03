import { useFormik } from "formik";
import * as Yup from "yup";
import SpaceTravelApi from "../services/SpaceTravelAPI";
import { Link, useNavigate } from "react-router-dom";
import "../css/Construction.css"


function Construction() {

    const navigate = useNavigate();

    const INITIAL_STATE =
    {
        name: "",
        capacity: "",
        description: "",
        pictureUrl: ""
    }

    const validationSchema = Yup.object(
        {
            name: Yup.string().required("Name is required"),
            capacity: Yup.number().typeError("Capacity must be a number").required("Capacity is required").positive("Capacity must be positive"),
            description: Yup.string().required("Description is required"),
            pictureUrl: Yup.string()
        }
    )

    const formik = useFormik(
        {
            initialValues: INITIAL_STATE,
            validationSchema: validationSchema,
            onSubmit: async (values, { resetForm }) => {
                const response = await SpaceTravelApi.buildSpacecraft({
                    ...values,
                    pictureUrl: values.pictureUrl || undefined
                });

                if (!response.isError) {
                    resetForm();
                    navigate("/spacecrafts")
                }
            }
        }
    )

    return (
        <div className="Construction">

            <Link to="/spacecrafts" className="Construction-backLink">  ← Back to Fleet </Link>

            <form
                className="Construction-form"
                onSubmit={formik.handleSubmit}
            >
                <label htmlFor="name"> Enter Name </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter name"
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

                <label htmlFor="capacity"> Enter Capacity </label>
                <input
                    id="capacity"
                    type="number"
                    name="capacity"
                    placeholder="Enter Capacity"
                    value={formik.values.capacity}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    style={
                        {
                            border: (formik.touched.capacity && formik.errors.capacity) ? '2px solid red' : '1px solid purple'
                        }
                    }
                />

                {
                    formik.touched.capacity && formik.errors.capacity && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.capacity}
                        </div>
                    )
                }

                <label htmlFor="description"> Enter Description </label>
                <input
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Enter description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                    style={
                        {
                            border: (formik.touched.description && formik.errors.description) ? '2px solid red' : '1px solid purple'
                        }
                    }
                />

                {
                    formik.touched.description && formik.errors.description && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.description}
                        </div>
                    )
                }

                <label htmlFor="pictureUrl"> Enter URL </label>
                <input
                    id="pictureUrl"
                    type="text"
                    name="pictureUrl"
                    placeholder="Enter pictureUrl"
                    value={formik.values.pictureUrl}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {
                    formik.touched.pictureUrl && formik.errors.pictureUrl && (
                        <div
                            style={
                                {
                                    color: 'red',
                                    fontSize: '12px'
                                }
                            }
                        >
                            {formik.errors.pictureUrl}
                        </div>
                    )
                }

                <button
                    type="submit"
                    className="Construction-formBtn"
                >
                    Launch Construction
                </button>
            </form>
        </div>
    )
}

export default Construction;