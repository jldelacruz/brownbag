import { useState, useEffect } from "react";

const url = 'https://jsonplaceholder.typicode.com/posts';

export const useGetPosts = () => {
    const [posts, setPosts] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((response) =>{
            if(response.ok) {
                return response.json();
            }
    
            throw new Error(`Something went wrong while fetching posts. Error Code: ${response.status}`);
        })
        .then(json => {
            setPosts(json);
            setIsLoading(false);
        })
        .catch(error => setError(error));
    }, []);

    return { posts, error, isLoading }
}