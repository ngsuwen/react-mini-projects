import React, { useRef } from "react";
import { Link } from "react-router-dom"

export default function Search(props) {
    const inputSearchRef = useRef();

    const handleSubmit = () => {
        const search=inputSearchRef.current.value.replace(/\s/, "+")
        fetchMovie(search)
    }

    async function fetchMovie(search){
        try {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`);
            const data = await response.json();
            props.query(data)
        } catch (error) {
            console.log(error);
        }
    }

        return (
            <>
                <input placeholder="Enter a Movie Title..." type="text" ref={inputSearchRef} />
                <Link to='/result'>
                    <input value="Search" type="submit" onClick={handleSubmit} />
                </Link>
            </>
        );
    }