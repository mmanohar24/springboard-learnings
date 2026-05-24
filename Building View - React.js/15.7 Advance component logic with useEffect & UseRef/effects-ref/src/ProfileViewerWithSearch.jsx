import { useEffect, useState } from "react";
import axios from "axios";
import ProfileSearchForm from "./ProfileSearchForm"

function ProfileViewerWithSearch() {


    const [profile, setProfile] = useState(null);
    const [url, setURL] = useState(`https://api.github.com/users/octocat`);

    const search = term => {
        setURL(`https://api.github.com/users/${term}`);
    }


    useEffect(() => {
        async function loadProfile() {
            const response = await axios.get(url);
            setProfile(response.data.name)
        }
        loadProfile();
    }, [url])

    return (
        <div>
            {
                profile ? <h1> Hi {profile} </h1> : <h1> Loading ..... </h1>
            }

            <ProfileSearchForm search={search} />
        </div>
    )
}

export default ProfileViewerWithSearch;