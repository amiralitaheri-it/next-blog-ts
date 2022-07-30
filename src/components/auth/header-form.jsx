import React from 'react';
import Link from "next/link";

import PropTypes from "prop-types";

function HeaderForm({title, linkText, routeName}) {
    return (
        <div>
            <img
                className="h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
            />
            <h2 className="mt-6 text-3xl font-extrabold text-gray-400">{title}</h2>
            <p className="mt-2 text-sm text-gray-400">
                Or{' '}
                <Link href={`/auth/${routeName}`}>
                    <a className="font-medium text-indigo-500 hover:text-indigo-400">{linkText}</a>
                </Link>
            </p>
        </div>
    );
}

HeaderForm.propTypes = {
    title: PropTypes.string,
    linkText: PropTypes.string,
    routeName: PropTypes.string.isRequired,
}

export default React.memo(HeaderForm);