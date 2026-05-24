import { useState } from "react";

function ProfileSearchForm({ search }) {

    const [term, setTerm] = useState("");

    const handleChange = event => {
        setTerm(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
        search(term);
        setTerm("")
    }

    return (
        <div>
            <form
                onClick={handleSubmit}
            >
                <input type="text" value={term} onChange={handleChange} />

                <button>
                    Search Term
                </button>

            </form>

        </div>
    )
}

export default ProfileSearchForm;