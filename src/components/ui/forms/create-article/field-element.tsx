import React, {useEffect} from "react";

import {Field, useField} from 'formik';
import {toast} from "react-toastify";

interface Props {
    label: string;
    name: string;
    validate?: (value: any) => undefined | string | Promise<any>;
    type?: string;
    multiple?: boolean;
    id?: string;
    value?: string;
    defaultValue?: string;
    as?: string;
    placeholder?: string;
}

const FieldElementForm: React.FC<Props> = ({label, ...props}) => {

    const [field, meta] = useField(props);

    useEffect(() => {
        if (meta.touched && meta.error) {
            toast.error(meta.error);
        }
    }, [meta.touched, meta.error]);

    return (
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
            <label htmlFor={props.id || props.name} className="block text-sm font-medium text-gray-300 sm:mt-px sm:pt-2">
                {label}
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
                {
                    (meta.touched && meta.error)
                        ? <Field {...field} {...props} className="input-form-error"
                        /> : <Field {...field} {...props} className="input-form"/>
                }
            </div>
            {(meta.touched && meta.error) ? <span className="text-rose-500 text-sm">{meta.error}</span> : null}
        </div>
    )
}


export default React.memo(FieldElementForm);