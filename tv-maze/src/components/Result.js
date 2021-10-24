import React from "react";

export default function Result(props) {
    return (
        <div className="movie">
            {props.movie.image ?
                <>
                    <img src={props.movie.image.medium} alt={props.movie.name}/>
                    <p>{props.movie.name}</p>
                </>
                : console.log('null')}
        </div>
    );
}