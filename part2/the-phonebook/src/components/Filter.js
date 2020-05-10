import React from 'react';

const Filter = ({filterName, handleFilterOnChange}) => {
    return (
        <div>
            filter by:
            <input
                value={filterName}
                onChange={handleFilterOnChange}
            />
        </div>
    );
}

export default Filter; 