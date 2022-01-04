import React from 'react';
import { useParams } from 'react-router';

const Message = () => {
    const { message, txtcol, backcol } = useParams();
    return (
        <div>
            <h3>This message will display whatever you typed in!</h3>
            <p style={{ color: txtcol, backgroundColor: backcol }}>Your message was:{message}</p>
        </div>
    );
};


export default Message;