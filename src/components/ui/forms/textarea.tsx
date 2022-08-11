import React from 'react';
import {setItemOnEventHandler} from "@/types/global";

interface Props {
    labelName: string;
    handler: setItemOnEventHandler;
    nameAttr: string;
    defValue?: string;
}

const Textarea: React.FC<Props> = ({labelName, handler, nameAttr, defValue = ''}) => {
    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor="last-name" className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                {labelName}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-700 dark:border-gray-600">
                    <div className="py-2 px-4 bg-white rounded-b-lg dark:bg-gray-800">
                <textarea id="editor" rows={8}
                          className="block px-1.5 py-1 w-full text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                          placeholder="Write an article..." required name={nameAttr} onChange={handler} defaultValue={defValue}></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Textarea);