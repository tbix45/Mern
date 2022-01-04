import React from 'react';
import { useParams } from 'react-router';

const User = () => {
    const { id } = useParams();
    return (
        <div>
            {isNaN(id) ?
                <h1>Not a valid ID nice try though!</h1>
                : <h1>This is User #{id}</h1>
            }
        </div>
    );
};

export default User;