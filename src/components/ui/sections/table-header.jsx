import React from 'react';

import PropTypes from "prop-types";

function TableHeader({headerFields}) {
    return (
        <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            {
                headerFields.map((item, index) => (
                    <th scope="col" className="px-6 py-3" key={index}>
                        {item}
                    </th>
                ))
            }
        </tr>
        </thead>
    );
}

TableHeader.propTypes = {
    headerFields: PropTypes.array
}

export default React.memo(TableHeader);