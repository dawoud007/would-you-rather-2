import React from 'react';


const Error = () => (
    <div>
        <img className="error" src='/images/404.jpg' alt={`not found`} />
        <h1 >
            404
        </h1>
        <h1 variant="subheading">
            This page does not exists.
        </h1>
    </div>
)

export default Error;