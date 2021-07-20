import React from 'react';

const Datalist = ({user}) => {
    return (
        <div>
            <ul>{user.intensity}</ul>
        </div>
    );
};

export default Datalist;