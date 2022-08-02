import React from 'react';

interface Props {
    headerFields: string[]
}

const TableHeader: React.FC<Props> = ({headerFields}) => {
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

export default React.memo(TableHeader);