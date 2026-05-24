import { useEffect, useRef, useState } from "react";

function FetchData() {

    const BASE_URL = "https://jsonplaceholder.typicode.com";

    // interface Post {
    //     id: number;
    //     title: String;
    // }

    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [page, setPage] = useState(1);

    const abortControllerRef = useRef(null);

    useEffect(() => {
        async function fetchPosts() {

            abortControllerRef.current?.abort();
            abortControllerRef.current = new AbortController();

            setIsLoading(true);

            try {
                const response = await fetch(`${BASE_URL}/posts?page=${page}&limit=10`, {
                    signal: abortControllerRef.current?.signal
                });
                const posts = await response.json();
                setPosts(posts)
            }
            catch (error) {
                if (error instanceof Error && error.name === "AbortError") {
                    console.log('Aborted');
                    return;
                }
                setError(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        fetchPosts();
    }, [page]);

    if (error) {
        return (
            <div> Something with wrong. Please try again!!! </div>
        )
    }

    return (
        <div>
            <h2> Data Fetching in React </h2>

            <button
                onClick={() => setPage(page + 1)} >
                Increase Page ({page})
            </button>

            {isLoading && <div> Loading ...... </div>}

            {
                !isLoading &&
                (
                    <ul>
                        {
                            posts.map((post) => (
                                <li key={post.id}> {post.title} </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}

export default FetchData;