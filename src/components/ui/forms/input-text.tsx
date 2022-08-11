import React from 'react';

import {setItemOnEventHandler} from "@/types/global";

interface Props {
    labelName: string;
    handler: setItemOnEventHandler;
    nameAttr: string;
    defValue?: string;
}

const InputText: React.FC<Props> = ({labelName, handler, nameAttr, defValue = ''}) => {
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="first-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                {labelName}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input type="text" id="small-input" name={nameAttr}
                       className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       onChange={handler} defaultValue={defValue}
                />
            </div>
        </div>
    );
}

export default React.memo(InputText);